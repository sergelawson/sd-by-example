import fs from "fs";

const srcDir = process.argv[2];

const listContents = (error: NodeJS.ErrnoException | null, files: string[]) => {
  if (error) {
    console.log(error);
  } else {
    for (const file of files) {
      console.log(file);
    }
  }
};

const results = fs.readdir(srcDir, listContents);
