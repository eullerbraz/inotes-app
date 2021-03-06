import fs from "fs";

const readFile = (filepath: string) => {
  try {
    return fs.readFileSync(filepath, "utf8");
  } catch (error) {
    console.error(error);
    return "";
  }
};

export default readFile;
