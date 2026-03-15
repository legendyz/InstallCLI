# GitHub Copilot CLI 安装引导工具

一个面向零基础用户的交互式网页向导，引导用户从零开始安装并使用 GitHub Copilot CLI。

## 在线使用

访问 GitHub Pages 部署地址即可开始使用（无需安装任何软件）。

## 功能特性

- 📋 **步骤式向导** — 从打开终端到首次对话，全程引导
- 🌐 **多语言** — 支持中文和英文界面
- 💻 **多平台** — 自动适配 Windows / macOS / Linux 的安装命令
- 🏢 **账号分流** — 区分个人账号与企业 EMU 账号的不同路径
- ❓ **Q&A 系统** — 每步附带常见问题解答，提供友好的技术背景说明
- 🚀 **首次启动引导** — 安装完成后解释 CLI 首次启动的每个步骤
- 📱 **响应式设计** — 手机、平板、电脑均可使用

## 本地预览

用任意静态文件服务器打开即可，例如：

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

然后浏览器打开 `http://localhost:8000`。

## 项目结构

```
├── index.html          # 单页应用主文件
├── css/
│   └── style.css       # 响应式样式
├── js/
│   ├── app.js          # 向导引擎、状态管理
│   ├── i18n.js         # 多语言框架
│   ├── steps.js        # 安装步骤定义
│   └── faq.js          # Q&A 知识库
└── README.md
```

## 部署到 GitHub Pages

1. 将仓库推送到 GitHub
2. Settings → Pages → Source 选择 `main` 分支、`/ (root)` 目录
3. 保存后等待部署完成

## 贡献

欢迎提交 Issue 和 Pull Request。
