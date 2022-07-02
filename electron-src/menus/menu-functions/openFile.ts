import { BrowserWindow, dialog } from "electron";
import path from "path";

import { File } from "../types/File";
import readFile from "./readFile";

const openFile = async (filePath: string) => {
  const dialogFile = await dialog.showOpenDialog({
    defaultPath: filePath,
  });

  if (dialogFile.canceled) return false;

  const dialogFilePath = dialogFile.filePaths[0];

  const file: File = {
    name: path.basename(dialogFilePath),
    content: readFile(dialogFilePath),
    saved: true,
    path: dialogFilePath,
  };

  const mainWindow = BrowserWindow.getAllWindows()[0];

  mainWindow.webContents.send("set-file", file);
};

export default openFile;
