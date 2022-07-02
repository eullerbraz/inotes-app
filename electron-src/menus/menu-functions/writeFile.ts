import fs from "fs";
import path from "path";
import { BrowserWindow } from "electron";

import { File } from "../types/File";

const writeFile = (filepath: string, file: File) => {
  try {
    fs.writeFileSync(filepath, file.content);

    file.path = filepath;
    file.saved = true;
    file.name = path.basename(filepath);

    const mainWindow = BrowserWindow.getAllWindows()[0];

    mainWindow.webContents.send("set-file", file);
  } catch (error) {
    console.error(error);
  }
};

export default writeFile;
