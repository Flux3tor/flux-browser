const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const blocklist = require("./blocklist");

function setupBlocking(sess) {
  sess.webRequest.onBeforeRequest(
    { urls: ["http://*/*", "https://*/*"] },
    (details, callback) => {
      const blocked = blocklist.some(domain =>
        details.url.includes(domain)
      );
      callback({ cancel: blocked });
    }
  );
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, "assets/icon.ico"),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true
    }
  });

  win.loadFile(path.join(__dirname, "index.html"));

  // Attach adblocking
  win.webContents.once("did-finish-load", () => {
    setupBlocking(win.webContents.session);
  });

  //  REAL RIGHT-CLICK FOR WEBVIEW
  win.webContents.on("did-attach-webview", (_event, webContents) => {
    setupBlocking(webContents.session);

    webContents.on("context-menu", (_e, params) => {
      const menu = Menu.buildFromTemplate([
        {
          label: "Back",
          enabled: webContents.canGoBack(),
          click: () => webContents.goBack()
        },
        {
          label: "Forward",
          enabled: webContents.canGoForward(),
          click: () => webContents.goForward()
        },
        { type: "separator" },
        {
          label: "Reload",
          click: () => webContents.reload()
        },
        { type: "separator" },
        {
          label: "Inspect",
          click: () => webContents.inspectElement(params.x, params.y)
        }
      ]);

      menu.popup();
    });
  });
}

app.whenReady().then(createWindow);
