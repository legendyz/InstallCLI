// faq.js — Q&A knowledge base keyed by step id (bilingual)

const FAQS = {
  terminal: [
    {
      q: { zh: '什么是"终端"？为什么要用它？', en: 'What is a "terminal"? Why do I need it?', ja: '「ターミナル」とは何ですか？なぜ必要ですか？' },
      a: {
        zh: '终端（Terminal）是一种用文字和电脑交互的界面。虽然没有图形界面那么直观，但它能做很多鼠标点击做不到的事情——比如批量操作文件、安装软件、远程控制服务器等。Copilot CLI 就是一个运行在终端里的工具。<br><br><strong>你可以把它想象成：</strong>给电脑发短信，而不是点按钮。',
        en: 'A terminal is a text-based interface for interacting with your computer. While less visual than clicking icons, it\'s far more powerful — you can batch-process files, install software, control remote servers, and more. Copilot CLI is a tool that runs in the terminal.<br><br><strong>Think of it as:</strong> texting your computer instead of tapping buttons.',
        ja: 'ターミナルとは、テキストベースでコンピューターと対話するインターフェースです。アイコンをクリックするほど視覚的ではありませんが、はるかに強力です。ファイルの一括処理、ソフトウェアのインストール、リモートサーバーの制御などが可能です。Copilot CLI はターミナルで動作するツールです。<br><br><strong>こう考えてみてください：</strong>ボタンを押すのではなく、コンピューターにメッセージを送るようなものです。',
      },
    },
    {
      q: { zh: '为什么不能用 CMD（命令提示符）？', en: 'Why can\'t I use CMD (Command Prompt)?', ja: 'なぜ CMD（コマンドプロンプト）は使えないのですか？' },
      a: {
        zh: 'Copilot CLI 的 shell 集成功能依赖 PowerShell 6+ 的特性，CMD 不支持这些功能。<br><br><strong>CMD</strong>（命令提示符）是 Windows 早期的命令行工具，功能有限。<strong>PowerShell</strong> 是微软推出的现代命令行，功能更强大。GitHub 官方要求在 Windows 上使用 PowerShell 6 以上版本。',
        en: 'Copilot CLI\'s shell integration features rely on PowerShell 6+ capabilities that CMD doesn\'t support.<br><br><strong>CMD</strong> (Command Prompt) is Windows\' legacy command-line tool with limited features. <strong>PowerShell</strong> is Microsoft\'s modern command-line. GitHub officially requires PowerShell 6 or higher on Windows.',
        ja: 'Copilot CLI のシェル統合機能は PowerShell 6+ の機能に依存しており、CMD はこれらをサポートしていません。<br><br><strong>CMD</strong>（コマンドプロンプト）は Windows の従来のコマンドラインツールで、機能が限られています。<strong>PowerShell</strong> は Microsoft の最新のコマンドラインです。GitHub は Windows では PowerShell 6 以上の使用を公式に求めています。',
      },
    },
    {
      q: { zh: '终端里的文字看起来好吓人，会不会搞坏电脑？', en: 'The terminal looks scary. Can I break my computer?', ja: 'ターミナルの文字が怖いです。パソコンを壊してしまいませんか？' },
      a: {
        zh: '放心！本向导中的所有命令都是安全的——它们只会安装软件和检查版本号，不会删除文件或修改系统设置。<br><br>一般来说，只要你不运行自己不理解的命令（特别是带 <code>rm</code>、<code>del</code>、<code>format</code> 这类关键词的），就不会有问题。',
        en: 'Don\'t worry! All commands in this guide are safe — they only install software and check version numbers. They won\'t delete files or modify system settings.<br><br>As a rule of thumb, you\'re safe as long as you don\'t run commands you don\'t understand (especially ones with keywords like <code>rm</code>, <code>del</code>, or <code>format</code>).',
        ja: 'ご安心ください！このガイドのすべてのコマンドは安全です。ソフトウェアのインストールとバージョン番号の確認のみを行い、ファイルの削除やシステム設定の変更は行いません。<br><br>基本的に、理解していないコマンド（特に <code>rm</code>、<code>del</code>、<code>format</code> のようなキーワードを含むもの）を実行しなければ問題ありません。',
      },
    },
  ],

  powershell: [
    {
      q: { zh: 'PowerShell 7 和 Windows 自带的 PowerShell 有什么区别？', en: 'What\'s the difference between PowerShell 7 and the built-in PowerShell?', ja: 'PowerShell 7 と Windows 標準の PowerShell の違いは何ですか？' },
      a: {
        zh: 'Windows 自带的是 <strong>PowerShell 5.1</strong>（也叫"Windows PowerShell"），图标是蓝色的。<strong>PowerShell 7</strong> 是微软推出的新版本，功能更强，图标是黑色的。<br><br>两者可以同时安装在电脑上，互不干扰。Copilot CLI 需要 PowerShell 7 存在于你的电脑上，但你<strong>不一定要从 PowerShell 7 窗口启动</strong>——只要装了，Copilot CLI 会自动找到它。',
        en: 'Windows comes with <strong>PowerShell 5.1</strong> (called "Windows PowerShell"), which has a blue icon. <strong>PowerShell 7</strong> is Microsoft\'s newer version — more capable, with a black icon.<br><br>Both can coexist on your machine. Copilot CLI needs PowerShell 7 to be installed, but you <strong>don\'t have to launch from a PowerShell 7 window</strong> — as long as it\'s installed, Copilot CLI will find it automatically.',
        ja: 'Windows には <strong>PowerShell 5.1</strong>（「Windows PowerShell」とも呼ばれ、青いアイコン）が標準搭載されています。<strong>PowerShell 7</strong> は Microsoft の新バージョンで、より高機能で黒いアイコンです。<br><br>両方を同じマシンに共存させることができます。Copilot CLI には PowerShell 7 のインストールが必要ですが、<strong>PowerShell 7 のウィンドウから起動する必要はありません</strong>。インストールされていれば、Copilot CLI が自動的に見つけます。',
      },
    },
    {
      q: { zh: '安装 PowerShell 7 会影响我电脑上的其他软件吗？', en: 'Will installing PowerShell 7 affect other software on my computer?', ja: 'PowerShell 7 をインストールすると、他のソフトウェアに影響しますか？' },
      a: {
        zh: '不会。PowerShell 7 是一个完全独立的程序，和 Windows 自带的 PowerShell 5.1 互不影响。你原来的所有软件和设置都不会改变。',
        en: 'No. PowerShell 7 is a completely independent program. It doesn\'t interfere with the built-in PowerShell 5.1. All your existing software and settings remain unchanged.',
        ja: 'いいえ。PowerShell 7 は完全に独立したプログラムです。標準搭載の PowerShell 5.1 には影響しません。既存のソフトウェアや設定はすべてそのまま変わりません。',
      },
    },
    {
      q: { zh: '在开始菜单里找不到 PowerShell 7 怎么办？', en: 'I can\'t find PowerShell 7 in the Start menu?', ja: 'スタートメニューで PowerShell 7 が見つかりません。' },
      a: {
        zh: '安装完成后，试试以下方法：<ul><li>在开始菜单搜索框中输入 <strong>"PowerShell"</strong>，看看列表里有没有标注 "7" 的选项</li><li>如果只看到一个蓝色图标的"Windows PowerShell"，说明安装可能没有成功，请重新运行 <code>winget install Microsoft.PowerShell</code></li><li>安装成功后可能需要<strong>重启电脑</strong>才能在开始菜单中看到它</li></ul>',
        en: 'After installation, try these steps:<ul><li>Type <strong>"PowerShell"</strong> in the Start menu search box and look for an option marked with "7"</li><li>If you only see a blue-icon "Windows PowerShell", the installation may not have succeeded — try running <code>winget install Microsoft.PowerShell</code> again</li><li>You may need to <strong>restart your computer</strong> for it to appear in the Start menu</li></ul>',
        ja: 'インストール後、以下の手順をお試しください：<ul><li>スタートメニューの検索ボックスに <strong>「PowerShell」</strong> と入力し、「7」と表示されているオプションを探してください</li><li>青いアイコンの「Windows PowerShell」しか表示されない場合は、インストールが成功していない可能性があります。<code>winget install Microsoft.PowerShell</code> を再度実行してみてください</li><li>スタートメニューに表示されるまで<strong>パソコンの再起動</strong>が必要な場合があります</li></ul>',
      },
    },
  ],

  install: [
    {
      q: { zh: '什么是 winget / Homebrew / npm？', en: 'What is winget / Homebrew / npm?', ja: 'winget / Homebrew / npm とは何ですか？' },
      a: {
        zh: '这些都是<strong>"包管理器"</strong>——就像手机上的"应用商店"，但用来在终端里安装和管理软件。<ul><li><strong>winget</strong>：Windows 自带的包管理器（Windows 10 1709+ 可用）</li><li><strong>Homebrew</strong>：macOS/Linux 上最流行的包管理器</li><li><strong>npm</strong>：Node.js 的包管理器，跨平台通用</li></ul>',
        en: 'These are <strong>package managers</strong> — like an "app store" but for installing software from the terminal.<ul><li><strong>winget</strong>: Windows\' built-in package manager (available on Windows 10 1709+)</li><li><strong>Homebrew</strong>: The most popular package manager for macOS/Linux</li><li><strong>npm</strong>: Node.js package manager, works cross-platform</li></ul>',
        ja: 'これらはすべて<strong>パッケージマネージャー</strong>です。ターミナルからソフトウェアをインストールするための「アプリストア」のようなものです。<ul><li><strong>winget</strong>：Windows 標準のパッケージマネージャー（Windows 10 1709+ で利用可能）</li><li><strong>Homebrew</strong>：macOS/Linux で最も人気のあるパッケージマネージャー</li><li><strong>npm</strong>：Node.js のパッケージマネージャー、クロスプラットフォーム対応</li></ul>',
      },
    },
    {
      q: { zh: '提示 "winget 不是内部或外部命令" 怎么办？', en: 'I get "winget is not recognized" — what do I do?', ja: '「winget は認識されていません」と表示されます。どうすればよいですか？' },
      a: {
        zh: '这意味着你的 Windows 版本可能较旧，或者"应用安装程序"需要更新。<br><br><strong>解决方法：</strong><ol><li>打开 <strong>Microsoft Store</strong>（在开始菜单搜索"Store"）</li><li>搜索 <strong>"应用安装程序"（App Installer）</strong></li><li>点击<strong>更新</strong></li><li>更新完成后，关闭并重新打开终端，再试一次</li></ol><br>如果仍然不行，可以使用 npm 方式安装（需要先安装 Node.js）。',
        en: 'This means your Windows version may be older, or the "App Installer" needs updating.<br><br><strong>How to fix:</strong><ol><li>Open the <strong>Microsoft Store</strong> (search "Store" in Start menu)</li><li>Search for <strong>"App Installer"</strong></li><li>Click <strong>Update</strong></li><li>After updating, close and reopen the terminal, then try again</li></ol><br>If it still doesn\'t work, use the npm installation method (requires Node.js first).',
        ja: 'これは Windows のバージョンが古いか、「アプリ インストーラー」の更新が必要な場合に表示されます。<br><br><strong>解決方法：</strong><ol><li><strong>Microsoft Store</strong> を開きます（スタートメニューで「Store」と検索）</li><li><strong>「App Installer」</strong>を検索します</li><li><strong>更新</strong>をクリックします</li><li>更新後、ターミナルを閉じて再度開き、もう一度お試しください</li></ol><br>それでもうまくいかない場合は、npm を使ったインストール方法をお試しください（先に Node.js のインストールが必要です）。',
      },
    },
    {
      q: { zh: '安装速度很慢或者失败了怎么办？', en: 'Installation is slow or failed — what do I do?', ja: 'インストールが遅い、または失敗しました。どうすればよいですか？' },
      a: {
        zh: '可能的原因：<ul><li><strong>网络问题</strong>：确保你能正常访问 github.com。如果在公司网络，可能需要配置代理</li><li><strong>权限不足</strong>：尝试以管理员身份运行终端（右键 PowerShell → "以管理员身份运行"）</li><li><strong>杀毒软件拦截</strong>：有些杀毒软件可能会拦截安装过程，可以暂时关闭后重试</li></ul>',
        en: 'Possible causes:<ul><li><strong>Network issues</strong>: Make sure you can access github.com. If on a corporate network, you may need to configure a proxy</li><li><strong>Insufficient permissions</strong>: Try running the terminal as administrator (right-click PowerShell → "Run as Administrator")</li><li><strong>Antivirus blocking</strong>: Some antivirus software may block the installation. Try temporarily disabling it</li></ul>',
        ja: '考えられる原因：<ul><li><strong>ネットワークの問題</strong>：github.com にアクセスできることを確認してください。企業ネットワークの場合、プロキシの設定が必要な場合があります</li><li><strong>権限不足</strong>：管理者としてターミナルを実行してみてください（PowerShell を右クリック→「管理者として実行」）</li><li><strong>ウイルス対策ソフトによるブロック</strong>：ウイルス対策ソフトがインストールをブロックしている場合があります。一時的に無効にしてお試しください</li></ul>',
      },
    },
    {
      q: { zh: '怎么把 Copilot CLI 更新到最新版？', en: 'How do I update Copilot CLI to the latest version?', ja: 'Copilot CLI を最新版に更新するには？' },
      a: {
        zh: '更新方法和你当初的安装方式一致，重新运行一次安装/升级命令即可：<ul><li><strong>winget</strong>：<code>winget upgrade GitHub.Copilot</code></li><li><strong>Homebrew（macOS/Linux）</strong>：<code>brew upgrade copilot-cli</code></li><li><strong>npm</strong>：<code>npm install -g @github/copilot</code></li><li><strong>安装脚本（macOS/Linux）</strong>：重新运行 <code>curl -fsSL https://gh.io/copilot-install | bash</code></li></ul>更新后用 <code>copilot --version</code> 确认版本号变了。想抢先体验新功能，可以安装预览版（命令里加 <code>@prerelease</code>，或 winget 用 <code>GitHub.Copilot.Prerelease</code>）。',
        en: 'Update the same way you installed — just run the install/upgrade command again:<ul><li><strong>winget</strong>: <code>winget upgrade GitHub.Copilot</code></li><li><strong>Homebrew (macOS/Linux)</strong>: <code>brew upgrade copilot-cli</code></li><li><strong>npm</strong>: <code>npm install -g @github/copilot</code></li><li><strong>Install script (macOS/Linux)</strong>: re-run <code>curl -fsSL https://gh.io/copilot-install | bash</code></li></ul>Then run <code>copilot --version</code> to confirm the version changed. To try features early, install the prerelease (add <code>@prerelease</code>, or use <code>GitHub.Copilot.Prerelease</code> with winget).',
        ja: 'インストールした方法と同じ方法で更新できます。インストール／アップグレードコマンドをもう一度実行するだけです：<ul><li><strong>winget</strong>：<code>winget upgrade GitHub.Copilot</code></li><li><strong>Homebrew（macOS/Linux）</strong>：<code>brew upgrade copilot-cli</code></li><li><strong>npm</strong>：<code>npm install -g @github/copilot</code></li><li><strong>インストールスクリプト（macOS/Linux）</strong>：<code>curl -fsSL https://gh.io/copilot-install | bash</code> を再実行</li></ul>更新後、<code>copilot --version</code> でバージョンが変わったか確認してください。新機能をいち早く試すには、プレビュー版をインストールできます（コマンドに <code>@prerelease</code> を付けるか、winget で <code>GitHub.Copilot.Prerelease</code> を使用）。',
      },
    },
    {
      q: { zh: 'npm 安装时报错或卡住怎么办？', en: 'npm install throws an error or hangs — what do I do?', ja: 'npm インストールでエラーが出る／止まる場合は？' },
      a: {
        zh: '先确认 <strong>Node.js 是 22 或更高版本</strong>（运行 <code>node --version</code>），版本太低是最常见的原因。<br><br>如果你在 <code>~/.npmrc</code> 里设置了 <code>ignore-scripts=true</code>，安装会缺少必要的步骤而失败。这种情况下改用这条命令：<br><code>npm_config_ignore_scripts=false npm install -g @github/copilot</code><br><br>如果还是失败，可以改用本平台推荐的包管理器（Windows 用 winget，macOS/Linux 用 Homebrew 或安装脚本）。',
        en: 'First make sure <strong>Node.js is version 22 or later</strong> (run <code>node --version</code>) — an outdated version is the most common cause.<br><br>If you have <code>ignore-scripts=true</code> in your <code>~/.npmrc</code>, the install will skip required steps and fail. In that case use:<br><code>npm_config_ignore_scripts=false npm install -g @github/copilot</code><br><br>If it still fails, switch to your platform\'s recommended package manager (winget on Windows; Homebrew or the install script on macOS/Linux).',
        ja: 'まず <strong>Node.js が 22 以上</strong>であることを確認してください（<code>node --version</code> を実行）。バージョンが古いことが最も多い原因です。<br><br><code>~/.npmrc</code> に <code>ignore-scripts=true</code> を設定している場合、必要な手順がスキップされて失敗します。その場合は次のコマンドを使ってください：<br><code>npm_config_ignore_scripts=false npm install -g @github/copilot</code><br><br>それでも失敗する場合は、各プラットフォーム推奨のパッケージマネージャー（Windows は winget、macOS/Linux は Homebrew またはインストールスクリプト）に切り替えてください。',
      },
    },
  ],

  account: [
    {
      q: { zh: '怎么判断我是不是 EMU 账号？', en: 'How do I know if I have an EMU account?', ja: '自分のアカウントが EMU アカウントかどうか、どうやって判断できますか？' },
      a: {
        zh: '以下几个特征可以帮你判断：<ul><li><strong>用户名格式</strong>：EMU 用户名通常带有公司后缀，例如 <code>zhangsan_contoso</code></li><li><strong>登录方式</strong>：EMU 账号登录时会跳转到公司的 SSO 页面</li><li><strong>无法创建公开仓库</strong>：EMU 账号通常只能在企业组织内创建仓库</li><li><strong>账号由 IT 提供</strong>：如果账号不是你自己在 github.com/signup 注册的，大概率是 EMU</li></ul><br>不确定的话，可以问你的 IT 同事或管理员。',
        en: 'Here are some indicators:<ul><li><strong>Username format</strong>: EMU usernames typically have a company suffix, e.g. <code>jsmith_contoso</code></li><li><strong>Login method</strong>: EMU accounts redirect to your company\'s SSO page when logging in</li><li><strong>Can\'t create public repos</strong>: EMU accounts usually can only create repos within the enterprise org</li><li><strong>Account provided by IT</strong>: If you didn\'t sign up at github.com/signup yourself, it\'s likely EMU</li></ul><br>If unsure, ask your IT team.',
        ja: '以下の特徴で判断できます：<ul><li><strong>ユーザー名の形式</strong>：EMU ユーザー名には通常、会社のサフィックスが付いています（例：<code>tanaka_contoso</code>）</li><li><strong>ログイン方法</strong>：EMU アカウントはログイン時に会社の SSO ページにリダイレクトされます</li><li><strong>パブリックリポジトリを作成できない</strong>：EMU アカウントは通常、企業組織内でのみリポジトリを作成できます</li><li><strong>IT 部門から提供されたアカウント</strong>：github.com/signup で自分で登録したアカウントでなければ、おそらく EMU です</li></ul><br>わからない場合は、IT チームに確認してください。',
      },
    },
    {
      q: { zh: '个人账号和 EMU 账号可以同时用吗？', en: 'Can I use both a personal and an EMU account?', ja: '個人アカウントと企業 EMU アカウントを同時に使えますか？' },
      a: {
        zh: '可以！它们是完全独立的两个账号，建议两个都有。<br><br><strong>为什么建议同时创建个人账号？</strong><br>EMU 账号仅限公司内使用，个人账号可以让你参与开源项目、管理自己的代码。你可以在 GitHub 设置中将两个账号关联起来。<br><br>在 Copilot CLI 中一次只能登录一个账号。如果需要切换，先运行 <code>/logout</code> 退出当前账号，再用 <code>/login</code> 登录另一个。',
        en: 'Yes! They are completely independent accounts, and it\'s recommended to have both.<br><br><strong>Why create a personal account too?</strong><br>EMU accounts are limited to company use. A personal account lets you contribute to open source and manage your own code. You can link the two accounts in GitHub settings.<br><br>In Copilot CLI, you can only be logged into one at a time. To switch, run <code>/logout</code> first, then <code>/login</code> to log into the other.',
        ja: 'はい！それぞれ完全に独立したアカウントで、両方持つことをお勧めします。<br><br><strong>なぜ個人アカウントも作るべきですか？</strong><br>企業 EMU アカウントは社内利用に限定されます。個人アカウントがあれば、オープンソースへの貢献や自分のコード管理ができます。GitHub の設定で 2 つのアカウントをリンクできます。<br><br>Copilot CLI では一度に 1 つのアカウントにしかログインできません。切り替えるには、まず <code>/logout</code> を実行してから、<code>/login</code> でもう一方にログインします。',
      },
    },
    {
      q: { zh: '公司没给我开 Copilot 怎么办？', en: 'My company hasn\'t enabled Copilot for me — what do I do?', ja: '会社が Copilot を有効にしてくれません。どうすればよいですか？' },
      a: {
        zh: '如果你使用 EMU 账号但没有 Copilot 权限，你可以：<ol><li>联系你的 IT 管理员，申请开通 Copilot</li><li>如果公司暂时不提供，你也可以用<strong>个人 GitHub 账号</strong>注册 Copilot Free（免费），用个人账号来使用 Copilot CLI</li></ol>',
        en: 'If you have an EMU account but no Copilot access, you can:<ol><li>Contact your IT admin to request Copilot access</li><li>If your company doesn\'t provide it yet, you can use a <strong>personal GitHub account</strong> with Copilot Free (free tier) to use Copilot CLI</li></ol>',
        ja: 'EMU アカウントで Copilot にアクセスできない場合：<ol><li>IT 管理者に連絡して、Copilot のアクセスを申請してください</li><li>会社がまだ提供していない場合は、<strong>個人の GitHub アカウント</strong>で Copilot Free（無料プラン）を使って Copilot CLI を利用できます</li></ol>',
      },
    },
  ],

  subscription: [
    {
      q: { zh: 'Copilot Free 够用吗？有什么限制？', en: 'Is Copilot Free enough? What are the limits?', ja: 'Copilot Free で十分ですか？制限はありますか？' },
      a: {
        zh: 'Copilot Free 提供基本的 AI 代码辅助功能，对于学习和轻度使用完全足够。具体额度：<ul><li><strong>Free</strong>：每月 2,000 次代码补全 + 50 次高级请求（用于聊天、Agent 模式等），对大多数入门用户够用</li><li><strong>Pro（$10/月）</strong>：无限代码补全 + 每月 300 次高级请求</li><li><strong>Pro+（$39/月）</strong>：无限代码补全 + 每月 1,500 次高级请求，优先使用最新顶级模型</li></ul><br>Copilot CLI 中的对话交互会消耗"高级请求"额度。建议先用 Free 版本体验，有需要再升级。',
        en: 'Copilot Free provides basic AI coding assistance and is perfectly fine for learning and light use. Specific limits:<ul><li><strong>Free</strong>: 2,000 code completions + 50 premium requests per month (used for chat, agent mode, etc.) — enough for most beginners</li><li><strong>Pro ($10/mo)</strong>: Unlimited completions + 300 premium requests/month</li><li><strong>Pro+ ($39/mo)</strong>: Unlimited completions + 1,500 premium requests/month, priority access to top-tier models</li></ul><br>Conversations in Copilot CLI consume "premium requests". Start with Free and upgrade later if needed.',
        ja: 'Copilot Free は基本的な AI コーディング支援を提供し、学習や軽い利用には十分です。具体的な制限：<ul><li><strong>Free</strong>：月 2,000 回のコード補完 + 50 回のプレミアムリクエスト（チャット、Agent モードなどに使用）— ほとんどの初心者に十分です</li><li><strong>Pro（$10/月）</strong>：無制限のコード補完 + 月 300 回のプレミアムリクエスト</li><li><strong>Pro+（$39/月）</strong>：無制限のコード補完 + 月 1,500 回のプレミアムリクエスト、最上位モデルへの優先アクセス</li></ul><br>Copilot CLI での会話は「プレミアムリクエスト」を消費します。まずは Free で始めて、必要に応じてアップグレードしてください。',
      },
    },
  ],

  auth: [
    {
      q: { zh: '登录时浏览器没有自动打开怎么办？', en: 'The browser didn\'t open automatically — what do I do?', ja: 'ログイン時にブラウザが自動的に開きません。どうすればよいですか？' },
      a: {
        zh: '手动打开浏览器，访问 <a href="https://github.com/login/device" target="_blank">github.com/login/device</a>，然后输入终端中显示的激活码即可。<br><br>激活码通常是 4 组字母数字，格式类似 <code>ABCD-1234</code>。',
        en: 'Open your browser manually, go to <a href="https://github.com/login/device" target="_blank">github.com/login/device</a>, and enter the activation code shown in your terminal.<br><br>The code is usually in a format like <code>ABCD-1234</code>.',
        ja: 'ブラウザを手動で開き、<a href="https://github.com/login/device" target="_blank">github.com/login/device</a> にアクセスして、ターミナルに表示されたアクティベーションコードを入力してください。<br><br>コードは通常 <code>ABCD-1234</code> のような形式です。',
      },
    },
    {
      q: { zh: '登录失败或显示"权限不足"怎么办？', en: 'Login failed or shows "insufficient permissions"?', ja: 'ログインに失敗した、または「権限不足」と表示されます。' },
      a: {
        zh: '可能的原因：<ul><li><strong>没有 Copilot 订阅</strong>：确保你已经在步骤 4 开通了 Copilot</li><li><strong>EMU 账号未授权</strong>：联系 IT 管理员开通 Copilot 权限</li><li><strong>网络问题</strong>：确认能正常访问 github.com</li><li><strong>激活码过期</strong>：激活码有时效，如果过期了，重新运行 <code>/login</code></li></ul>',
        en: 'Possible causes:<ul><li><strong>No Copilot subscription</strong>: Make sure you enabled Copilot in step 4</li><li><strong>EMU account not authorized</strong>: Contact your IT admin to enable Copilot</li><li><strong>Network issues</strong>: Verify you can access github.com</li><li><strong>Code expired</strong>: Activation codes expire. Run <code>/login</code> again for a fresh code</li></ul>',
        ja: '考えられる原因：<ul><li><strong>Copilot サブスクリプションがない</strong>：ステップ 4 で Copilot を有効にしたか確認してください</li><li><strong>EMU アカウントが未承認</strong>：IT 管理者に連絡して Copilot を有効にしてもらってください</li><li><strong>ネットワークの問題</strong>：github.com にアクセスできるか確認してください</li><li><strong>コードの期限切れ</strong>：アクティベーションコードには有効期限があります。<code>/login</code> を再度実行して新しいコードを取得してください</li></ul>',
      },
    },
    {
      q: { zh: '可以不用浏览器、用令牌（token）登录吗？', en: 'Can I authenticate with a token instead of the browser?', ja: 'ブラウザを使わずトークンで認証できますか？' },
      a: {
        zh: '可以，这主要用于自动化、CI 或无法打开浏览器的环境。在 <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">细粒度个人访问令牌</a>页面创建一个令牌，<strong>Resource owner 选你的个人账号</strong>，并在 Account 权限里勾选 <strong>Copilot Requests</strong>。然后把令牌设置到环境变量里即可（按优先级 <code>COPILOT_GITHUB_TOKEN</code> &gt; <code>GH_TOKEN</code> &gt; <code>GITHUB_TOKEN</code>）：<br><code>export COPILOT_GITHUB_TOKEN=你的令牌</code>（Windows PowerShell 用 <code>$env:COPILOT_GITHUB_TOKEN="你的令牌"</code>）。<br><br>对于日常使用，直接用 <code>/login</code> 走浏览器登录更简单。',
        en: 'Yes — this is mainly for automation, CI, or environments where you can\'t open a browser. Create a token on the <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">fine-grained personal access tokens</a> page, set <strong>Resource owner</strong> to your personal account, and enable the <strong>Copilot Requests</strong> permission under Account. Then set it as an environment variable (precedence: <code>COPILOT_GITHUB_TOKEN</code> &gt; <code>GH_TOKEN</code> &gt; <code>GITHUB_TOKEN</code>):<br><code>export COPILOT_GITHUB_TOKEN=your_token</code> (on Windows PowerShell: <code>$env:COPILOT_GITHUB_TOKEN="your_token"</code>).<br><br>For everyday use, the browser-based <code>/login</code> is simpler.',
        ja: 'はい——主に自動化や CI、ブラウザを開けない環境向けです。<a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">fine-grained personal access tokens</a> ページでトークンを作成し、<strong>Resource owner</strong> を個人アカウントに設定して、Account 権限の <strong>Copilot Requests</strong> を有効にします。次に環境変数として設定します（優先順位：<code>COPILOT_GITHUB_TOKEN</code> &gt; <code>GH_TOKEN</code> &gt; <code>GITHUB_TOKEN</code>）：<br><code>export COPILOT_GITHUB_TOKEN=あなたのトークン</code>（Windows PowerShell では <code>$env:COPILOT_GITHUB_TOKEN="あなたのトークン"</code>）。<br><br>日常的な利用では、ブラウザでの <code>/login</code> の方が簡単です。',
      },
    },
  ],

  verify: [
    {
      q: { zh: '提示"找不到命令"怎么办？', en: 'I get "command not found" — what do I do?', ja: '「コマンドが見つかりません」と表示されます。どうすればよいですか？' },
      a: {
        zh: '这通常是因为安装路径没有加入系统的 PATH 环境变量。<br><br><strong>解决方法：</strong><ol><li>完全关闭终端窗口</li><li>重新打开一个新的终端</li><li>再次运行 <code>copilot --version</code></li></ol><br>如果重开终端后仍然找不到，可能需要重新安装：回到第 2 步选择另一种安装方式试试。<br><br><strong>技术解释：</strong>"PATH"是系统用来查找可执行程序的目录列表。新安装的软件有时需要重新打开终端才能被识别。',
        en: 'This usually means the installation path wasn\'t added to your system\'s PATH variable.<br><br><strong>How to fix:</strong><ol><li>Close the terminal window completely</li><li>Open a new terminal</li><li>Run <code>copilot --version</code> again</li></ol><br>If it still can\'t be found, try reinstalling with a different method from step 2.<br><br><strong>Technical explanation:</strong> "PATH" is a list of directories where the system looks for executable programs. Newly installed software sometimes requires a fresh terminal to be recognized.',
        ja: 'これは通常、インストールパスがシステムの PATH 変数に追加されていないことが原因です。<br><br><strong>解決方法：</strong><ol><li>ターミナルウィンドウを完全に閉じます</li><li>新しいターミナルを開きます</li><li><code>copilot --version</code> をもう一度実行します</li></ol><br>それでも見つからない場合は、ステップ 2 に戻って別のインストール方法をお試しください。<br><br><strong>技術的な説明：</strong>「PATH」とは、システムが実行可能なプログラムを探すディレクトリのリストです。新しくインストールしたソフトウェアは、ターミナルを再起動しないと認識されないことがあります。',
      },
    },
  ],

  'first-launch': [
    {
      q: { zh: '出现红色错误信息怎么办？', en: 'I see red error messages — what do I do?', ja: '赤いエラーメッセージが表示されます。どうすればよいですか？' },
      a: {
        zh: '红色错误通常表示某个步骤出了问题。常见原因：<ul><li><strong>网络连接问题</strong>：Copilot CLI 需要联网才能工作，确认你的网络正常</li><li><strong>认证过期</strong>：运行 <code>/login</code> 重新登录</li><li><strong>Copilot 服务暂时不可用</strong>：等几分钟再试</li></ul><br>如果错误信息是英文的，可以把它复制下来搜索，或者告诉你的技术朋友帮忙看看。',
        en: 'Red errors usually indicate something went wrong. Common causes:<ul><li><strong>Network issues</strong>: Copilot CLI needs internet. Check your connection</li><li><strong>Auth expired</strong>: Run <code>/login</code> to log in again</li><li><strong>Copilot service temporarily unavailable</strong>: Wait a few minutes and try again</li></ul><br>If the error message is unclear, you can search for it online or ask a tech-savvy friend.',
        ja: '赤いエラーは通常、何かがうまくいかなかったことを示しています。よくある原因：<ul><li><strong>ネットワークの問題</strong>：Copilot CLI にはインターネット接続が必要です。接続を確認してください</li><li><strong>認証の期限切れ</strong>：<code>/login</code> を実行して再度ログインしてください</li><li><strong>Copilot サービスの一時的な障害</strong>：数分待ってからもう一度お試しください</li></ul><br>エラーメッセージがわからない場合は、オンラインで検索するか、詳しい友人に相談してみてください。',
      },
    },
    {
      q: { zh: 'Copilot 可以用中文吗？', en: 'Can Copilot understand my language?', ja: 'Copilot は日本語で使えますか？' },
      a: {
        zh: '可以！GitHub Copilot CLI 支持多种语言，包括中文。你可以用中文向它提问，它也会用中文回答。例如：<br><br><code>帮我写一个计算器程序</code><br><code>解释一下什么是 Git</code><br><br>不过，在某些技术场景下，用英文可能会获得更精确的结果。',
        en: 'Yes! GitHub Copilot CLI supports many languages. You can ask questions in your preferred language. For technical contexts, English may sometimes yield more precise results, but it works well in most languages.',
        ja: 'はい！GitHub Copilot CLI は多くの言語に対応しています。お好みの言語で質問できます。技術的な内容では英語の方がより正確な結果が得られる場合もありますが、ほとんどの言語で問題なく動作します。',
      },
    },
    {
      q: { zh: '怎么退出 Copilot CLI？', en: 'How do I exit Copilot CLI?', ja: 'Copilot CLI を終了するにはどうすればよいですか？' },
      a: {
        zh: '有几种方法：<ul><li>输入 <code>/exit</code> 命令</li><li>按 <code>Ctrl + C</code>（同时按住 Ctrl 键和 C 键）</li><li>按 <code>Ctrl + D</code></li></ul><br>退出后你会回到普通的终端界面。下次想用的时候，再运行 <code>copilot</code> 即可。',
        en: 'Several ways:<ul><li>Type the <code>/exit</code> command</li><li>Press <code>Ctrl + C</code></li><li>Press <code>Ctrl + D</code></li></ul><br>After exiting, you\'ll return to your regular terminal. To use Copilot again, just run <code>copilot</code>.',
        ja: 'いくつかの方法があります：<ul><li><code>/exit</code> コマンドを入力する</li><li><code>Ctrl + C</code> を押す</li><li><code>Ctrl + D</code> を押す</li></ul><br>終了すると、通常のターミナル画面に戻ります。次に使いたいときは、再度 <code>copilot</code> を実行するだけです。',
      },
    },
    {
      q: { zh: 'Copilot CLI 和 VS Code 里的 Copilot 有什么区别？', en: 'How is Copilot CLI different from Copilot in VS Code?', ja: 'Copilot CLI と VS Code の Copilot の違いは何ですか？' },
      a: {
        zh: '它们是同一个"Copilot 家族"的不同成员：<ul><li><strong>VS Code Copilot</strong>：集成在编辑器里，写代码时自动补全和建议</li><li><strong>Copilot CLI</strong>：运行在终端里，用自然语言对话的方式帮你完成各种任务——不只是写代码，还能管理文件、调试问题、生成脚本等</li></ul><br>两者可以同时使用，互不冲突。',
        en: 'They\'re different members of the same "Copilot family":<ul><li><strong>VS Code Copilot</strong>: Integrated in the editor, provides code completions and suggestions as you write</li><li><strong>Copilot CLI</strong>: Runs in the terminal, uses natural language conversation to help with all kinds of tasks — not just coding, but also file management, debugging, script generation, and more</li></ul><br>You can use both simultaneously.',
        ja: '同じ「Copilot ファミリー」の異なるメンバーです：<ul><li><strong>VS Code Copilot</strong>：エディタに統合され、コードを書く際にコード補完と提案を提供します</li><li><strong>Copilot CLI</strong>：ターミナルで動作し、自然言語での会話を通じてさまざまなタスクを支援します。コーディングだけでなく、ファイル管理、デバッグ、スクリプト生成なども可能です</li></ul><br>両方を同時に使用できます。',
      },
    },
  ],

  commands: [
    {
      q: { zh: 'Copilot CLI 能做什么？只能写代码吗？', en: 'What can Copilot CLI do? Is it only for coding?', ja: 'Copilot CLI は何ができますか？コーディングだけですか？' },
      a: {
        zh: '远不止写代码！Copilot CLI 可以帮你：<ul><li>📝 <strong>写代码和脚本</strong>：用任何编程语言</li><li>🔍 <strong>查找和解释命令</strong>："怎么用 git 撤销最后一次提交？"</li><li>🐛 <strong>排查问题</strong>："这个错误信息是什么意思？"</li><li>📂 <strong>文件操作</strong>："把所有 jpg 文件按日期重命名"</li><li>📊 <strong>数据处理</strong>："统计这个 CSV 文件有多少行"</li><li>📖 <strong>学习新技术</strong>："用简单的话解释什么是 Docker"</li></ul>',
        en: 'Far more than just coding! Copilot CLI can help you:<ul><li>📝 <strong>Write code and scripts</strong> in any programming language</li><li>🔍 <strong>Find and explain commands</strong>: "How do I undo the last git commit?"</li><li>🐛 <strong>Debug problems</strong>: "What does this error message mean?"</li><li>📂 <strong>File operations</strong>: "Rename all jpg files by date"</li><li>📊 <strong>Data processing</strong>: "Count how many lines are in this CSV file"</li><li>📖 <strong>Learn new tech</strong>: "Explain Docker in simple terms"</li></ul>',
        ja: 'コーディングだけではありません！Copilot CLI は以下のことができます：<ul><li>📝 <strong>コードやスクリプトの作成</strong>：あらゆるプログラミング言語で</li><li>🔍 <strong>コマンドの検索と説明</strong>：「Git で最後のコミットを取り消すには？」</li><li>🐛 <strong>問題のデバッグ</strong>：「このエラーメッセージはどういう意味ですか？」</li><li>📂 <strong>ファイル操作</strong>：「すべての jpg ファイルを日付でリネームして」</li><li>📊 <strong>データ処理</strong>：「この CSV ファイルの行数を数えて」</li><li>📖 <strong>新しい技術の学習</strong>：「Docker をわかりやすく説明して」</li></ul>',
      },
    },
    {
      q: { zh: '对话历史会保留多久？', en: 'How long does conversation history last?', ja: '会話履歴はどのくらい保持されますか？' },
      a: {
        zh: '对话历史只在当前会话中保留。关闭 Copilot CLI 后，对话记录就清除了。下次启动时是全新的对话。<br><br>不过，Copilot 会自动保存你的会话记录。你可以用 <code>/sessions</code> 查看过去的对话列表，然后用 <code>/resume</code> 恢复之前的对话继续工作。这对于需要中断后继续的长任务非常有用。<br><br>如果对话变长导致回答质量下降，可以用 <code>/clear</code> 清空历史重新开始。',
        en: 'Conversation history only lasts for the current session. Once you close Copilot CLI, it\'s cleared. Each launch starts a fresh conversation.<br><br>However, Copilot automatically saves your session records. You can use <code>/sessions</code> to view past conversations, then use <code>/resume</code> to pick up where you left off. This is very useful for long tasks that need to be interrupted and continued later.<br><br>If a long conversation causes response quality to drop, use <code>/clear</code> to start fresh.',
        ja: '会話履歴は現在のセッション中のみ保持されます。Copilot CLI を閉じると履歴はクリアされ、次回起動時は新しい会話から始まります。<br><br>ただし、Copilot はセッション記録を自動的に保存します。<code>/sessions</code> で過去の会話リストを確認し、<code>/resume</code> で以前の会話を再開して作業を続けることができます。中断して後で続ける必要がある長いタスクにとても便利です。<br><br>長い会話で回答の品質が低下した場合は、<code>/clear</code> で履歴をクリアして最初からやり直せます。',
      },
    },
  ],

  'fun-project': [
    {
      q: { zh: 'Copilot 生成的代码安全吗？可以直接运行吗？', en: 'Is the code Copilot generates safe? Can I run it directly?', ja: 'Copilot が生成したコードは安全ですか？そのまま実行できますか？' },
      a: {
        zh: '对于像 HTML 小游戏这样的简单项目，生成的代码在浏览器中运行，非常安全——浏览器有沙箱保护，不会影响你的电脑。<br><br>但养成好习惯：如果 Copilot 生成了涉及删除文件、修改系统设置或访问网络的命令，建议先看懂再执行。',
        en: 'For simple projects like an HTML game, the generated code runs in the browser and is very safe — browsers have sandbox protection that won\'t affect your computer.<br><br>But build good habits: if Copilot generates commands that delete files, modify system settings, or access the network, review them before running.',
        ja: 'HTML ゲームのような簡単なプロジェクトでは、生成されたコードはブラウザで実行されるため、とても安全です。ブラウザにはサンドボックス保護があり、パソコンに影響を与えません。<br><br>ただし、良い習慣を身につけましょう：Copilot がファイルの削除、システム設定の変更、ネットワークへのアクセスを含むコマンドを生成した場合は、実行前に内容を確認してください。',
      },
    },
    {
      q: { zh: '生成的游戏不好玩 / 有 bug 怎么办？', en: 'What if the generated game has bugs or isn\'t fun?', ja: '生成されたゲームにバグがある、または面白くない場合はどうすればよいですか？' },
      a: {
        zh: '这正是 Copilot 的魅力——<strong>继续对话就行！</strong><br><br>比如：<ul><li>"这个按钮太小了，放大一些"</li><li>"颜色不好看，换成渐变色"</li><li>"点击后没反应，帮我修复"</li><li>"加一个倒计时功能"</li></ul><br>AI 编程就是一个不断迭代的过程，每次修改只需要一句话。',
        en: 'That\'s the beauty of Copilot — <strong>just keep chatting!</strong><br><br>For example:<ul><li>"The button is too small, make it bigger"</li><li>"The colors don\'t look great, use gradients"</li><li>"Nothing happens when I click, please fix it"</li><li>"Add a countdown timer"</li></ul><br>AI coding is an iterative process — each change is just one sentence away.',
        ja: 'それこそが Copilot の魅力です — <strong>会話を続けるだけです！</strong><br><br>例えば：<ul><li>「ボタンが小さすぎるので、大きくして」</li><li>「色がいまいちなので、グラデーションにして」</li><li>「クリックしても反応がないので、修正して」</li><li>「カウントダウンタイマーを追加して」</li></ul><br>AI プログラミングは繰り返しのプロセスです。修正のたびに一言伝えるだけです。',
      },
    },
    {
      q: { zh: '除了游戏，还能做什么有趣的？', en: 'Besides games, what other fun things can I make?', ja: 'ゲーム以外に、どんな面白いものが作れますか？' },
      a: {
        zh: '只要能在浏览器或终端里运行的，都可以试：<ul><li>🎨 <strong>个人主页</strong>："帮我做一个炫酷的个人介绍网页"</li><li>🧮 <strong>实用工具</strong>："做一个单位换算计算器"</li><li>📝 <strong>待办清单</strong>："做一个可以添加和删除任务的 todo 应用"</li><li>🎵 <strong>音乐可视化</strong>："做一个跟着音乐节拍跳动的动画"</li><li>🌤️ <strong>天气查询</strong>："做一个输入城市名就能显示天气的网页"</li></ul>',
        en: 'Anything that runs in a browser or terminal is fair game:<ul><li>🎨 <strong>Personal page</strong>: "Make me a cool personal intro website"</li><li>🧮 <strong>Utilities</strong>: "Build a unit conversion calculator"</li><li>📝 <strong>Todo app</strong>: "Make a todo app where I can add and delete tasks"</li><li>🎵 <strong>Music visualizer</strong>: "Make an animation that bounces to a music beat"</li><li>🌤️ <strong>Weather app</strong>: "Make a page that shows weather when I type a city name"</li></ul>',
        ja: 'ブラウザやターミナルで動くものなら何でも試せます：<ul><li>🎨 <strong>個人ページ</strong>：「かっこいい自己紹介ウェブページを作って」</li><li>🧮 <strong>便利ツール</strong>：「単位変換計算機を作って」</li><li>📝 <strong>Todo アプリ</strong>：「タスクの追加と削除ができる Todo アプリを作って」</li><li>🎵 <strong>音楽ビジュアライザー</strong>：「音楽のビートに合わせて動くアニメーションを作って」</li><li>🌤️ <strong>天気アプリ</strong>：「都市名を入力すると天気を表示するページを作って」</li></ul>',
      },
    },
  ],
};
