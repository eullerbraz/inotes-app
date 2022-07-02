import { app, BrowserWindow } from "electron";

import { File } from "../types/File";

const newFile = () => {
  const file: File = {
    name: "new-file.txt",
    content: "",
    saved: false,
    path: `${app.getPath("documents")}/new-file.txt`,
  };

  const mainWindow = BrowserWindow.getAllWindows()[0];

  mainWindow.webContents.send("set-file", file);
};

export default newFile;
