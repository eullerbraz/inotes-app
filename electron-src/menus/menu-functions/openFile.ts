import { BrowserWindow, dialog } from "electron";
import path from "path";

import { File } from "../types/File";
import readFile from "./readFile";

const openFile = async (file: File) => {
  const dialogFile = await dialog.showOpenDialog({
    defaultPath: file.path,
  });

  if (dialogFile.canceled) return false;

  const filePath = dialogFile.filePaths[0];

  file = {
    name: path.basename(filePath),
    content: readFile(filePath),
    saved: true,
    path: filePath,
  };

  const mainWindow = BrowserWindow.getAllWindows()[0];

  mainWindow.webContents.send("set-file", file);
};

export default openFile;
