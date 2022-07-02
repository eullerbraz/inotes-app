import { MenuItemConstructorOptions, ipcMain } from "electron";

import newFile from "./menu-functions/newFile";
import openFile from "./menu-functions/openFile";
import save from "./menu-functions/save";
import saveAs from "./menu-functions/saveAs";
import { File } from "./types/File";

let file: File = {
  name: "",
  content: "",
  saved: false,
  path: "",
};

const template: MenuItemConstructorOptions[] = [
  {
    label: "File",
    submenu: [
      {
        label: "New File",
        click: () => newFile(file),
        accelerator: "CmdOrCtrl+N",
      },
      {
        label: "Open File",
        click: () => openFile(file),
        accelerator: "CmdOrCtrl+O",
      },
      {
        label: "Save",
        click: () => save(file),
        accelerator: "CmdOrCtrl+S",
      },
      {
        label: "Save As",
        click: () => saveAs(file),
        accelerator: "CmdOrCtrl+Shift+S",
      },
      {
        label: "Exit",
        role: "quit",
      },
    ],
  },
];

ipcMain.on("update-content", async (_, content: any) => {
  file.content = content;
});

export default template;
