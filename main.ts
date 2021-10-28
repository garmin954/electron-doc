// @ts-ignore
const { app, BrowserWindow } = require("electron");
const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const isDev = require("electron-is-dev");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "p reload.js"),
    },
    transparent: true,
    // backgroundColor: "#00000000",
    frame: false,
  });

  const urlLocation = isDev ? "http://localhost:3000" : "http://www.baidu.com";
  win.loadURL(urlLocation);

  // 打开调试框
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
