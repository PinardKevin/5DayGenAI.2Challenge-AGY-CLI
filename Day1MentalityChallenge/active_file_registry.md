# AI Image Guard - Active File Registry

This registry details the purpose and interaction of all source files in the codebase.

## Codebase Registry

### 1. `index.html`
* **Path**: [index.html](file:///C:/Users/Public/AGY-CLI-PRACTICE/index.html)
* **Role**: Application frame. Contains SEO tags, page title, favicon assets, and imports Outfit (sans-serif) and Fira Code (monospaced) Google Fonts.
* **Entrypoint**: Connects `<div id="root">` to `/src/main.jsx`.

### 2. `src/main.jsx`
* **Path**: [src/main.jsx](file:///C:/Users/Public/AGY-CLI-PRACTICE/src/main.jsx)
* **Role**: React bootstrapper. Renders `<App />` inside React `<StrictMode>`.

### 3. `src/App.jsx`
* **Path**: [src/App.jsx](file:///C:/Users/Public/AGY-CLI-PRACTICE/src/App.jsx)
* **Role**: Core application state container.
  * Drag-and-drop file upload listeners.
  * Presets selector grid.
  * Scrolling log console timer.
  * Hover HUD coordinate tracker.
  * Toggle controls for Forensic Heatmap.
  * Recent scan history saved via `localStorage`.

### 4. `src/forensics.js`
* **Path**: [src/forensics.js](file:///C:/Users/Public/AGY-CLI-PRACTICE/src/forensics.js)
* **Role**: Logic library for processing files.
  * Exposes `runForensicsAnalysis(source, fileObject)`.
  * Exposes `scanFileMetadata(file)` for binary header search.
  * Exposes `analyzeCanvasPixels(img, heatmapCanvas)` for Laplacian noise evaluations.
  * Emits pixel hash seeds to lock deterministic scores.

### 5. `src/index.css`
* **Path**: [src/index.css](file:///C:/Users/Public/AGY-CLI-PRACTICE/src/index.css)
* **Role**: Theme definitions.
  * Implements glassmorphism backdrop-filters.
  * Defines grid systems, progress bars, responsive breakpoints, and custom tooltips.
  * Employs linear gradients and laser scanning animations.

### 6. `package.json`
* **Path**: [package.json](file:///C:/Users/Public/AGY-CLI-PRACTICE/package.json)
* **Role**: Project configuration. Exposes standard Vite scripts (`dev`, `build`, `preview`) and registers dependencies like React and Lucide Icons.
