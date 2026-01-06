# Flux Browser

Flux is an experimental Chromium-based desktop browser built with Electron.

The project exists to explore how browsers behave under the hood and how small UI
and system-level decisions affect usability, performance, and interaction flow.
Rather than focusing on end-user features, Flux is built as a learning-focused,
iteration-driven system.

This is not a Chrome replacement — it’s a hands-on exploration of browser internals,
UI structure, and navigation behavior.

---

## Features

- Native desktop application (Electron)
- Real Chromium web rendering via `webview`
- Custom browser UI (address bar, navigation controls)
- Multi-tab browsing
- Tab closing with smart fallback
- Drag-and-drop tab reordering
- Incognito / private mode
- Ad & tracker blocking
- Native right-click context menus

---

## Download (Windows)

Flux Browser v0.2 is available as a **Windows installer**.

➡ **Download from GitHub Releases:**  
https://github.com/flux3tor/flux-browser/releases

> Note: Flux ships its own Chromium runtime for consistency, so the installer size
> is larger than the application code itself. This is expected for Electron apps.

---

## Status

Flux is currently a **developer preview (v0.2)**.

The core browser architecture, tab system, and privacy features are in place.
Development now focuses on refinement, UX polish, and deeper system exploration.

Planned next:
- Visual theming improvements
- Performance tuning
- Packaging refinements
- Extended content controls

---

## Run from source

```bash
git clone https://github.com/flux3tor/flux-browser.git
cd flux-browser
npm install
npm start
