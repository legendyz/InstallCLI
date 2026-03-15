# GitHub Copilot CLI Installation Guide

An interactive web wizard that helps complete beginners install and start using GitHub Copilot CLI from scratch.

## Live Demo

👉 **[legendyz.github.io/InstallCLI](https://legendyz.github.io/InstallCLI/)**

No installation needed — just open the link in your browser.

## Features

- 📋 **Step-by-step wizard** — Guides users from opening a terminal to their first AI conversation
- 🌐 **Bilingual** — Full Chinese and English interface
- 💻 **Multi-platform** — Auto-adapts commands for Windows / macOS / Linux
- 🏢 **Account branching** — Separate paths for personal GitHub accounts and enterprise EMU accounts (with Microsoft FTE/vendor guidance)
- ❓ **Contextual Q&A** — Each step includes FAQs with beginner-friendly technical explanations
- 🎮 **Hands-on tutorial** — Optional mini game project to experience AI-powered coding
- 📱 **Responsive design** — Works on desktop, tablet, and mobile

## Local Preview

Serve the project with any static file server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
├── index.html          # Single-page application
├── css/
│   └── style.css       # Microsoft Fluent Design styling
├── js/
│   ├── app.js          # Wizard engine & state management
│   ├── i18n.js         # i18n framework
│   ├── steps.js        # Installation step definitions
│   └── faq.js          # Q&A knowledge base
└── README.md
```

## Deploy to GitHub Pages

1. Push the repository to GitHub
2. Go to Settings → Pages → Source, select the `master` branch and `/ (root)` directory
3. Save and wait for the deployment to complete

## Contributing

Issues and Pull Requests are welcome.
