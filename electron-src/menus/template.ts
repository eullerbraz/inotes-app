import { MenuItemConstructorOptions } from "electron";

import newFile from "./menu-functions/newFile";
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
      },
      {
        label: "Exit",
        role: "quit",
      },
    ],
  },
];

export default template;
