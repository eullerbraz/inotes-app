import { MenuItemConstructorOptions, ipcMain } from "electron";

import newFile from "./menu-functions/newFile";
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
      },
      {
        label: "Open File",
      },
      {
        label: "Save",
      },
      {
        label: "Save As",
        click: () => saveAs(file),
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
