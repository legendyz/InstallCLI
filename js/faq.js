// faq.js — Q&A knowledge base keyed by step id (bilingual)

const FAQS = {
  terminal: [
    {
      q: { zh: '什么是"终端"？为什么要用它？', en: 'What is a "terminal"? Why do I need it?' },
      a: {
        zh: '终端（Terminal）是一种用文字和电脑交互的界面。虽然没有图形界面那么直观，但它能做很多鼠标点击做不到的事情——比如批量操作文件、安装软件、远程控制服务器等。Copilot CLI 就是一个运行在终端里的工具。<br><br><strong>你可以把它想象成：</strong>给电脑发短信，而不是点按钮。',
        en: 'A terminal is a text-based interface for interacting with your computer. While less visual than clicking icons, it\'s far more powerful — you can batch-process files, install software, control remote servers, and more. Copilot CLI is a tool that runs in the terminal.<br><br><strong>Think of it as:</strong> texting your computer instead of tapping buttons.',
      },
    },
    {
      q: { zh: '为什么不能用 CMD（命令提示符）？', en: 'Why can\'t I use CMD (Command Prompt)?' },
      a: {
        zh: 'Copilot CLI 的 shell 集成功能依赖 PowerShell 6+ 的特性，CMD 不支持这些功能。<br><br><strong>CMD</strong>（命令提示符）是 Windows 早期的命令行工具，功能有限。<strong>PowerShell</strong> 是微软推出的现代命令行，功能更强大。GitHub 官方要求在 Windows 上使用 PowerShell 6 以上版本。',
        en: 'Copilot CLI\'s shell integration features rely on PowerShell 6+ capabilities that CMD doesn\'t support.<br><br><strong>CMD</strong> (Command Prompt) is Windows\' legacy command-line tool with limited features. <strong>PowerShell</strong> is Microsoft\'s modern command-line. GitHub officially requires PowerShell 6 or higher on Windows.',
      },
    },
    {
      q: { zh: '终端里的文字看起来好吓人，会不会搞坏电脑？', en: 'The terminal looks scary. Can I break my computer?' },
      a: {
        zh: '放心！本向导中的所有命令都是安全的——它们只会安装软件和检查版本号，不会删除文件或修改系统设置。<br><br>一般来说，只要你不运行自己不理解的命令（特别是带 <code>rm</code>、<code>del</code>、<code>format</code> 这类关键词的），就不会有问题。',
        en: 'Don\'t worry! All commands in this guide are safe — they only install software and check version numbers. They won\'t delete files or modify system settings.<br><br>As a rule of thumb, you\'re safe as long as you don\'t run commands you don\'t understand (especially ones with keywords like <code>rm</code>, <code>del</code>, or <code>format</code>).',
      },
    },
  ],

  powershell: [
    {
      q: { zh: 'PowerShell 7 和 Windows 自带的 PowerShell 有什么区别？', en: 'What\'s the difference between PowerShell 7 and the built-in PowerShell?' },
      a: {
        zh: 'Windows 自带的是 <strong>PowerShell 5.1</strong>（也叫"Windows PowerShell"），图标是蓝色的。<strong>PowerShell 7</strong> 是微软推出的新版本，功能更强，图标是黑色的。<br><br>两者可以同时安装在电脑上，互不干扰。Copilot CLI 需要 PowerShell 7 存在于你的电脑上，但你<strong>不一定要从 PowerShell 7 窗口启动</strong>——只要装了，Copilot CLI 会自动找到它。',
        en: 'Windows comes with <strong>PowerShell 5.1</strong> (called "Windows PowerShell"), which has a blue icon. <strong>PowerShell 7</strong> is Microsoft\'s newer version — more capable, with a black icon.<br><br>Both can coexist on your machine. Copilot CLI needs PowerShell 7 to be installed, but you <strong>don\'t have to launch from a PowerShell 7 window</strong> — as long as it\'s installed, Copilot CLI will find it automatically.',
      },
    },
    {
      q: { zh: '安装 PowerShell 7 会影响我电脑上的其他软件吗？', en: 'Will installing PowerShell 7 affect other software on my computer?' },
      a: {
        zh: '不会。PowerShell 7 是一个完全独立的程序，和 Windows 自带的 PowerShell 5.1 互不影响。你原来的所有软件和设置都不会改变。',
        en: 'No. PowerShell 7 is a completely independent program. It doesn\'t interfere with the built-in PowerShell 5.1. All your existing software and settings remain unchanged.',
      },
    },
    {
      q: { zh: '在开始菜单里找不到 PowerShell 7 怎么办？', en: 'I can\'t find PowerShell 7 in the Start menu?' },
      a: {
        zh: '安装完成后，试试以下方法：<ul><li>在开始菜单搜索框中输入 <strong>"PowerShell"</strong>，看看列表里有没有标注 "7" 的选项</li><li>如果只看到一个蓝色图标的"Windows PowerShell"，说明安装可能没有成功，请重新运行 <code>winget install Microsoft.PowerShell</code></li><li>安装成功后可能需要<strong>重启电脑</strong>才能在开始菜单中看到它</li></ul>',
        en: 'After installation, try these steps:<ul><li>Type <strong>"PowerShell"</strong> in the Start menu search box and look for an option marked with "7"</li><li>If you only see a blue-icon "Windows PowerShell", the installation may not have succeeded — try running <code>winget install Microsoft.PowerShell</code> again</li><li>You may need to <strong>restart your computer</strong> for it to appear in the Start menu</li></ul>',
      },
    },
  ],

  install: [
    {
      q: { zh: '什么是 winget / Homebrew / npm？', en: 'What is winget / Homebrew / npm?' },
      a: {
        zh: '这些都是<strong>"包管理器"</strong>——就像手机上的"应用商店"，但用来在终端里安装和管理软件。<ul><li><strong>winget</strong>：Windows 自带的包管理器（Windows 10 1709+ 可用）</li><li><strong>Homebrew</strong>：macOS/Linux 上最流行的包管理器</li><li><strong>npm</strong>：Node.js 的包管理器，跨平台通用</li></ul>',
        en: 'These are <strong>package managers</strong> — like an "app store" but for installing software from the terminal.<ul><li><strong>winget</strong>: Windows\' built-in package manager (available on Windows 10 1709+)</li><li><strong>Homebrew</strong>: The most popular package manager for macOS/Linux</li><li><strong>npm</strong>: Node.js package manager, works cross-platform</li></ul>',
      },
    },
    {
      q: { zh: '提示 "winget 不是内部或外部命令" 怎么办？', en: 'I get "winget is not recognized" — what do I do?' },
      a: {
        zh: '这意味着你的 Windows 版本可能较旧，或者"应用安装程序"需要更新。<br><br><strong>解决方法：</strong><ol><li>打开 <strong>Microsoft Store</strong>（在开始菜单搜索"Store"）</li><li>搜索 <strong>"应用安装程序"（App Installer）</strong></li><li>点击<strong>更新</strong></li><li>更新完成后，关闭并重新打开终端，再试一次</li></ol><br>如果仍然不行，可以使用 npm 方式安装（需要先安装 Node.js）。',
        en: 'This means your Windows version may be older, or the "App Installer" needs updating.<br><br><strong>How to fix:</strong><ol><li>Open the <strong>Microsoft Store</strong> (search "Store" in Start menu)</li><li>Search for <strong>"App Installer"</strong></li><li>Click <strong>Update</strong></li><li>After updating, close and reopen the terminal, then try again</li></ol><br>If it still doesn\'t work, use the npm installation method (requires Node.js first).',
      },
    },
    {
      q: { zh: '安装速度很慢或者失败了怎么办？', en: 'Installation is slow or failed — what do I do?' },
      a: {
        zh: '可能的原因：<ul><li><strong>网络问题</strong>：确保你能正常访问 github.com。如果在公司网络，可能需要配置代理</li><li><strong>权限不足</strong>：尝试以管理员身份运行终端（右键 PowerShell → "以管理员身份运行"）</li><li><strong>杀毒软件拦截</strong>：有些杀毒软件可能会拦截安装过程，可以暂时关闭后重试</li></ul>',
        en: 'Possible causes:<ul><li><strong>Network issues</strong>: Make sure you can access github.com. If on a corporate network, you may need to configure a proxy</li><li><strong>Insufficient permissions</strong>: Try running the terminal as administrator (right-click PowerShell → "Run as Administrator")</li><li><strong>Antivirus blocking</strong>: Some antivirus software may block the installation. Try temporarily disabling it</li></ul>',
      },
    },
  ],

  account: [
    {
      q: { zh: '怎么判断我是不是 EMU 账号？', en: 'How do I know if I have an EMU account?' },
      a: {
        zh: '以下几个特征可以帮你判断：<ul><li><strong>用户名格式</strong>：EMU 用户名通常带有公司后缀，例如 <code>zhangsan_contoso</code></li><li><strong>登录方式</strong>：EMU 账号登录时会跳转到公司的 SSO 页面</li><li><strong>无法创建公开仓库</strong>：EMU 账号通常只能在企业组织内创建仓库</li><li><strong>账号由 IT 提供</strong>：如果账号不是你自己在 github.com/signup 注册的，大概率是 EMU</li></ul><br>不确定的话，可以问你的 IT 同事或管理员。',
        en: 'Here are some indicators:<ul><li><strong>Username format</strong>: EMU usernames typically have a company suffix, e.g. <code>jsmith_contoso</code></li><li><strong>Login method</strong>: EMU accounts redirect to your company\'s SSO page when logging in</li><li><strong>Can\'t create public repos</strong>: EMU accounts usually can only create repos within the enterprise org</li><li><strong>Account provided by IT</strong>: If you didn\'t sign up at github.com/signup yourself, it\'s likely EMU</li></ul><br>If unsure, ask your IT team.',
      },
    },
    {
      q: { zh: '个人账号和 EMU 账号可以同时用吗？', en: 'Can I use both a personal and an EMU account?' },
      a: {
        zh: '可以！它们是完全独立的两个账号，建议两个都有。<br><br><strong>为什么建议同时创建个人账号？</strong><br>EMU 账号仅限公司内使用，个人账号可以让你参与开源项目、管理自己的代码。你可以在 GitHub 设置中将两个账号关联起来。<br><br>在 Copilot CLI 中一次只能登录一个账号。如果需要切换，先运行 <code>/logout</code> 退出当前账号，再用 <code>/login</code> 登录另一个。',
        en: 'Yes! They are completely independent accounts, and it\'s recommended to have both.<br><br><strong>Why create a personal account too?</strong><br>EMU accounts are limited to company use. A personal account lets you contribute to open source and manage your own code. You can link the two accounts in GitHub settings.<br><br>In Copilot CLI, you can only be logged into one at a time. To switch, run <code>/logout</code> first, then <code>/login</code> to log into the other.',
      },
    },
    {
      q: { zh: '公司没给我开 Copilot 怎么办？', en: 'My company hasn\'t enabled Copilot for me — what do I do?' },
      a: {
        zh: '如果你使用 EMU 账号但没有 Copilot 权限，你可以：<ol><li>联系你的 IT 管理员，申请开通 Copilot</li><li>如果公司暂时不提供，你也可以用<strong>个人 GitHub 账号</strong>注册 Copilot Free（免费），用个人账号来使用 Copilot CLI</li></ol>',
        en: 'If you have an EMU account but no Copilot access, you can:<ol><li>Contact your IT admin to request Copilot access</li><li>If your company doesn\'t provide it yet, you can use a <strong>personal GitHub account</strong> with Copilot Free (free tier) to use Copilot CLI</li></ol>',
      },
    },
  ],

  subscription: [
    {
      q: { zh: 'Copilot Free 够用吗？有什么限制？', en: 'Is Copilot Free enough? What are the limits?' },
      a: {
        zh: 'Copilot Free 提供基本的 AI 代码辅助功能，对于学习和轻度使用完全足够。主要区别在于：<ul><li><strong>Free</strong>：每月有一定的使用次数限制，但对大多数人来说完全够用</li><li><strong>Pro</strong>：无限使用次数，更多高级功能</li></ul><br>建议先用 Free 版本体验，有需要再升级。',
        en: 'Copilot Free provides basic AI coding assistance and is perfectly fine for learning and light use. The main differences:<ul><li><strong>Free</strong>: Monthly usage limits, but sufficient for most people</li><li><strong>Pro</strong>: Unlimited usage, more advanced features</li></ul><br>Start with Free and upgrade later if needed.',
      },
    },
  ],

  auth: [
    {
      q: { zh: '登录时浏览器没有自动打开怎么办？', en: 'The browser didn\'t open automatically — what do I do?' },
      a: {
        zh: '手动打开浏览器，访问 <a href="https://github.com/login/device" target="_blank">github.com/login/device</a>，然后输入终端中显示的激活码即可。<br><br>激活码通常是 4 组字母数字，格式类似 <code>ABCD-1234</code>。',
        en: 'Open your browser manually, go to <a href="https://github.com/login/device" target="_blank">github.com/login/device</a>, and enter the activation code shown in your terminal.<br><br>The code is usually in a format like <code>ABCD-1234</code>.',
      },
    },
    {
      q: { zh: '登录失败或显示"权限不足"怎么办？', en: 'Login failed or shows "insufficient permissions"?' },
      a: {
        zh: '可能的原因：<ul><li><strong>没有 Copilot 订阅</strong>：确保你已经在步骤 4 开通了 Copilot</li><li><strong>EMU 账号未授权</strong>：联系 IT 管理员开通 Copilot 权限</li><li><strong>网络问题</strong>：确认能正常访问 github.com</li><li><strong>激活码过期</strong>：激活码有时效，如果过期了，重新运行 <code>/login</code></li></ul>',
        en: 'Possible causes:<ul><li><strong>No Copilot subscription</strong>: Make sure you enabled Copilot in step 4</li><li><strong>EMU account not authorized</strong>: Contact your IT admin to enable Copilot</li><li><strong>Network issues</strong>: Verify you can access github.com</li><li><strong>Code expired</strong>: Activation codes expire. Run <code>/login</code> again for a fresh code</li></ul>',
      },
    },
  ],

  verify: [
    {
      q: { zh: '提示"找不到命令"怎么办？', en: 'I get "command not found" — what do I do?' },
      a: {
        zh: '这通常是因为安装路径没有加入系统的 PATH 环境变量。<br><br><strong>解决方法：</strong><ol><li>完全关闭终端窗口</li><li>重新打开一个新的终端</li><li>再次运行 <code>copilot --version</code></li></ol><br>如果重开终端后仍然找不到，可能需要重新安装：回到第 2 步选择另一种安装方式试试。<br><br><strong>技术解释：</strong>"PATH"是系统用来查找可执行程序的目录列表。新安装的软件有时需要重新打开终端才能被识别。',
        en: 'This usually means the installation path wasn\'t added to your system\'s PATH variable.<br><br><strong>How to fix:</strong><ol><li>Close the terminal window completely</li><li>Open a new terminal</li><li>Run <code>copilot --version</code> again</li></ol><br>If it still can\'t be found, try reinstalling with a different method from step 2.<br><br><strong>Technical explanation:</strong> "PATH" is a list of directories where the system looks for executable programs. Newly installed software sometimes requires a fresh terminal to be recognized.',
      },
    },
  ],

  'first-launch': [
    {
      q: { zh: '出现红色错误信息怎么办？', en: 'I see red error messages — what do I do?' },
      a: {
        zh: '红色错误通常表示某个步骤出了问题。常见原因：<ul><li><strong>网络连接问题</strong>：Copilot CLI 需要联网才能工作，确认你的网络正常</li><li><strong>认证过期</strong>：运行 <code>/login</code> 重新登录</li><li><strong>Copilot 服务暂时不可用</strong>：等几分钟再试</li></ul><br>如果错误信息是英文的，可以把它复制下来搜索，或者告诉你的技术朋友帮忙看看。',
        en: 'Red errors usually indicate something went wrong. Common causes:<ul><li><strong>Network issues</strong>: Copilot CLI needs internet. Check your connection</li><li><strong>Auth expired</strong>: Run <code>/login</code> to log in again</li><li><strong>Copilot service temporarily unavailable</strong>: Wait a few minutes and try again</li></ul><br>If the error message is unclear, you can search for it online or ask a tech-savvy friend.',
      },
    },
    {
      q: { zh: 'Copilot 可以用中文吗？', en: 'Can Copilot understand my language?' },
      a: {
        zh: '可以！GitHub Copilot CLI 支持多种语言，包括中文。你可以用中文向它提问，它也会用中文回答。例如：<br><br><code>帮我写一个计算器程序</code><br><code>解释一下什么是 Git</code><br><br>不过，在某些技术场景下，用英文可能会获得更精确的结果。',
        en: 'Yes! GitHub Copilot CLI supports many languages. You can ask questions in your preferred language. For technical contexts, English may sometimes yield more precise results, but it works well in most languages.',
      },
    },
    {
      q: { zh: '怎么退出 Copilot CLI？', en: 'How do I exit Copilot CLI?' },
      a: {
        zh: '有几种方法：<ul><li>输入 <code>/exit</code> 命令</li><li>按 <code>Ctrl + C</code>（同时按住 Ctrl 键和 C 键）</li><li>按 <code>Ctrl + D</code></li></ul><br>退出后你会回到普通的终端界面。下次想用的时候，再运行 <code>copilot</code> 即可。',
        en: 'Several ways:<ul><li>Type the <code>/exit</code> command</li><li>Press <code>Ctrl + C</code></li><li>Press <code>Ctrl + D</code></li></ul><br>After exiting, you\'ll return to your regular terminal. To use Copilot again, just run <code>copilot</code>.',
      },
    },
    {
      q: { zh: 'Copilot CLI 和 VS Code 里的 Copilot 有什么区别？', en: 'How is Copilot CLI different from Copilot in VS Code?' },
      a: {
        zh: '它们是同一个"Copilot 家族"的不同成员：<ul><li><strong>VS Code Copilot</strong>：集成在编辑器里，写代码时自动补全和建议</li><li><strong>Copilot CLI</strong>：运行在终端里，用自然语言对话的方式帮你完成各种任务——不只是写代码，还能管理文件、调试问题、生成脚本等</li></ul><br>两者可以同时使用，互不冲突。',
        en: 'They\'re different members of the same "Copilot family":<ul><li><strong>VS Code Copilot</strong>: Integrated in the editor, provides code completions and suggestions as you write</li><li><strong>Copilot CLI</strong>: Runs in the terminal, uses natural language conversation to help with all kinds of tasks — not just coding, but also file management, debugging, script generation, and more</li></ul><br>You can use both simultaneously.',
      },
    },
  ],

  commands: [
    {
      q: { zh: 'Copilot CLI 能做什么？只能写代码吗？', en: 'What can Copilot CLI do? Is it only for coding?' },
      a: {
        zh: '远不止写代码！Copilot CLI 可以帮你：<ul><li>📝 <strong>写代码和脚本</strong>：用任何编程语言</li><li>🔍 <strong>查找和解释命令</strong>："怎么用 git 撤销最后一次提交？"</li><li>🐛 <strong>排查问题</strong>："这个错误信息是什么意思？"</li><li>📂 <strong>文件操作</strong>："把所有 jpg 文件按日期重命名"</li><li>📊 <strong>数据处理</strong>："统计这个 CSV 文件有多少行"</li><li>📖 <strong>学习新技术</strong>："用简单的话解释什么是 Docker"</li></ul>',
        en: 'Far more than just coding! Copilot CLI can help you:<ul><li>📝 <strong>Write code and scripts</strong> in any programming language</li><li>🔍 <strong>Find and explain commands</strong>: "How do I undo the last git commit?"</li><li>🐛 <strong>Debug problems</strong>: "What does this error message mean?"</li><li>📂 <strong>File operations</strong>: "Rename all jpg files by date"</li><li>📊 <strong>Data processing</strong>: "Count how many lines are in this CSV file"</li><li>📖 <strong>Learn new tech</strong>: "Explain Docker in simple terms"</li></ul>',
      },
    },
    {
      q: { zh: '对话历史会保留多久？', en: 'How long does conversation history last?' },
      a: {
        zh: '对话历史只在当前会话中保留。关闭 Copilot CLI 后，对话记录就清除了。下次启动时是全新的对话。<br><br>不过，Copilot 会自动保存你的会话记录。你可以用 <code>/sessions</code> 查看过去的对话列表，然后用 <code>/resume</code> 恢复之前的对话继续工作。这对于需要中断后继续的长任务非常有用。<br><br>如果对话变长导致回答质量下降，可以用 <code>/clear</code> 清空历史重新开始。',
        en: 'Conversation history only lasts for the current session. Once you close Copilot CLI, it\'s cleared. Each launch starts a fresh conversation.<br><br>However, Copilot automatically saves your session records. You can use <code>/sessions</code> to view past conversations, then use <code>/resume</code> to pick up where you left off. This is very useful for long tasks that need to be interrupted and continued later.<br><br>If a long conversation causes response quality to drop, use <code>/clear</code> to start fresh.',
      },
    },
  ],

  'fun-project': [
    {
      q: { zh: 'Copilot 生成的代码安全吗？可以直接运行吗？', en: 'Is the code Copilot generates safe? Can I run it directly?' },
      a: {
        zh: '对于像 HTML 小游戏这样的简单项目，生成的代码在浏览器中运行，非常安全——浏览器有沙箱保护，不会影响你的电脑。<br><br>但养成好习惯：如果 Copilot 生成了涉及删除文件、修改系统设置或访问网络的命令，建议先看懂再执行。',
        en: 'For simple projects like an HTML game, the generated code runs in the browser and is very safe — browsers have sandbox protection that won\'t affect your computer.<br><br>But build good habits: if Copilot generates commands that delete files, modify system settings, or access the network, review them before running.',
      },
    },
    {
      q: { zh: '生成的游戏不好玩 / 有 bug 怎么办？', en: 'What if the generated game has bugs or isn\'t fun?' },
      a: {
        zh: '这正是 Copilot 的魅力——<strong>继续对话就行！</strong><br><br>比如：<ul><li>"这个按钮太小了，放大一些"</li><li>"颜色不好看，换成渐变色"</li><li>"点击后没反应，帮我修复"</li><li>"加一个倒计时功能"</li></ul><br>AI 编程就是一个不断迭代的过程，每次修改只需要一句话。',
        en: 'That\'s the beauty of Copilot — <strong>just keep chatting!</strong><br><br>For example:<ul><li>"The button is too small, make it bigger"</li><li>"The colors don\'t look great, use gradients"</li><li>"Nothing happens when I click, please fix it"</li><li>"Add a countdown timer"</li></ul><br>AI coding is an iterative process — each change is just one sentence away.',
      },
    },
    {
      q: { zh: '除了游戏，还能做什么有趣的？', en: 'Besides games, what other fun things can I make?' },
      a: {
        zh: '只要能在浏览器或终端里运行的，都可以试：<ul><li>🎨 <strong>个人主页</strong>："帮我做一个炫酷的个人介绍网页"</li><li>🧮 <strong>实用工具</strong>："做一个单位换算计算器"</li><li>📝 <strong>待办清单</strong>："做一个可以添加和删除任务的 todo 应用"</li><li>🎵 <strong>音乐可视化</strong>："做一个跟着音乐节拍跳动的动画"</li><li>🌤️ <strong>天气查询</strong>："做一个输入城市名就能显示天气的网页"</li></ul>',
        en: 'Anything that runs in a browser or terminal is fair game:<ul><li>🎨 <strong>Personal page</strong>: "Make me a cool personal intro website"</li><li>🧮 <strong>Utilities</strong>: "Build a unit conversion calculator"</li><li>📝 <strong>Todo app</strong>: "Make a todo app where I can add and delete tasks"</li><li>🎵 <strong>Music visualizer</strong>: "Make an animation that bounces to a music beat"</li><li>🌤️ <strong>Weather app</strong>: "Make a page that shows weather when I type a city name"</li></ul>',
      },
    },
  ],
};
