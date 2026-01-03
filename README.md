# Flux Browser

Flux is an experimental Chromium-based desktop browser built with Electron.

The project exists to explore how browsers behave under the hood and how small UI
and system-level decisions affect usability, performance, and interaction flow.
Rather than focusing on features for end users, Flux is built as a learning and
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
- URL syncing (including SPA navigation like YouTube)

---

## Status

Flux is currently a **developer preview**.

There is no packaged installer yet. The browser runs locally via Electron and is
actively being iterated on as features and UX improve.

Planned next:
- Incognito / private mode
- Content blocking (ads / trackers)
- Visual polish and theming
- Packaging for distribution

---

## Try it locally

```bash
git clone https://github.com/flux3tor/flux-browser.git
cd flux-browser
npm install
npm start
