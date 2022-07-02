import { dialog } from "electron";

import { File } from "../types/File";
import writeFile from "./writeFile";

const saveAs = async (file: File) => {
  const dialogFile = await dialog.showSaveDialog({
    defaultPath: file.path,
  });

  if (dialogFile.canceled) return false;

  writeFile(dialogFile.filePath as string, file);
};

export default saveAs;
