import { File } from "../types/File";
import saveAs from "./saveAs";
import writeFile from "./writeFile";

const save = async (file: File) => {
  if (file.saved) {
    return writeFile(file.path, file);
  }

  return saveAs(file);
};

export default save;
