import { MenuItemConstructorOptions, ipcMain, shell } from "electron";

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
        click: () => newFile(),
        accelerator: "CmdOrCtrl+N",
      },
      {
        label: "Open File",
        click: () => openFile(file.path),
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
  {
    label: "Edit",
    submenu: [
      {
        label: "Undo",
        role: "undo",
      },
      {
        label: "Redo",
        role: "redo",
      },
      {
        type: "separator",
      },
      {
        label: "Cut",
        role: "cut",
      },
      {
        label: "Copy",
        role: "copy",
      },
      {
        label: "Paste",
        role: "paste",
      },
    ],
  },
  {
    label: "Help",
    submenu: [
      {
        label: "GitHub Repository",
        click: () => {
          shell.openExternal("https://github.com/eullerbraz/inotes-app");
        },
      },
    ],
  },
];

ipcMain.on("update-content", async (_, content: any) => {
  file.content = content;
});

ipcMain.on("update-file", async (_, newFile: any) => {
  file = newFile;
});

export default template;
