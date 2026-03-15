// steps.js — Installation step definitions (bilingual, OS-aware, EMU-aware)

const STEPS = [
  // ── Step 1: Open Terminal ──
  {
    id: 'terminal',
    title:       { zh: '学会打开终端', en: 'Open the Terminal' },
    description: {
      zh: '<p>终端（Terminal）是你和电脑用文字"对话"的窗口。安装 Copilot CLI 的所有操作都在终端里进行。</p>',
      en: '<p>The terminal is a text-based window where you type commands to interact with your computer. All Copilot CLI installation steps happen here.</p>',
    },
    content: {
      windows: {
        zh: `<h3>Windows 打开终端的方法</h3>
<ol>
  <li>按下键盘上的 <strong>Win 键</strong>（左下角有 Windows 图标的键）</li>
  <li>输入 <strong>PowerShell</strong> 或 <strong>Terminal</strong></li>
  <li>点击出现的 <strong>"Windows PowerShell"</strong> 或 <strong>"终端"</strong></li>
</ol>
<div class="info-box warning"><span class="info-box-icon">⚠️</span><span class="info-box-text"><strong>重要：</strong>请使用 PowerShell，不要使用 CMD（命令提示符）。Copilot CLI 在 Windows 上不支持 CMD，只能在 PowerShell 中运行。下一步我们会确保你的 PowerShell 版本满足要求。</span></div>`,
        en: `<h3>How to open the terminal on Windows</h3>
<ol>
  <li>Press the <strong>Win key</strong> (the key with the Windows logo, bottom-left of keyboard)</li>
  <li>Type <strong>PowerShell</strong> or <strong>Terminal</strong></li>
  <li>Click <strong>"Windows PowerShell"</strong> or <strong>"Terminal"</strong> that appears</li>
</ol>
<div class="info-box warning"><span class="info-box-icon">⚠️</span><span class="info-box-text"><strong>Important:</strong> Use PowerShell, not CMD (Command Prompt). Copilot CLI does not support CMD on Windows — it only runs in PowerShell. In the next step, we'll make sure your PowerShell version meets the requirements.</span></div>`,
      },
      macos: {
        zh: `<h3>macOS 打开终端的方法</h3>
<ol>
  <li>按下 <strong>Command + 空格</strong> 打开 Spotlight 搜索</li>
  <li>输入 <strong>Terminal</strong></li>
  <li>回车打开</li>
</ol>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text">也可以在 应用程序 → 实用工具 → 终端 中找到它。</span></div>`,
        en: `<h3>How to open the terminal on macOS</h3>
<ol>
  <li>Press <strong>Command + Space</strong> to open Spotlight</li>
  <li>Type <strong>Terminal</strong></li>
  <li>Press Enter to open it</li>
</ol>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text">You can also find it in Applications → Utilities → Terminal.</span></div>`,
      },
      linux: {
        zh: `<h3>Linux 打开终端的方法</h3>
<ol>
  <li>按下 <strong>Ctrl + Alt + T</strong>（大多数发行版通用快捷键）</li>
  <li>或在应用菜单中搜索 <strong>"Terminal"</strong></li>
</ol>`,
        en: `<h3>How to open the terminal on Linux</h3>
<ol>
  <li>Press <strong>Ctrl + Alt + T</strong> (works on most distributions)</li>
  <li>Or search for <strong>"Terminal"</strong> in your application menu</li>
</ol>`,
      },
    },
    verification: {
      zh: '<p>在终端里输入下面的命令，然后按回车。如果看到输出 <code>hello</code>，说明终端已经正常工作了！</p>',
      en: '<p>Type the following command in your terminal and press Enter. If you see <code>hello</code> in the output, your terminal is working!</p>',
    },
    verifyCommand: 'echo hello',
  },

  // ── Step 2: Install PowerShell 7 (Windows only) ──
  {
    id: 'powershell',
    title:       { zh: '安装 PowerShell 7', en: 'Install PowerShell 7' },
    windowsOnly: true,
    description: {
      zh: '<p>Copilot CLI 在 Windows 上需要 <strong>PowerShell 7</strong>（pwsh.exe）。大多数电脑没有预装，但有些可能已经有了。让我们先检查一下。</p>',
      en: '<p>Copilot CLI on Windows needs <strong>PowerShell 7</strong> (pwsh.exe). Most computers don\'t have it pre-installed, but some might. Let\'s check first.</p>',
    },
    content: {
      windows: {
        zh: `<h3>第一步：检查是否需要安装</h3>
<p>在终端中运行以下命令：</p>
<div class="command-block"><code>$PSVersionTable.PSVersion</code><button class="btn-copy" data-cmd="$PSVersionTable.PSVersion"></button></div>
<ul>
  <li>如果 <strong>Major</strong> 数字是 <strong>7</strong> 或更高 → 你已经有了，可以直接跳过这一步 ✅</li>
  <li>如果显示 <strong>5</strong>（即 5.1）→ 请继续下面的安装步骤</li>
</ul>

<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text"><strong>即使你当前用的是 PowerShell 5.1 也别担心：</strong>只要电脑上装过 PowerShell 7，Copilot CLI 就能自动找到它。你不一定要从 PowerShell 7 窗口启动。</span></div>

<h3>第二步：安装 PowerShell 7</h3>
<p>推荐使用 winget 一键安装：</p>
<div class="command-block"><code>winget install Microsoft.PowerShell</code><button class="btn-copy" data-cmd="winget install Microsoft.PowerShell"></button></div>

<h3>第三步：确认安装成功</h3>
<p>安装完成后，<strong>关闭当前终端窗口</strong>，再打开一个新的终端，运行：</p>
<div class="command-block"><code>$PSVersionTable.PSVersion</code><button class="btn-copy" data-cmd="$PSVersionTable.PSVersion"></button></div>
<p>现在 Major 应该显示 <strong>7</strong>。</p>

<div class="info-box success"><span class="info-box-icon">✅</span><span class="info-box-text"><strong>PowerShell 7 和旧版 PowerShell 5.1 可以共存，</strong>不会互相影响。安装 PowerShell 7 不会破坏你电脑上的任何东西。</span></div>`,
        en: `<h3>Step 1: Check if you need to install</h3>
<p>Run this command in your terminal:</p>
<div class="command-block"><code>$PSVersionTable.PSVersion</code><button class="btn-copy" data-cmd="$PSVersionTable.PSVersion"></button></div>
<ul>
  <li>If the <strong>Major</strong> number is <strong>7</strong> or higher → You already have it, skip this step ✅</li>
  <li>If it shows <strong>5</strong> (i.e. 5.1) → Continue with the installation below</li>
</ul>

<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text"><strong>Even if you're currently using PowerShell 5.1, don't worry:</strong> As long as PowerShell 7 is installed on your computer, Copilot CLI will find it automatically. You don't have to launch from a PowerShell 7 window.</span></div>

<h3>Step 2: Install PowerShell 7</h3>
<p>The easiest way is with winget:</p>
<div class="command-block"><code>winget install Microsoft.PowerShell</code><button class="btn-copy" data-cmd="winget install Microsoft.PowerShell"></button></div>

<h3>Step 3: Verify the installation</h3>
<p>After installation, <strong>close your current terminal window</strong>, open a new one, and run:</p>
<div class="command-block"><code>$PSVersionTable.PSVersion</code><button class="btn-copy" data-cmd="$PSVersionTable.PSVersion"></button></div>
<p>The Major version should now show <strong>7</strong>.</p>

<div class="info-box success"><span class="info-box-icon">✅</span><span class="info-box-text"><strong>PowerShell 7 coexists with the old PowerShell 5.1</strong> — they don't interfere with each other. Installing PowerShell 7 won't break anything.</span></div>`,
      },
      macos: {
        zh: `<div class="info-box success"><span class="info-box-icon">✅</span><span class="info-box-text">macOS 不需要这一步！macOS 自带的终端已经满足 Copilot CLI 的要求。请直接点击"我已完成这一步"继续。</span></div>`,
        en: `<div class="info-box success"><span class="info-box-icon">✅</span><span class="info-box-text">macOS doesn't need this step! The built-in terminal already meets Copilot CLI's requirements. Click "I've completed this step" to continue.</span></div>`,
      },
      linux: {
        zh: `<div class="info-box success"><span class="info-box-icon">✅</span><span class="info-box-text">Linux 不需要这一步！Linux 的终端已经满足 Copilot CLI 的要求。请直接点击"我已完成这一步"继续。</span></div>`,
        en: `<div class="info-box success"><span class="info-box-icon">✅</span><span class="info-box-text">Linux doesn't need this step! Your terminal already meets Copilot CLI's requirements. Click "I've completed this step" to continue.</span></div>`,
      },
    },
  },

  // ── Step 3: Install Copilot CLI ──
  {
    id: 'install',
    title:       { zh: '安装 Copilot CLI', en: 'Install Copilot CLI' },
    description: {
      zh: '<p>现在让我们安装 GitHub Copilot CLI。根据你的操作系统，复制下面的命令到终端中执行。</p>',
      en: '<p>Now let\'s install GitHub Copilot CLI. Copy the command below into your terminal and run it.</p>',
    },
    content: {
      windows: {
        zh: `<h3>推荐方式：使用 winget 安装</h3>
<p><strong>winget</strong> 是 Windows 自带的软件包管理器，可以用一行命令安装软件。</p>
<div class="command-block"><code>winget install GitHub.Copilot</code><button class="btn-copy" data-cmd="winget install GitHub.Copilot"></button></div>
<div class="info-box info"><span class="info-box-icon">ℹ️</span><span class="info-box-text">安装过程中可能会弹出用户权限确认，请点击"是"。如果提示 winget 不可用，请先更新"应用安装程序"——在 Microsoft Store 中搜索"应用安装程序"并更新。</span></div>

<h3>备选方式：使用 npm 安装</h3>
<p>如果你已经安装了 Node.js，也可以用 npm：</p>
<div class="command-block"><code>npm install -g @github/copilot</code><button class="btn-copy" data-cmd="npm install -g @github/copilot"></button></div>`,
        en: `<h3>Recommended: Install with winget</h3>
<p><strong>winget</strong> is Windows' built-in package manager — it lets you install software with a single command.</p>
<div class="command-block"><code>winget install GitHub.Copilot</code><button class="btn-copy" data-cmd="winget install GitHub.Copilot"></button></div>
<div class="info-box info"><span class="info-box-icon">ℹ️</span><span class="info-box-text">You may see a permission prompt during installation — click "Yes". If winget is not available, update "App Installer" from the Microsoft Store.</span></div>

<h3>Alternative: Install with npm</h3>
<p>If you already have Node.js installed, you can also use npm:</p>
<div class="command-block"><code>npm install -g @github/copilot</code><button class="btn-copy" data-cmd="npm install -g @github/copilot"></button></div>`,
      },
      macos: {
        zh: `<h3>推荐方式：使用 Homebrew 安装</h3>
<p><strong>Homebrew</strong> 是 macOS 上最流行的软件包管理器。</p>
<p>如果还没有安装 Homebrew，先运行这行命令安装它：</p>
<div class="command-block"><code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code><button class="btn-copy" data-cmd='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'></button></div>
<p>然后安装 Copilot CLI：</p>
<div class="command-block"><code>brew install copilot-cli</code><button class="btn-copy" data-cmd="brew install copilot-cli"></button></div>

<h3>备选方式：使用 npm 安装</h3>
<div class="command-block"><code>npm install -g @github/copilot</code><button class="btn-copy" data-cmd="npm install -g @github/copilot"></button></div>`,
        en: `<h3>Recommended: Install with Homebrew</h3>
<p><strong>Homebrew</strong> is the most popular package manager for macOS.</p>
<p>If you don't have Homebrew yet, install it first:</p>
<div class="command-block"><code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code><button class="btn-copy" data-cmd='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'></button></div>
<p>Then install Copilot CLI:</p>
<div class="command-block"><code>brew install copilot-cli</code><button class="btn-copy" data-cmd="brew install copilot-cli"></button></div>

<h3>Alternative: Install with npm</h3>
<div class="command-block"><code>npm install -g @github/copilot</code><button class="btn-copy" data-cmd="npm install -g @github/copilot"></button></div>`,
      },
      linux: {
        zh: `<h3>推荐方式：使用安装脚本</h3>
<div class="command-block"><code>curl -fsSL https://gh.io/copilot-install | bash</code><button class="btn-copy" data-cmd="curl -fsSL https://gh.io/copilot-install | bash"></button></div>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text">这行命令会从 GitHub 下载安装脚本并自动执行。如果你更喜欢 wget：<br><code>wget -qO- https://gh.io/copilot-install | bash</code></span></div>

<h3>备选方式：使用 npm 安装</h3>
<div class="command-block"><code>npm install -g @github/copilot</code><button class="btn-copy" data-cmd="npm install -g @github/copilot"></button></div>`,
        en: `<h3>Recommended: Install with the install script</h3>
<div class="command-block"><code>curl -fsSL https://gh.io/copilot-install | bash</code><button class="btn-copy" data-cmd="curl -fsSL https://gh.io/copilot-install | bash"></button></div>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text">This downloads and runs the install script from GitHub. If you prefer wget:<br><code>wget -qO- https://gh.io/copilot-install | bash</code></span></div>

<h3>Alternative: Install with npm</h3>
<div class="command-block"><code>npm install -g @github/copilot</code><button class="btn-copy" data-cmd="npm install -g @github/copilot"></button></div>`,
      },
    },
    verification: {
      zh: '<p>安装完成后，运行下面的命令来确认安装成功：</p>',
      en: '<p>After installation, run the following command to verify it worked:</p>',
    },
    verifyCommand: 'copilot --version',
  },

  // ── Step 3: GitHub Account ──
  {
    id: 'account',
    title:       { zh: 'GitHub 账号准备', en: 'GitHub Account Setup' },
    description: {
      zh: '<p>使用 Copilot CLI 需要一个 GitHub 账号。GitHub 是全球最大的代码托管平台，也是 Copilot 的"大本营"。</p>',
      en: '<p>You need a GitHub account to use Copilot CLI. GitHub is the world\'s largest code hosting platform and the home of Copilot.</p>',
    },
    hasAccountType: true,
    content: {
      personal: {
        zh: `<h3>注册个人 GitHub 账号</h3>
<p>如果你还没有 GitHub 账号，请前往下面的链接注册一个（免费）：</p>
<p><a href="https://github.com/signup" target="_blank" rel="noopener">👉 github.com/signup</a></p>
<ol>
  <li>输入你的邮箱地址</li>
  <li>设置密码</li>
  <li>选择用户名</li>
  <li>完成邮箱验证</li>
</ol>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text">如果你已经有 GitHub 账号，可以直接点"我已完成这一步"继续。</span></div>`,
        en: `<h3>Create a personal GitHub account</h3>
<p>If you don't have a GitHub account yet, register for free at:</p>
<p><a href="https://github.com/signup" target="_blank" rel="noopener">👉 github.com/signup</a></p>
<ol>
  <li>Enter your email address</li>
  <li>Set a password</li>
  <li>Choose a username</li>
  <li>Verify your email</li>
</ol>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text">If you already have a GitHub account, just click "I've completed this step" to continue.</span></div>`,
      },
      emu: {
        zh: `<h3>关于企业 EMU 账号</h3>
<p><strong>EMU（Enterprise Managed Users）</strong>是企业统一管理的 GitHub 账号。与个人账号不同的是：</p>
<ul>
  <li>账号由公司 IT 部门创建和管理</li>
  <li>用户名通常包含公司后缀，例如 <code>zhangsan_contoso</code></li>
  <li>登录时可能需要通过公司的 SSO（单点登录）系统</li>
  <li>你无法自行注册——需要联系你的 IT 管理员</li>
</ul>

<div class="info-box info"><span class="info-box-icon">🏢</span><span class="info-box-text"><strong>微软员工（Microsoft FTE）请注意：</strong><br>请参考 <a href="https://aka.ms/copilot" target="_blank" rel="noopener">aka.ms/copilot</a> 中的引导来激活你的 EMU 账号。</span></div>

<div class="info-box info"><span class="info-box-icon">🤝</span><span class="info-box-text"><strong>微软非正式员工（Non-FTE / Vendor）请注意：</strong><br>请参考 <a href="https://aka.ms/copilot/vendors" target="_blank" rel="noopener">aka.ms/copilot/vendors</a> 中的指导来获取访问权限。</span></div>

<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text"><strong>建议同时创建个人 GitHub 账号：</strong><br>除了 EMU 账号之外，建议你也在 <a href="https://github.com/signup" target="_blank" rel="noopener">github.com/signup</a> 注册一个个人账号，并在 GitHub 设置中将个人账号与 EMU 账号关联。这样你可以在工作之外也使用 GitHub 的各种功能（如参与开源项目、管理个人代码等）。</span></div>

<div class="info-box warning"><span class="info-box-icon">⚠️</span><span class="info-box-text">如果你还没有 EMU 账号，请联系你公司的 IT 部门或管理员获取。你可以告诉他们你需要一个 GitHub EMU 账号来使用 GitHub Copilot CLI。</span></div>`,
        en: `<h3>About Enterprise Managed User (EMU) accounts</h3>
<p><strong>EMU (Enterprise Managed Users)</strong> are GitHub accounts managed by your company. Unlike personal accounts:</p>
<ul>
  <li>The account is created and managed by your company's IT department</li>
  <li>Usernames typically include a company suffix, e.g. <code>jsmith_contoso</code></li>
  <li>You may need to log in through your company's SSO (Single Sign-On) system</li>
  <li>You cannot sign up yourself — contact your IT admin</li>
</ul>

<div class="info-box info"><span class="info-box-icon">🏢</span><span class="info-box-text"><strong>Microsoft employees (FTEs):</strong><br>Please follow the guide at <a href="https://aka.ms/copilot" target="_blank" rel="noopener">aka.ms/copilot</a> to activate your EMU account.</span></div>

<div class="info-box info"><span class="info-box-icon">🤝</span><span class="info-box-text"><strong>Microsoft non-FTEs (Vendors / Contractors):</strong><br>Please follow the guide at <a href="https://aka.ms/copilot/vendors" target="_blank" rel="noopener">aka.ms/copilot/vendors</a> to get access.</span></div>

<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text"><strong>We recommend also creating a personal GitHub account:</strong><br>In addition to your EMU account, consider signing up for a personal account at <a href="https://github.com/signup" target="_blank" rel="noopener">github.com/signup</a> and linking it to your EMU account in GitHub settings. This lets you use GitHub outside of work (e.g., contributing to open source, managing personal projects).</span></div>

<div class="info-box warning"><span class="info-box-icon">⚠️</span><span class="info-box-text">If you don't have an EMU account yet, contact your company's IT department. Let them know you need a GitHub EMU account to use GitHub Copilot CLI.</span></div>`,
      },
    },
  },

  // ── Step 4: Copilot Subscription ──
  {
    id: 'subscription',
    title:       { zh: '获取 Copilot 订阅', en: 'Get Copilot Access' },
    description: {
      zh: '<p>Copilot CLI 需要 GitHub Copilot 订阅才能使用。好消息是——GitHub 提供免费版本！</p>',
      en: '<p>Copilot CLI requires a GitHub Copilot subscription. The good news — GitHub offers a free tier!</p>',
    },
    content: {
      personal: {
        zh: `<h3>选择 Copilot 方案</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <tr style="background:var(--c-bg);"><th style="padding:8px 12px;text-align:left;border:1px solid var(--c-border);">方案</th><th style="padding:8px 12px;text-align:left;border:1px solid var(--c-border);">价格</th><th style="padding:8px 12px;text-align:left;border:1px solid var(--c-border);">适合</th></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);">Copilot Free</td><td style="padding:8px 12px;border:1px solid var(--c-border);">免费</td><td style="padding:8px 12px;border:1px solid var(--c-border);">个人学习、轻度使用</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);">Copilot Pro</td><td style="padding:8px 12px;border:1px solid var(--c-border);">$10/月</td><td style="padding:8px 12px;border:1px solid var(--c-border);">专业开发者</td></tr>
</table>
<p>对于刚入门的你，<strong>免费版完全够用</strong>。</p>
<p><a href="https://github.com/settings/copilot" target="_blank" rel="noopener">👉 前往 GitHub Copilot 设置页面开通</a></p>`,
        en: `<h3>Choose a Copilot plan</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <tr style="background:var(--c-bg);"><th style="padding:8px 12px;text-align:left;border:1px solid var(--c-border);">Plan</th><th style="padding:8px 12px;text-align:left;border:1px solid var(--c-border);">Price</th><th style="padding:8px 12px;text-align:left;border:1px solid var(--c-border);">Best for</th></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);">Copilot Free</td><td style="padding:8px 12px;border:1px solid var(--c-border);">Free</td><td style="padding:8px 12px;border:1px solid var(--c-border);">Learning, light usage</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);">Copilot Pro</td><td style="padding:8px 12px;border:1px solid var(--c-border);">$10/mo</td><td style="padding:8px 12px;border:1px solid var(--c-border);">Professional developers</td></tr>
</table>
<p>For getting started, the <strong>free tier is more than enough</strong>.</p>
<p><a href="https://github.com/settings/copilot" target="_blank" rel="noopener">👉 Go to GitHub Copilot settings to enable it</a></p>`,
      },
      emu: {
        zh: `<h3>EMU 账号的 Copilot 权限</h3>
<p>使用企业 EMU 账号时，Copilot 的访问权限由你的企业管理员统一管理，你<strong>不需要自己订阅</strong>。</p>
<div class="info-box info"><span class="info-box-icon">🏢</span><span class="info-box-text"><strong>微软员工：</strong>请访问 <a href="https://aka.ms/copilot" target="_blank" rel="noopener">aka.ms/copilot</a> 确认你的 Copilot 权限已激活。</span></div>
<div class="info-box info"><span class="info-box-icon">🤝</span><span class="info-box-text"><strong>微软非正式员工（Vendor）：</strong>请访问 <a href="https://aka.ms/copilot/vendors" target="_blank" rel="noopener">aka.ms/copilot/vendors</a> 获取访问指导。</span></div>
<div class="info-box info"><span class="info-box-icon">📋</span><span class="info-box-text">
<strong>其他公司的 EMU 用户，如果 Copilot 还没有开通：</strong><br>
请联系你的 IT 管理员，告诉他们：<br>
"我需要在我的 GitHub EMU 账号上启用 GitHub Copilot 权限，以便使用 Copilot CLI。"
</span></div>
<p>管理员开通后，你在下一步登录时就会自动获得 Copilot 使用权限。</p>`,
        en: `<h3>Copilot access for EMU accounts</h3>
<p>With an EMU account, Copilot access is managed by your enterprise admin. You <strong>don't need to subscribe individually</strong>.</p>
<div class="info-box info"><span class="info-box-icon">🏢</span><span class="info-box-text"><strong>Microsoft employees:</strong> Visit <a href="https://aka.ms/copilot" target="_blank" rel="noopener">aka.ms/copilot</a> to verify your Copilot access is activated.</span></div>
<div class="info-box info"><span class="info-box-icon">🤝</span><span class="info-box-text"><strong>Microsoft vendors / contractors:</strong> Visit <a href="https://aka.ms/copilot/vendors" target="_blank" rel="noopener">aka.ms/copilot/vendors</a> for access instructions.</span></div>
<div class="info-box info"><span class="info-box-icon">📋</span><span class="info-box-text">
<strong>EMU users at other companies — if Copilot is not enabled yet:</strong><br>
Contact your IT admin and let them know:<br>
"I need GitHub Copilot enabled on my GitHub EMU account to use Copilot CLI."
</span></div>
<p>Once enabled by your admin, you'll automatically get Copilot access when you log in.</p>`,
      },
    },
  },

  // ── Step 5: Authentication ──
  {
    id: 'auth',
    title:       { zh: '登录认证', en: 'Log In' },
    description: {
      zh: '<p>现在让我们登录你的 GitHub 账号，让 Copilot CLI 知道"你是谁"。</p>',
      en: '<p>Now let\'s log into your GitHub account so Copilot CLI knows who you are.</p>',
    },
    content: {
      all: {
        zh: `<h3>启动并登录</h3>
<p>在终端中运行：</p>
<div class="command-block"><code>copilot</code><button class="btn-copy" data-cmd="copilot"></button></div>
<p>进入 Copilot CLI 后，输入登录命令：</p>
<div class="command-block"><code>/login</code><button class="btn-copy" data-cmd="/login"></button></div>
<p>系统会给你一个 <strong>设备激活码</strong>，并自动打开浏览器。按照浏览器中的提示：</p>
<ol>
  <li>输入显示的激活码</li>
  <li>用你的 GitHub 账号登录</li>
  <li>授权 Copilot CLI 的访问权限</li>
</ol>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text">如果浏览器没有自动打开，手动访问 <a href="https://github.com/login/device" target="_blank" rel="noopener">github.com/login/device</a> 并输入激活码。</span></div>`,
        en: `<h3>Launch and log in</h3>
<p>Run this in your terminal:</p>
<div class="command-block"><code>copilot</code><button class="btn-copy" data-cmd="copilot"></button></div>
<p>Once Copilot CLI starts, type the login command:</p>
<div class="command-block"><code>/login</code><button class="btn-copy" data-cmd="/login"></button></div>
<p>The system will give you a <strong>device activation code</strong> and open your browser. Follow the prompts:</p>
<ol>
  <li>Enter the activation code shown in the terminal</li>
  <li>Log in with your GitHub account</li>
  <li>Authorize Copilot CLI access</li>
</ol>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text">If the browser doesn't open automatically, visit <a href="https://github.com/login/device" target="_blank" rel="noopener">github.com/login/device</a> and enter the code manually.</span></div>`,
      },
    },
    contentEmu: {
      zh: `<div class="info-box warning"><span class="info-box-icon">🏢</span><span class="info-box-text">使用 EMU 账号登录时，浏览器可能会跳转到你公司的 SSO 登录页面，这是正常的。使用你的公司凭据登录即可。</span></div>`,
      en: `<div class="info-box warning"><span class="info-box-icon">🏢</span><span class="info-box-text">When logging in with an EMU account, the browser may redirect to your company's SSO login page — this is normal. Log in with your company credentials.</span></div>`,
    },
  },

  // ── Step 6: Verify Installation ──
  {
    id: 'verify',
    title:       { zh: '验证安装', en: 'Verify Installation' },
    description: {
      zh: '<p>让我们确认 Copilot CLI 已经正确安装并且能正常工作。</p>',
      en: '<p>Let\'s make sure Copilot CLI is correctly installed and working.</p>',
    },
    content: {
      all: {
        zh: `<h3>检查版本</h3>
<p>在终端中运行：</p>
<div class="command-block"><code>copilot --version</code><button class="btn-copy" data-cmd="copilot --version"></button></div>
<p>如果看到版本号（例如 <code>0.x.x</code>），说明安装成功！</p>

<div class="info-box success"><span class="info-box-icon">✅</span><span class="info-box-text">看到版本号了？太好了，Copilot CLI 已经成功安装在你的电脑上了！</span></div>

<div class="info-box danger"><span class="info-box-icon">❌</span><span class="info-box-text">如果提示"找不到命令"或出错，请尝试：<br>1. 关闭终端，重新打开一个新的终端<br>2. 再次运行 <code>copilot --version</code><br>3. 如果仍有问题，请回到第 2 步重新安装</span></div>`,
        en: `<h3>Check the version</h3>
<p>Run this in your terminal:</p>
<div class="command-block"><code>copilot --version</code><button class="btn-copy" data-cmd="copilot --version"></button></div>
<p>If you see a version number (e.g. <code>0.x.x</code>), the installation is successful!</p>

<div class="info-box success"><span class="info-box-icon">✅</span><span class="info-box-text">See a version number? Great — Copilot CLI is successfully installed on your machine!</span></div>

<div class="info-box danger"><span class="info-box-icon">❌</span><span class="info-box-text">If you see "command not found" or an error, try:<br>1. Close the terminal and open a new one<br>2. Run <code>copilot --version</code> again<br>3. If it still doesn't work, go back to step 2 and reinstall</span></div>`,
      },
    },
  },

  // ── Step 7: First Launch Experience (Optional) ──
  {
    id: 'first-launch',
    title:    { zh: '🚀 首次启动体验', en: '🚀 First Launch Experience' },
    optional: true,
    description: {
      zh: '<p>恭喜你走到了这一步！现在让我们一起启动 Copilot CLI，体验你的第一次 AI 对话。</p>',
      en: '<p>Congrats on making it this far! Let\'s launch Copilot CLI together and try your first AI conversation.</p>',
    },
    content: {
      all: {
        zh: `<p>在终端中运行：</p>
<div class="command-block"><code>copilot</code><button class="btn-copy" data-cmd="copilot"></button></div>
<p>首次启动时，你可能会遇到以下几个步骤：</p>`,
        en: `<p>Run this in your terminal:</p>
<div class="command-block"><code>copilot</code><button class="btn-copy" data-cmd="copilot"></button></div>
<p>On your first launch, you may encounter the following steps:</p>`,
      },
    },
    substeps: [
      {
        title: { zh: '使用条款和隐私协议', en: 'Terms of Use & Privacy Agreement' },
        body: {
          zh: '<p>系统可能会显示使用条款，询问你是否同意。输入 <code>y</code> 或选择"同意"即可。</p>',
          en: '<p>You may see terms of use and be asked to accept them. Type <code>y</code> or select "Accept".</p>',
        },
        why: {
          zh: '这是合规要求。GitHub 需要确认你了解 Copilot 如何使用数据、AI 生成内容的限制等。这些条款保护你的权益。',
          en: 'This is a compliance requirement. GitHub needs to confirm you understand how Copilot uses data and the limitations of AI-generated content. These terms protect your rights.',
        },
      },
      {
        title: { zh: '账号认证确认', en: 'Account Authentication' },
        body: {
          zh: '<p>如果你在步骤 5 已经登录，这里会显示你的用户名并确认已登录。如果还没登录，系统会再次引导你完成 <code>/login</code> 流程。</p>',
          en: '<p>If you logged in during step 5, it will show your username and confirm you\'re authenticated. Otherwise, it will guide you through the <code>/login</code> flow again.</p>',
        },
        why: {
          zh: 'Copilot CLI 需要验证你的 GitHub 身份，以确认你有权使用 Copilot 服务。每次启动都会检查认证状态。',
          en: 'Copilot CLI needs to verify your GitHub identity to confirm you have access to the Copilot service. It checks your auth status on each launch.',
        },
      },
      {
        title: { zh: '了解 Copilot CLI 的目录结构', en: 'Copilot CLI Directory Structure' },
        body: {
          zh: `<p>首次启动后，Copilot CLI 会在你的用户目录下自动创建一个 <code>~/.copilot/</code> 文件夹（Windows 上是 <code>%USERPROFILE%\\.copilot\\</code>）。这个文件夹存放了 Copilot 运行所需的所有数据：</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:.9rem">
<tr style="background:var(--c-primary-bg)"><th style="text-align:left;padding:8px;border:1px solid var(--c-border)">📁 目录</th><th style="text-align:left;padding:8px;border:1px solid var(--c-border)">用途</th><th style="text-align:left;padding:8px;border:1px solid var(--c-border)">何时出现</th></tr>
<tr><td style="padding:8px;border:1px solid var(--c-border)"><code>session-state/</code></td><td style="padding:8px;border:1px solid var(--c-border)">每次对话的会话数据（计划、检查点、上下文记忆等）</td><td style="padding:8px;border:1px solid var(--c-border)">首次对话后</td></tr>
<tr><td style="padding:8px;border:1px solid var(--c-border)"><code>logs/</code></td><td style="padding:8px;border:1px solid var(--c-border)">运行日志，遇到问题时可以查看这里排查错误</td><td style="padding:8px;border:1px solid var(--c-border)">首次启动后</td></tr>
<tr><td style="padding:8px;border:1px solid var(--c-border)"><code>pkg/</code></td><td style="padding:8px;border:1px solid var(--c-border)">Copilot CLI 的程序包文件</td><td style="padding:8px;border:1px solid var(--c-border)">安装时</td></tr>
<tr><td style="padding:8px;border:1px solid var(--c-border)"><code>tmp/</code></td><td style="padding:8px;border:1px solid var(--c-border)">临时文件，可安全忽略</td><td style="padding:8px;border:1px solid var(--c-border)">运行过程中按需创建</td></tr>
<tr><td style="padding:8px;border:1px solid var(--c-border)"><code>win32-x64/</code> 或类似</td><td style="padding:8px;border:1px solid var(--c-border)">适配你操作系统的平台专属文件</td><td style="padding:8px;border:1px solid var(--c-border)">安装时</td></tr>
<tr><td style="padding:8px;border:1px solid var(--c-border)"><code>mcp-config.json</code></td><td style="padding:8px;border:1px solid var(--c-border)">MCP 服务器配置文件（高级功能，初学者可忽略）</td><td style="padding:8px;border:1px solid var(--c-border)">配置 MCP 时才出现</td></tr>
</table>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text"><strong>注意：</strong>这些目录<strong>不会一次性全部出现</strong>。有些在安装时就已创建，有些要等到你第一次启动或使用特定功能后才会生成。如果你现在打开 <code>.copilot</code> 文件夹发现里面的内容和表格不完全一样，这是正常的——随着你的使用，它们会逐渐出现。<br><br>你不需要手动修改这些目录，它们由 Copilot 自动管理。如果以后遇到问题需要排查，知道日志在 <code>logs/</code> 里会很有帮助。</span></div>`,
          en: `<p>After the first launch, Copilot CLI automatically creates a <code>~/.copilot/</code> folder in your home directory (on Windows: <code>%USERPROFILE%\\.copilot\\</code>). This folder stores all the data Copilot needs to run:</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:.9rem">
<tr style="background:var(--c-primary-bg)"><th style="text-align:left;padding:8px;border:1px solid var(--c-border)">📁 Directory</th><th style="text-align:left;padding:8px;border:1px solid var(--c-border)">Purpose</th><th style="text-align:left;padding:8px;border:1px solid var(--c-border)">When it appears</th></tr>
<tr><td style="padding:8px;border:1px solid var(--c-border)"><code>session-state/</code></td><td style="padding:8px;border:1px solid var(--c-border)">Session data for each conversation (plans, checkpoints, context memory)</td><td style="padding:8px;border:1px solid var(--c-border)">After first conversation</td></tr>
<tr><td style="padding:8px;border:1px solid var(--c-border)"><code>logs/</code></td><td style="padding:8px;border:1px solid var(--c-border)">Runtime logs — useful for troubleshooting when things go wrong</td><td style="padding:8px;border:1px solid var(--c-border)">After first launch</td></tr>
<tr><td style="padding:8px;border:1px solid var(--c-border)"><code>pkg/</code></td><td style="padding:8px;border:1px solid var(--c-border)">Copilot CLI package files</td><td style="padding:8px;border:1px solid var(--c-border)">During installation</td></tr>
<tr><td style="padding:8px;border:1px solid var(--c-border)"><code>tmp/</code></td><td style="padding:8px;border:1px solid var(--c-border)">Temporary files, safe to ignore</td><td style="padding:8px;border:1px solid var(--c-border)">Created on demand</td></tr>
<tr><td style="padding:8px;border:1px solid var(--c-border)"><code>win32-x64/</code> or similar</td><td style="padding:8px;border:1px solid var(--c-border)">Platform-specific files for your operating system</td><td style="padding:8px;border:1px solid var(--c-border)">During installation</td></tr>
<tr><td style="padding:8px;border:1px solid var(--c-border)"><code>mcp-config.json</code></td><td style="padding:8px;border:1px solid var(--c-border)">MCP server configuration (advanced feature, beginners can ignore)</td><td style="padding:8px;border:1px solid var(--c-border)">Only when MCP is configured</td></tr>
</table>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text"><strong>Note:</strong> These directories <strong>don't all appear at once</strong>. Some are created during installation, while others only appear after your first launch or when you use specific features. If you open the <code>.copilot</code> folder now and it doesn't match this table exactly, that's perfectly normal — they'll appear gradually as you use Copilot.<br><br>You don't need to modify these directories — they're managed automatically. If you ever need to troubleshoot, the <code>logs/</code> folder is where to look.</span></div>`,
        },
        why: {
          zh: '了解工具的数据存放位置是一个好习惯。当你需要清理磁盘空间、备份配置、或排查问题时，知道这些目录的作用会非常有帮助。',
          en: 'Knowing where a tool stores its data is good practice. It helps when you need to free disk space, back up settings, or troubleshoot issues.',
        },
      },
      {
        title: { zh: '进入交互界面', en: 'Enter the Interactive Interface' },
        body: {
          zh: '<p>成功启动后，你会看到一个类似聊天窗口的界面。光标停在输入行，等待你输入指令。</p>',
          en: '<p>Once launched, you\'ll see a chat-like interface. The cursor will be waiting for your input on a command line.</p>',
        },
        why: {
          zh: 'Copilot CLI 是一个"对话式"工具——你用自然语言告诉它你想做什么，它会帮你生成代码、命令或解答。',
          en: 'Copilot CLI is a conversational tool — you tell it what you want in natural language, and it generates code, commands, or explanations for you.',
        },
      },
      {
        title: { zh: '试试你的第一条指令', en: 'Try Your First Command' },
        body: {
          zh: `<p>试着输入一条简单的指令，例如：</p>
<div class="command-block"><code>list files in current directory</code><button class="btn-copy" data-cmd="list files in current directory"></button></div>
<p>Copilot 会理解你的意图，为你生成相应的终端命令并执行。</p>
<div class="info-box success"><span class="info-box-icon">🎉</span><span class="info-box-text">如果你看到了文件列表的输出——恭喜，你已经成功使用了 Copilot CLI！</span></div>`,
          en: `<p>Try typing a simple instruction, for example:</p>
<div class="command-block"><code>list files in current directory</code><button class="btn-copy" data-cmd="list files in current directory"></button></div>
<p>Copilot will understand your intent and generate the appropriate terminal command.</p>
<div class="info-box success"><span class="info-box-icon">🎉</span><span class="info-box-text">If you see a file listing — congratulations, you've successfully used Copilot CLI!</span></div>`,
        },
        why: {
          zh: '这验证了整个链路都在正常工作：CLI 工具 → GitHub 认证 → AI 模型 → 结果返回。',
          en: 'This verifies the entire pipeline is working: CLI tool → GitHub auth → AI model → results returned.',
        },
      },
      {
        title: { zh: '⭐ 初始化项目指令文件（copilot init）— 强烈推荐', en: '⭐ Initialize Project Instructions (copilot init) — Strongly Recommended' },
        body: {
          zh: `<div class="info-box warning"><span class="info-box-icon">⭐</span><span class="info-box-text"><strong>这一步是可选的，但强烈推荐。</strong>不做这一步 Copilot 也能正常使用，但做了之后 Copilot 的回答质量会明显提升——尤其在大型或复杂项目中，差距非常大。</span></div>
<p>当你在一个代码项目中工作时，可以先退出对话模式，然后运行：</p>
<div class="command-block"><code>/exit</code><button class="btn-copy" data-cmd="/exit"></button></div>
<div class="command-block"><code>copilot init</code><button class="btn-copy" data-cmd="copilot init"></button></div>
<p>这个命令会分析你的项目代码，自动生成一个 <code>.github/copilot-instructions.md</code> 文件。这个文件告诉 Copilot 你的项目用了哪些技术、遵循什么编码风格、如何构建和测试等信息。</p>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text"><strong>打个比方：</strong>不用 <code>copilot init</code> 就像让一个新同事帮你干活，但不告诉他公司的规范和项目背景；用了之后就像给他一份详细的"项目说明书"，他干出来的活自然更靠谱。<br><br>如果你现在还没有自己的代码项目，可以先跳过这一步，以后开始项目时记得回来用一下。</span></div>`,
          en: `<div class="info-box warning"><span class="info-box-icon">⭐</span><span class="info-box-text"><strong>This step is optional but strongly recommended.</strong> Copilot works fine without it, but with it the quality of Copilot's responses improves noticeably — especially in large or complex projects, the difference is significant.</span></div>
<p>When working inside a code project, you can exit the conversation first, then run:</p>
<div class="command-block"><code>/exit</code><button class="btn-copy" data-cmd="/exit"></button></div>
<div class="command-block"><code>copilot init</code><button class="btn-copy" data-cmd="copilot init"></button></div>
<p>This command analyzes your project's code and automatically generates a <code>.github/copilot-instructions.md</code> file. This file tells Copilot about your project's tech stack, coding style, build and test commands, and more.</p>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text"><strong>Think of it this way:</strong> Without <code>copilot init</code>, it's like asking a new colleague to help you but not telling them about the project's conventions and context. With it, you're giving them a detailed "project handbook" — naturally, their work will be much better.<br><br>If you don't have your own code project yet, feel free to skip this step and come back when you start one.</span></div>`,
        },
        why: {
          zh: 'copilot init 让 AI 了解你的项目上下文。没有它，Copilot 也能工作，但有了它，回答会更精准、更贴合你的项目实际情况。',
          en: 'copilot init gives the AI context about your project. Copilot works without it, but with it, responses will be more precise and aligned with your project\'s actual setup.',
        },
      },
    ],
    exitHint: {
      zh: '<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text">想退出 Copilot CLI？输入 <code>/exit</code> 或按 <code>Ctrl+C</code> 即可。</span></div>',
      en: '<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text">Want to exit Copilot CLI? Type <code>/exit</code> or press <code>Ctrl+C</code>.</span></div>',
    },
  },

  // ── Step 9: Common Commands (Optional) ──
  {
    id: 'commands',
    title:    { zh: '📖 常用命令速查', en: '📖 Common Commands' },
    optional: true,
    description: {
      zh: '<p>掌握这些常用命令和技巧，能让你更高效地使用 Copilot CLI。</p>',
      en: '<p>Learn these common commands and tips to get the most out of Copilot CLI.</p>',
    },
    content: {
      all: {
        zh: `<h3>对话方式</h3>
<p>Copilot CLI 最核心的能力就是<strong>用自然语言对话</strong>。你可以像跟真人聊天一样提问：</p>
<div class="command-block"><code>帮我找出当前目录下最大的 5 个文件</code><button class="btn-copy" data-cmd="帮我找出当前目录下最大的 5 个文件"></button></div>
<div class="command-block"><code>写一个 Python 脚本，把所有 .txt 文件合并成一个</code><button class="btn-copy" data-cmd="写一个 Python 脚本，把所有 .txt 文件合并成一个"></button></div>
<div class="command-block"><code>解释一下 git rebase 和 git merge 的区别</code><button class="btn-copy" data-cmd="解释一下 git rebase 和 git merge 的区别"></button></div>

<h3>内置命令（以 / 开头）</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <tr style="background:var(--c-bg);"><th style="padding:8px 12px;text-align:left;border:1px solid var(--c-border);">命令</th><th style="padding:8px 12px;text-align:left;border:1px solid var(--c-border);">作用</th></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/help</td><td style="padding:8px 12px;border:1px solid var(--c-border);">查看所有可用命令——记不住命令时的万能入口</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/clear</td><td style="padding:8px 12px;border:1px solid var(--c-border);">清空对话历史，重新开始一个干净的对话</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/model</td><td style="padding:8px 12px;border:1px solid var(--c-border);">切换 AI 模型（如 GPT、Claude），不同模型擅长的领域不同</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/compact</td><td style="padding:8px 12px;border:1px solid var(--c-border);">压缩对话记录以节省上下文空间，适合长对话</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/usage</td><td style="padding:8px 12px;border:1px solid var(--c-border);">查看当前会话的使用统计（请求次数、token 消耗等）</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/context</td><td style="padding:8px 12px;border:1px solid var(--c-border);">查看 Copilot 当前能"看到"哪些文件和信息</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/sessions</td><td style="padding:8px 12px;border:1px solid var(--c-border);">查看会话信息（开始时间、修改的文件等）</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/login</td><td style="padding:8px 12px;border:1px solid var(--c-border);">登录 GitHub 账号</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/logout</td><td style="padding:8px 12px;border:1px solid var(--c-border);">退出当前账号（切换账号时使用）</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/exit</td><td style="padding:8px 12px;border:1px solid var(--c-border);">退出 Copilot CLI，回到普通终端</td></tr>
</table>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text">记不住这些也没关系！随时输入 <code>/help</code> 就能看到完整列表。</span></div>

<h3>提问技巧</h3>
<ul>
  <li>💬 <strong>具体比笼统好</strong>："创建一个 Node.js HTTP 服务器，监听 3000 端口" 比 "写个服务器" 效果好</li>
  <li>📁 <strong>在项目目录下启动</strong>：Copilot 能读取你的项目文件，理解上下文</li>
  <li>🔄 <strong>可以追问</strong>：如果结果不满意，继续对话要求修改</li>
  <li>🌍 <strong>中英文都行</strong>：用你最舒服的语言</li>
</ul>`,
        en: `<h3>Conversation style</h3>
<p>The core ability of Copilot CLI is <strong>natural language conversation</strong>. Ask questions just like talking to a person:</p>
<div class="command-block"><code>find the 5 largest files in the current directory</code><button class="btn-copy" data-cmd="find the 5 largest files in the current directory"></button></div>
<div class="command-block"><code>write a Python script to merge all .txt files into one</code><button class="btn-copy" data-cmd="write a Python script to merge all .txt files into one"></button></div>
<div class="command-block"><code>explain the difference between git rebase and git merge</code><button class="btn-copy" data-cmd="explain the difference between git rebase and git merge"></button></div>

<h3>Built-in commands (start with /)</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <tr style="background:var(--c-bg);"><th style="padding:8px 12px;text-align:left;border:1px solid var(--c-border);">Command</th><th style="padding:8px 12px;text-align:left;border:1px solid var(--c-border);">What it does</th></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/help</td><td style="padding:8px 12px;border:1px solid var(--c-border);">List all available commands — your go-to when you forget something</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/clear</td><td style="padding:8px 12px;border:1px solid var(--c-border);">Clear conversation history and start a fresh chat</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/model</td><td style="padding:8px 12px;border:1px solid var(--c-border);">Switch AI models (e.g. GPT, Claude) — different models have different strengths</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/compact</td><td style="padding:8px 12px;border:1px solid var(--c-border);">Compress conversation history to save context space, useful for long chats</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/usage</td><td style="padding:8px 12px;border:1px solid var(--c-border);">View session stats (request count, token usage, etc.)</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/context</td><td style="padding:8px 12px;border:1px solid var(--c-border);">See what files and information Copilot can currently "see"</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/sessions</td><td style="padding:8px 12px;border:1px solid var(--c-border);">View session info (start time, modified files, etc.)</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/login</td><td style="padding:8px 12px;border:1px solid var(--c-border);">Log into your GitHub account</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/logout</td><td style="padding:8px 12px;border:1px solid var(--c-border);">Log out of current account (use when switching accounts)</td></tr>
  <tr><td style="padding:8px 12px;border:1px solid var(--c-border);font-family:monospace;">/exit</td><td style="padding:8px 12px;border:1px solid var(--c-border);">Exit Copilot CLI and return to your regular terminal</td></tr>
</table>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text">Don't worry about memorizing these! Just type <code>/help</code> anytime to see the full list.</span></div>

<h3>Tips for better results</h3>
<ul>
  <li>💬 <strong>Be specific</strong>: "Create a Node.js HTTP server listening on port 3000" works better than "make a server"</li>
  <li>📁 <strong>Launch from your project directory</strong>: Copilot can read your project files and understand context</li>
  <li>🔄 <strong>Follow up</strong>: If the result isn't quite right, keep chatting to refine it</li>
  <li>🌍 <strong>Any language works</strong>: Use whatever language you're most comfortable with</li>
</ul>`,
      },
    },
  },

  // ── Step 10: Fun Project (Optional) ──
  {
    id: 'fun-project',
    title:    { zh: '🎮 动手做个小游戏', en: '🎮 Build a Fun Mini Game' },
    optional: true,
    description: {
      zh: '<p>学以致用！让我们用 Copilot CLI 在几分钟内创建一个好玩的浏览器小游戏，体验 AI 编程的魔力。</p>',
      en: '<p>Let\'s put it to work! Use Copilot CLI to create a fun browser game in just a few minutes and experience the magic of AI-powered coding.</p>',
    },
    content: {
      all: {
        zh: `<h3>🎯 目标：创建一个反应速度测试游戏</h3>
<p>我们要做的是一个网页小游戏：屏幕会在随机时间变成绿色，你需要尽快点击——然后它会告诉你反应速度有多快！</p>

<h3>第一步：打开 PowerShell</h3>
<p>点击 Windows 开始菜单，搜索 <strong>PowerShell</strong>，打开 <strong>PowerShell 7</strong>（如果有的话）或 <strong>Windows PowerShell</strong>。</p>
<div class="info-box warning"><span class="info-box-icon">⚠️</span><span class="info-box-text"><strong>注意：请不要使用"命令提示符"（CMD）。</strong>接下来的命令在 CMD 中可能无法正常运行。请确保打开的是 PowerShell（图标是蓝色的，标题栏显示 "PowerShell"）。</span></div>
<p><strong>为什么用 PowerShell？</strong>PowerShell 是微软推出的现代命令行工具，支持更多功能和更友好的命令格式。Windows 自带的"命令提示符"（CMD）是上世纪的老工具，很多新命令不支持。</p>

<h3>第二步：创建一个专属文件夹</h3>
<p>我们先在桌面上创建一个干净的文件夹，把游戏文件放在里面。把下面两行命令<strong>逐行</strong>复制到 PowerShell 中执行：</p>
<div class="command-block"><code>mkdir ~/Desktop/my-game</code><button class="btn-copy" data-cmd="mkdir ~/Desktop/my-game"></button></div>
<p><strong>这做了什么？</strong> <code>mkdir</code> 是 "make directory" 的缩写，意思是"创建一个文件夹"。这行命令在你的桌面上创建了一个叫 <code>my-game</code> 的文件夹。</p>
<div class="command-block"><code>cd ~/Desktop/my-game</code><button class="btn-copy" data-cmd="cd ~/Desktop/my-game"></button></div>
<p><strong>这做了什么？</strong> <code>cd</code> 是 "change directory" 的缩写，意思是"进入某个文件夹"。现在终端的工作位置已经切换到了你刚创建的文件夹里。</p>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text"><strong>为什么要创建新文件夹？</strong>就像你不会把所有东西都堆在桌面上一样，每个项目都应该有自己的文件夹。这样文件不会混在一起，以后也容易找到。</span></div>

<h3>第三步：在这个文件夹中启动 Copilot CLI</h3>
<div class="command-block"><code>copilot</code><button class="btn-copy" data-cmd="copilot"></button></div>
<p><strong>为什么要在项目文件夹里启动？</strong>因为 Copilot 创建的文件会保存在你当前所在的文件夹。从我们刚才创建的 <code>my-game</code> 文件夹启动，所有生成的文件就会整齐地放在那里。</p>

<h3>第四步：告诉 Copilot 你想要什么</h3>
<p>在 Copilot 对话中输入下面这段话（可以直接复制）：</p>
<div class="command-block"><code>创建一个 HTML 文件叫 game.html，做一个反应速度测试游戏：页面初始是蓝色背景显示"等待..."，随机 2-5 秒后变成绿色显示"点击！"，用户点击后显示反应时间（毫秒），并可以重新开始。要好看，要有动画效果，要支持手机。所有代码写在一个 HTML 文件里。</code><button class="btn-copy" data-cmd='创建一个 HTML 文件叫 game.html，做一个反应速度测试游戏：页面初始是蓝色背景显示"等待..."，随机 2-5 秒后变成绿色显示"点击！"，用户点击后显示反应时间（毫秒），并可以重新开始。要好看，要有动画效果，要支持手机。所有代码写在一个 HTML 文件里。'></button></div>
<p><strong>这做了什么？</strong>你正在用自然语言告诉 AI 你想要什么。Copilot 会理解你的意图，自动编写完整的游戏代码，并保存为 <code>game.html</code> 文件。整个过程只需要几秒钟！</p>

<h3>第五步：打开游戏</h3>
<p>先退出 Copilot CLI，然后用浏览器打开你的游戏：</p>
<div class="command-block"><code>/exit</code><button class="btn-copy" data-cmd="/exit"></button></div>
<p><strong>这做了什么？</strong>退出 Copilot 对话模式，回到普通终端，这样你才能运行系统命令。</p>
<div class="command-block"><code>start game.html</code><button class="btn-copy" data-cmd="start game.html"></button></div>
<p><strong>这做了什么？</strong> <code>start</code> 命令会用你的默认浏览器打开这个文件。（macOS 用 <code>open game.html</code>，Linux 用 <code>xdg-open game.html</code>）</p>

<div class="info-box success"><span class="info-box-icon">🎉</span><span class="info-box-text"><strong>恭喜！</strong>你刚刚用 AI 在几分钟内创建了一个完整的浏览器游戏！试试看你的反应速度能有多快？<br><br>你还可以在桌面上的 <code>my-game</code> 文件夹里找到 <code>game.html</code> 文件，随时双击打开再玩。</span></div>

<h3>🚀 想继续玩？试试这些改进</h3>
<p>重新运行 <code>copilot</code> 进入对话，继续在 Copilot 中要求修改，体验迭代开发：</p>
<ul>
  <li><strong>"加一个计分板，记录最近 5 次成绩"</strong></li>
  <li><strong>"加一个难度选择：简单、普通、困难"</strong></li>
  <li><strong>"加音效"</strong></li>
  <li><strong>"改成打地鼠游戏"</strong> —— 看看 Copilot 能不能从头重做一个！</li>
</ul>
<p><strong>为什么要这样做？</strong>真正的软件开发就是这样一个不断迭代改进的过程。用 Copilot，你只需要用文字描述想要的变化，AI 帮你完成代码修改。</p>`,
        en: `<h3>🎯 Goal: Create a Reaction Speed Test Game</h3>
<p>We're going to build a web game: the screen will turn green at a random time, and you need to click as fast as you can — it'll tell you how quick your reaction was!</p>

<h3>Step 1: Open PowerShell</h3>
<p>Click the Windows Start menu, search for <strong>PowerShell</strong>, and open <strong>PowerShell 7</strong> (if available) or <strong>Windows PowerShell</strong>.</p>
<div class="info-box warning"><span class="info-box-icon">⚠️</span><span class="info-box-text"><strong>Important: Do not use "Command Prompt" (CMD).</strong> The commands below may not work in CMD. Make sure the window you open says "PowerShell" in the title bar (with a blue icon).</span></div>
<p><strong>Why PowerShell?</strong> PowerShell is Microsoft's modern command-line tool that supports more features and a friendlier command format. The old "Command Prompt" (CMD) that comes with Windows is a legacy tool from the last century and doesn't support many modern commands.</p>

<h3>Step 2: Create a project folder</h3>
<p>Let's create a clean folder on your desktop to keep the game files organized. Copy these two commands into PowerShell <strong>one at a time</strong>:</p>
<div class="command-block"><code>mkdir ~/Desktop/my-game</code><button class="btn-copy" data-cmd="mkdir ~/Desktop/my-game"></button></div>
<p><strong>What does this do?</strong> <code>mkdir</code> stands for "make directory" — it creates a new folder. This creates a folder called <code>my-game</code> on your desktop.</p>
<div class="command-block"><code>cd ~/Desktop/my-game</code><button class="btn-copy" data-cmd="cd ~/Desktop/my-game"></button></div>
<p><strong>What does this do?</strong> <code>cd</code> stands for "change directory" — it moves you into a folder. Now your terminal is working inside the folder you just created.</p>
<div class="info-box info"><span class="info-box-icon">💡</span><span class="info-box-text"><strong>Why create a new folder?</strong> Just like you wouldn't pile everything on your desk, each project should have its own folder. This keeps files organized and easy to find later.</span></div>

<h3>Step 3: Launch Copilot CLI from this folder</h3>
<div class="command-block"><code>copilot</code><button class="btn-copy" data-cmd="copilot"></button></div>
<p><strong>Why launch from the project folder?</strong> Because Copilot saves generated files in your current folder. By starting from <code>my-game</code>, all generated files will be neatly stored there.</p>

<h3>Step 4: Tell Copilot what you want</h3>
<p>Type this in the Copilot conversation (feel free to copy it):</p>
<div class="command-block"><code>Create an HTML file called game.html with a reaction speed test game: the page starts with a blue background showing "Wait...", then after a random 2-5 seconds turns green showing "Click!", the user clicks and sees their reaction time in milliseconds, with an option to try again. Make it look great with animations and mobile-friendly. All code in a single HTML file.</code><button class="btn-copy" data-cmd='Create an HTML file called game.html with a reaction speed test game: the page starts with a blue background showing "Wait...", then after a random 2-5 seconds turns green showing "Click!", the user clicks and sees their reaction time in milliseconds, with an option to try again. Make it look great with animations and mobile-friendly. All code in a single HTML file.'></button></div>
<p><strong>What does this do?</strong> You're telling the AI what you want in plain language. Copilot will understand your intent, write the complete game code, and save it as <code>game.html</code>. The whole thing takes just seconds!</p>

<h3>Step 5: Open the game</h3>
<p>First exit Copilot CLI, then open your game in the browser:</p>
<div class="command-block"><code>/exit</code><button class="btn-copy" data-cmd="/exit"></button></div>
<p><strong>What does this do?</strong> Exits the Copilot conversation and returns to the regular terminal, so you can run system commands.</p>
<div class="command-block"><code>start game.html</code><button class="btn-copy" data-cmd="start game.html"></button></div>
<p><strong>What does this do?</strong> The <code>start</code> command opens this file in your default browser. (On macOS use <code>open game.html</code>, on Linux use <code>xdg-open game.html</code>)</p>

<div class="info-box success"><span class="info-box-icon">🎉</span><span class="info-box-text"><strong>Congratulations!</strong> You just created a complete browser game with AI in minutes! How fast is your reaction time?<br><br>You can also find the <code>game.html</code> file in the <code>my-game</code> folder on your desktop — double-click it anytime to play again.</span></div>

<h3>🚀 Want to keep going? Try these improvements</h3>
<p>Run <code>copilot</code> again to start a new conversation, then ask for changes — experience iterative development:</p>
<ul>
  <li><strong>"Add a scoreboard showing the last 5 results"</strong></li>
  <li><strong>"Add difficulty levels: easy, normal, hard"</strong></li>
  <li><strong>"Add sound effects"</strong></li>
  <li><strong>"Turn it into a whack-a-mole game"</strong> — see if Copilot can rebuild it from scratch!</li>
</ul>
<p><strong>Why do this?</strong> Real software development is an iterative process of continuous improvement. With Copilot, you just describe the changes you want in words, and AI handles the code.</p>`,
      },
    },
  },
];

// ── Congratulations content ──
const CONGRATS_CONTENT = {
  zh: `<h3>你已经学会了</h3>
<ul>
  <li>✅ 打开终端</li>
  <li>✅ 安装 Copilot CLI</li>
  <li>✅ 登录 GitHub 账号</li>
  <li>✅ 运行你的第一个 AI 指令</li>
</ul>

<h3>常用命令速查</h3>
<div class="command-block"><code>copilot</code><button class="btn-copy" data-cmd="copilot"></button></div>
<p>启动 Copilot CLI 交互界面。</p>

<div class="command-block"><code>copilot "帮我创建一个 Python HTTP 服务器"</code><button class="btn-copy" data-cmd='copilot "帮我创建一个 Python HTTP 服务器"'></button></div>
<p>直接提问，无需进入交互模式。</p>

<h3>实用技巧</h3>
<ul>
  <li>💬 你可以用<strong>中文或英文</strong>和 Copilot 对话</li>
  <li>📁 在项目目录下启动 Copilot，它能理解你的项目上下文</li>
  <li>🔄 用 <code>/clear</code> 清空对话历史</li>
  <li>❓ 用 <code>/help</code> 查看所有可用命令</li>
</ul>

<h3>进阶学习资源</h3>
<ul>
  <li><a href="https://docs.github.com/copilot" target="_blank" rel="noopener">📚 GitHub Copilot 官方文档</a></li>
  <li><a href="https://github.blog/ai-and-ml/github-copilot-cli-101-how-to-use-github-copilot-from-the-command-line/" target="_blank" rel="noopener">📖 Copilot CLI 101 博客文章</a></li>
</ul>`,

  en: `<h3>What you've accomplished</h3>
<ul>
  <li>✅ Opened the terminal</li>
  <li>✅ Installed Copilot CLI</li>
  <li>✅ Logged into your GitHub account</li>
  <li>✅ Ran your first AI command</li>
</ul>

<h3>Quick command reference</h3>
<div class="command-block"><code>copilot</code><button class="btn-copy" data-cmd="copilot"></button></div>
<p>Launch the Copilot CLI interactive interface.</p>

<div class="command-block"><code>copilot "create a Python HTTP server"</code><button class="btn-copy" data-cmd='copilot "create a Python HTTP server"'></button></div>
<p>Ask a question directly without entering interactive mode.</p>

<h3>Useful tips</h3>
<ul>
  <li>💬 You can talk to Copilot in <strong>any language</strong></li>
  <li>📁 Launch Copilot inside a project directory — it understands your project context</li>
  <li>🔄 Use <code>/clear</code> to clear conversation history</li>
  <li>❓ Use <code>/help</code> to see all available commands</li>
</ul>

<h3>Learning resources</h3>
<ul>
  <li><a href="https://docs.github.com/copilot" target="_blank" rel="noopener">📚 GitHub Copilot official documentation</a></li>
  <li><a href="https://github.blog/ai-and-ml/github-copilot-cli-101-how-to-use-github-copilot-from-the-command-line/" target="_blank" rel="noopener">📖 Copilot CLI 101 blog post</a></li>
</ul>`,
};
