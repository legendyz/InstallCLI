# Copilot Instructions

## What this project is
A static web application (GitHub Pages) that guides complete beginners through installing GitHub Copilot CLI step by step. Bilingual (Chinese + English), multi-platform (Windows primary, macOS/Linux supported).

## Tech stack
- Pure HTML5 / CSS3 / vanilla JavaScript — **no frameworks, no build step, no npm**
- Deployed as-is to GitHub Pages from the repository root
- Local preview: `python -m http.server 8000` or `npx serve .`

## Architecture

### Data flow
`i18n.js` → `steps.js` / `faq.js` → `app.js` → DOM

- **`js/i18n.js`** — lightweight i18n singleton (`I18n`). Exposes `t(keyOrObj)` to resolve either a UI-chrome string key or a `{ zh, en }` content object to the current language.
- **`js/steps.js`** — `STEPS` array defining each wizard step: titles, descriptions, OS-specific commands, account-type branching (personal vs EMU), substeps for first-launch, and `CONGRATS_CONTENT`.
- **`js/faq.js`** — `FAQS` object keyed by step id. Each entry is an array of `{ q, a }` objects (both `{ zh, en }` bilingual objects).
- **`js/app.js`** — `App` IIFE. Manages wizard state (current step, OS, account type, completed steps), renders screens, handles navigation, copy-to-clipboard, sidebar, and persists to `localStorage`.

### State shape (localStorage key: `copilot-guide-state`)
```json
{ "os": "windows", "accountType": "personal", "currentStep": 2, "completed": ["terminal","install"] }
```

### Adding a new step
1. Add a step object to `STEPS` in `steps.js`
2. Add FAQ entries in `faq.js` under the same `id`
3. The wizard engine picks it up automatically

### Adding a new language
1. Add a new language code to the `ui` object in `i18n.js`
2. Add the same code's translations in every `{ zh, en }` content object in `steps.js` and `faq.js`
3. Add the language to `getAvailableLanguages()` in `i18n.js`

## Key conventions
- All user-facing text is bilingual `{ zh: '...', en: '...' }` — never hardcode a single language in content
- OS-specific content is keyed by `windows | macos | linux`; platform-agnostic content uses `all`
- Account-type-specific content is keyed by `personal | emu`
- Scripts are loaded as plain `<script>` tags (not ES modules) and communicate via globals: `I18n`, `STEPS`, `CONGRATS_CONTENT`, `FAQS`, `App`
