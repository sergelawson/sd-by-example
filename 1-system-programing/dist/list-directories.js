import fs from "fs";
const srcDir = process.argv[2];
const listContents = (error, files) => {
    if (error) {
        console.log(error);
    }
    else {
        for (const file of files) {
            console.log(file);
        }
    }
};
const results = fs.readdir(srcDir, listContents);
