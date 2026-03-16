// app.js — Wizard engine: state management, rendering, navigation

const App = (() => {
  // ── State ──
  const STORAGE_KEY = 'copilot-guide-state';
  let state = {
    os: null,           // 'windows' | 'macos' | 'linux'
    accountType: null,  // 'personal' | 'emu'
    currentStep: -1,    // -1 = welcome screen
    completed: [],      // ids of completed steps
  };

  // ── DOM refs ──
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ── State persistence ──
  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) Object.assign(state, JSON.parse(saved));
    } catch { /* ignore corrupt state */ }
  }

  function resetState() {
    state = { os: null, accountType: null, currentStep: -1, completed: [] };
    localStorage.removeItem(STORAGE_KEY);
    render();
  }

  // ── Helpers ──
  function t(keyOrObj) { return I18n.t(keyOrObj); }

  function getStepContent(step, field) {
    const data = step[field];
    if (!data) return '';
    // 'all' key = same for all OS
    if (data.all) return t(data.all);
    // OS-specific
    if (state.os && data[state.os]) return t(data[state.os]);
    // account-type specific
    if (state.accountType && data[state.accountType]) return t(data[state.accountType]);
    return '';
  }

  // ── Rendering ──
  function render() {
    updateI18nTexts();
    if (state.currentStep === -1) {
      showWelcome();
    } else if (state.currentStep >= STEPS.length) {
      showCongrats();
    } else {
      showStep(state.currentStep);
    }
    renderSidebar();
    saveState();
  }

  function updateI18nTexts() {
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val && val !== key) el.textContent = val;
    });
    document.title = t('app.title');

    // Header language switcher
    const switcher = $('#lang-switcher');
    const langs = I18n.getAvailableLanguages();
    if (switcher.options.length === 0) {
      langs.forEach((lang) => {
        const opt = document.createElement('option');
        opt.value = lang.code;
        opt.textContent = lang.label;
        switcher.appendChild(opt);
      });
      switcher.addEventListener('change', () => {
        I18n.setLanguage(switcher.value);
        render();
      });
    }
    switcher.value = I18n.getLanguage();
  }

  // ── Welcome Screen ──
  function showWelcome() {
    $('#welcome-screen').style.display = '';
    $('#step-screen').style.display = 'none';
    $('#congrats-screen').style.display = 'none';

    // Build language cards
    const langCards = $('#lang-cards');
    langCards.innerHTML = '';
    I18n.getAvailableLanguages().forEach((lang) => {
      const btn = document.createElement('button');
      btn.className = 'option-card' + (I18n.getLanguage() === lang.code ? ' selected' : '');
      btn.innerHTML = `<span class="option-label">${lang.label}</span>`;
      btn.addEventListener('click', () => {
        I18n.setLanguage(lang.code);
        render();
      });
      langCards.appendChild(btn);
    });

    // OS cards
    $$('#os-cards .option-card').forEach((card) => {
      card.classList.toggle('selected', card.dataset.os === state.os);
      card.onclick = () => {
        state.os = card.dataset.os;
        render();
      };
    });

    // Start button
    const btnStart = $('#btn-start');
    btnStart.disabled = !state.os;
    btnStart.textContent = t('welcome.start');
    btnStart.onclick = () => {
      state.currentStep = 0;
      render();
    };
  }

  // ── Step Screen ──
  function showStep(idx) {
    $('#welcome-screen').style.display = 'none';
    $('#step-screen').style.display = '';
    $('#congrats-screen').style.display = 'none';

    const step = STEPS[idx];

    // Badge & title
    $('#step-badge').textContent = `${t('nav.step')} ${idx + 1}`;
    $('#step-title').textContent = t(step.title);

    // Optional marker
    const optEl = $('#step-optional');
    if (step.optional) {
      optEl.style.display = '';
      optEl.textContent = t('optional');
    } else {
      optEl.style.display = 'none';
    }

    // Body
    let html = '';

    // Description
    html += t(step.description);

    // Account type selector (step 3)
    if (step.hasAccountType) {
      html += renderAccountSelector();
      if (state.accountType) {
        html += getStepContent(step, 'content');
      }
    } else {
      // OS-specific or all content
      html += getStepContent(step, 'content');
    }

    // EMU-specific extra content
    if (step.contentEmu && state.accountType === 'emu') {
      html += t(step.contentEmu);
    }

    // Verification section
    if (step.verification) {
      html += t(step.verification);
      if (step.verifyCommand) {
        html += `<div class="command-block"><code>${step.verifyCommand}</code><button class="btn-copy" data-cmd="${step.verifyCommand}"></button></div>`;
      }
      if (step.verifyHint) {
        html += t(step.verifyHint);
      }
    }

    // Substeps (first-launch step)
    if (step.substeps) {
      step.substeps.forEach((sub, i) => {
        html += `<div class="substep">
          <div class="substep-header">
            <span class="substep-number">${i + 1}</span>
            <span class="substep-title">${t(sub.title)}</span>
          </div>
          <div class="substep-body">
            ${t(sub.body)}
            <details class="substep-why">
              <summary>🤔 ${t('why')}</summary>
              <p>${t(sub.why)}</p>
            </details>
          </div>
        </div>`;
      });
    }

    // Exit hint (first-launch step)
    if (step.exitHint) {
      html += t(step.exitHint);
    }

    $('#step-body').innerHTML = html;

    // Attach copy buttons
    attachCopyButtons();

    // Attach account card handlers
    if (step.hasAccountType) {
      attachAccountCardHandlers();
    }

    // FAQ
    renderFAQ(step.id);

    // Navigation buttons
    const btnPrev = $('#btn-prev');
    const btnComplete = $('#btn-complete');
    const btnSkip = $('#btn-skip');

    btnPrev.style.display = idx > 0 ? '' : 'none';
    btnPrev.textContent = t('btn.prev');
    btnPrev.onclick = () => goToStep(idx - 1);

    btnComplete.textContent = t('btn.done');
    btnComplete.onclick = () => completeStep(idx);

    if (step.optional || (step.windowsOnly && state.os !== 'windows')) {
      btnSkip.style.display = '';
      btnSkip.textContent = t('btn.skip');
      btnSkip.onclick = () => goToStep(idx + 1);
    } else {
      btnSkip.style.display = 'none';
    }
  }

  function renderAccountSelector() {
    return `<div class="account-cards">
      <div class="account-card${state.accountType === 'personal' ? ' selected' : ''}" data-account="personal">
        <div class="account-card-title">${t('account.type.personal')}</div>
        <div class="account-card-desc">${t('account.type.personal.desc')}</div>
      </div>
      <div class="account-card${state.accountType === 'emu' ? ' selected' : ''}" data-account="emu">
        <div class="account-card-title">${t('account.type.emu')}</div>
        <div class="account-card-desc">${t('account.type.emu.desc')}</div>
      </div>
    </div>`;
  }

  function attachAccountCardHandlers() {
    $$('.account-card').forEach((card) => {
      card.onclick = () => {
        state.accountType = card.dataset.account;
        render();
      };
    });
  }

  // ── FAQ ──
  function renderFAQ(stepId) {
    const items = FAQS[stepId];
    const accordion = $('#faq-accordion');

    if (!items || items.length === 0) {
      accordion.innerHTML = `<p style="color:var(--c-text-secondary);font-size:.9rem;">${t('faq.empty')}</p>`;
      return;
    }

    accordion.innerHTML = items.map((item, i) => `
      <div class="accordion-item" data-faq="${i}">
        <button class="accordion-trigger">
          <span>${t(item.q)}</span>
          <span class="accordion-arrow">▼</span>
        </button>
        <div class="accordion-body">
          <div class="accordion-body-inner">${t(item.a)}</div>
        </div>
      </div>
    `).join('');

    // Toggle
    $$('.accordion-trigger').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        item.classList.toggle('open');
      });
    });
  }

  // ── Congratulations ──
  function showCongrats() {
    $('#welcome-screen').style.display = 'none';
    $('#step-screen').style.display = 'none';
    $('#congrats-screen').style.display = '';

    $('#congrats-body').innerHTML = t(CONGRATS_CONTENT);
    attachCopyButtons();
  }

  // ── Sidebar ──
  function renderSidebar() {
    const list = $('#step-list');
    list.innerHTML = STEPS.map((step, i) => {
      let cls = 'step-item';
      if (state.completed.includes(step.id)) cls += ' done';
      if (i === state.currentStep) cls += ' active';
      const numClass = 'step-number';
      const checkmark = state.completed.includes(step.id) ? '✓' : (i + 1);
      return `<li class="${cls}" data-step-idx="${i}">
        <span class="${numClass}">${checkmark}</span>
        <span class="step-label">${t(step.title)}</span>
      </li>`;
    }).join('');

    // Click navigation
    $$('.step-item').forEach((item) => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.stepIdx, 10);
        goToStep(idx);
      });
    });

    // Reset button
    $('#btn-reset').textContent = t('btn.reset');
    $('#btn-reset').onclick = () => {
      if (confirm(I18n.getLanguage() === 'zh' ? '确定要重新开始吗？所有进度将被清除。' : 'Are you sure? All progress will be cleared.')) {
        resetState();
      }
    };
  }

  // ── Navigation ──
  function goToStep(idx) {
    if (idx < -1) idx = -1;
    state.currentStep = idx;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    render();
  }

  function completeStep(idx) {
    const step = STEPS[idx];
    if (!state.completed.includes(step.id)) {
      state.completed.push(step.id);
    }
    goToStep(idx + 1);
  }

  // ── Copy to clipboard ──
  function attachCopyButtons() {
    $$('.btn-copy').forEach((btn) => {
      btn.textContent = t('btn.copy');
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const cmd = btn.dataset.cmd || btn.closest('.command-block')?.querySelector('code')?.textContent;
        if (!cmd) return;
        try {
          await navigator.clipboard.writeText(cmd);
          btn.textContent = t('btn.copied');
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = t('btn.copy');
            btn.classList.remove('copied');
          }, 1500);
        } catch {
          // Fallback
          const ta = document.createElement('textarea');
          ta.value = cmd;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          btn.textContent = t('btn.copied');
          setTimeout(() => { btn.textContent = t('btn.copy'); }, 1500);
        }
      });
    });
  }

  // ── Mobile sidebar toggle ──
  function initMobileSidebar() {
    const toggle = $('#sidebar-toggle');
    const sidebar = $('#sidebar');
    toggle?.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
    // Close sidebar when clicking a step on mobile
    sidebar?.addEventListener('click', (e) => {
      if (e.target.closest('.step-item') && window.innerWidth <= 768) {
        sidebar.classList.remove('open');
      }
    });
  }

  // ── Init ──
  function init() {
    loadState();
    initMobileSidebar();
    render();
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { resetState };
})();
