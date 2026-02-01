# Archive

This directory contains the legacy version of the Photographic JSON Workflow Generator.

## Legacy File

- **`JSON Workflow Generator.html`** (38 KB) - Original monolithic single-file version
  - Created: Pre-refactoring
  - Last modified: 2026-02-01
  - Status: Archived (reference only)

## Why Archived?

The application was refactored on 2026-02-01 into a modular architecture:

- **Before**: Single 844-line HTML file with inline CSS/JS
- **After**: Separate files (`index.html`, `styles.css`, `app.js`, `presets.js`)

### New Features in Refactored Version

- Custom preset management with localStorage persistence
- Modular file structure for better maintainability
- Enhanced UI with smooth animations
- Visual distinction for custom vs default presets

## If You Need the Legacy Version

The legacy file is fully functional and can be opened directly in a browser. It contains all the original features but lacks:

- Custom preset saving
- localStorage persistence
- Modular code organization
- Recent stability improvements

---

**Use the main `index.html` in the parent directory for the current version.**
