// Native
import { join } from "path";
import { format } from "url";

// Packages
import { BrowserWindow, app, Menu } from "electron";
import isDev from "electron-is-dev";
import prepareNext from "electron-next";

// Internal
import menus from "./menus";

// Prepare the renderer once the app is ready
app.on("ready", async () => {
  await prepareNext("./renderer");

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: join(__dirname, "preload.js"),
    },
  });

  const url = isDev
    ? "http://localhost:8000/"
    : format({
        pathname: join(__dirname, "../renderer/out/index.html"),
        protocol: "file:",
        slashes: true,
      });

  await mainWindow.loadURL(url);
  // mainWindow.webContents.openDevTools();
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);

Menu.setApplicationMenu(menus);
