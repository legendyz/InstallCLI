// i18n.js — Lightweight internationalization module
// All UI text goes through t() so language can be switched at runtime.

const I18n = (() => {
  const STORAGE_KEY = 'copilot-guide-lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'zh';

  // UI chrome translations (step/faq content lives in steps.js / faq.js)
  const ui = {
    zh: {
      'app.title': 'GitHub Copilot CLI 安装引导',
      'app.subtitle': '从零开始，轻松上手 AI 编程助手',
      'welcome.select.os': '选择你的操作系统',
      'welcome.select.lang': '语言 / Language',
      'welcome.start': '开始安装',
      'welcome.intro': 'GitHub Copilot CLI 是 GitHub 推出的命令行 AI 助手。它可以帮你在终端里用自然语言完成各种开发任务——写代码、查命令、排查问题。本向导将一步步带你完成安装。',
      'nav.step': '步骤',
      'btn.prev': '上一步',
      'btn.next': '下一步',
      'btn.done': '✅ 我已完成这一步',
      'btn.skip': '跳过',
      'btn.copy': '复制',
      'btn.copied': '已复制！',
      'btn.reset': '重新开始',
      'btn.tryit': '🚀 现在就试试',
      'faq.title': '💡 常见问题',
      'faq.empty': '这一步暂无常见问题',
      'verify.success': '✅ 太好了！这一步完成了',
      'verify.fail': '❌ 看起来还没成功，请检查上面的步骤',
      'os.windows': 'Windows',
      'os.macos': 'macOS',
      'os.linux': 'Linux',
      'account.type.title': '你使用什么类型的 GitHub 账号？',
      'account.type.personal': '🙋 个人账号',
      'account.type.personal.desc': '自己注册的 GitHub 账号',
      'account.type.emu': '🏢 公司 EMU 账号',
      'account.type.emu.desc': '公司统一管理的企业账号（用户名通常含公司后缀，如 name_company）',
      'congrats.title': '🎉 恭喜你！',
      'congrats.subtitle': '你已经成功安装并启动了 GitHub Copilot CLI！',
      'congrats.next': '接下来你可以...',
      'optional': '（可选）',
      'step.substep': '子步骤',
      'why': '为什么？',
    },
    en: {
      'app.title': 'GitHub Copilot CLI Setup Guide',
      'app.subtitle': 'Get started with your AI coding assistant from scratch',
      'welcome.select.os': 'Select your operating system',
      'welcome.select.lang': 'Language / 语言',
      'welcome.start': 'Start Setup',
      'welcome.intro': 'GitHub Copilot CLI is a command-line AI assistant by GitHub. It helps you accomplish development tasks in the terminal using natural language — writing code, finding commands, debugging issues. This guide walks you through installation step by step.',
      'nav.step': 'Step',
      'btn.prev': 'Previous',
      'btn.next': 'Next',
      'btn.done': '✅ I\'ve completed this step',
      'btn.skip': 'Skip',
      'btn.copy': 'Copy',
      'btn.copied': 'Copied!',
      'btn.reset': 'Start Over',
      'btn.tryit': '🚀 Try it now',
      'faq.title': '💡 Common Questions',
      'faq.empty': 'No common questions for this step',
      'verify.success': '✅ Great! This step is done',
      'verify.fail': '❌ Doesn\'t seem to have worked. Please review the steps above',
      'os.windows': 'Windows',
      'os.macos': 'macOS',
      'os.linux': 'Linux',
      'account.type.title': 'What type of GitHub account do you use?',
      'account.type.personal': '🙋 Personal Account',
      'account.type.personal.desc': 'A GitHub account you created yourself',
      'account.type.emu': '🏢 Company EMU Account',
      'account.type.emu.desc': 'An enterprise-managed account (username usually has a company suffix like name_company)',
      'congrats.title': '🎉 Congratulations!',
      'congrats.subtitle': 'You\'ve successfully installed and launched GitHub Copilot CLI!',
      'congrats.next': 'What you can do next...',
      'optional': '(Optional)',
      'step.substep': 'Sub-step',
      'why': 'Why?',
    },
    ja: {
      'app.title': 'GitHub Copilot CLI セットアップガイド',
      'app.subtitle': 'ゼロから始める AI コーディングアシスタント',
      'welcome.select.os': 'お使いの OS を選択してください',
      'welcome.select.lang': '言語 / Language',
      'welcome.start': 'セットアップ開始',
      'welcome.intro': 'GitHub Copilot CLI は GitHub が提供するコマンドライン AI アシスタントです。ターミナルで自然言語を使って、コードの記述、コマンドの検索、問題のデバッグなど、さまざまな開発タスクをこなせます。このガイドでは、インストール手順をステップごとに説明します。',
      'nav.step': 'ステップ',
      'btn.prev': '前へ',
      'btn.next': '次へ',
      'btn.done': '✅ このステップを完了しました',
      'btn.skip': 'スキップ',
      'btn.copy': 'コピー',
      'btn.copied': 'コピーしました！',
      'btn.reset': '最初からやり直す',
      'btn.tryit': '🚀 今すぐ試す',
      'faq.title': '💡 よくある質問',
      'faq.empty': 'このステップに関するよくある質問はありません',
      'verify.success': '✅ このステップは完了です',
      'verify.fail': '❌ まだうまくいっていないようです。上記の手順を確認してください',
      'os.windows': 'Windows',
      'os.macos': 'macOS',
      'os.linux': 'Linux',
      'account.type.title': 'どのタイプの GitHub アカウントを使用していますか？',
      'account.type.personal': '🙋 個人アカウント',
      'account.type.personal.desc': '自分で登録した GitHub アカウント',
      'account.type.emu': '🏢 企業 EMU アカウント',
      'account.type.emu.desc': '企業が一括管理するアカウント（ユーザー名に会社の接尾辞が付く場合が多い。例：name_company）',
      'congrats.title': '🎉 おめでとうございます！',
      'congrats.subtitle': 'GitHub Copilot CLI のインストールと起動が完了しました！',
      'congrats.next': '次にできること...',
      'optional': '（オプション）',
      'step.substep': 'サブステップ',
      'why': 'なぜ？',
    },
  };

  function t(keyOrObj) {
    if (typeof keyOrObj === 'string') {
      return ui[currentLang]?.[keyOrObj] ?? ui['en']?.[keyOrObj] ?? keyOrObj;
    }
    if (keyOrObj && typeof keyOrObj === 'object') {
      return keyOrObj[currentLang] ?? keyOrObj['en'] ?? '';
    }
    return '';
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  function getLanguage() {
    return currentLang;
  }

  function getAvailableLanguages() {
    return [
      { code: 'zh', label: '中文' },
      { code: 'en', label: 'English' },
      { code: 'ja', label: '日本語' },
    ];
  }

  return { t, setLanguage, getLanguage, getAvailableLanguages };
})();
