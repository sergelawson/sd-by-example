import glob from "glob";
import fs from "fs-extra";
import path from "path";
const [srcDir, dstRoot] = process.argv.slice(2);
glob(`${srcDir}/**/*.*`, { ignore: `${srcDir}/*.bck` }, (err, files) => {
    if (err) {
        console.error(err);
    }
    else {
        for (const file of files) {
            const dstName = file.replace(srcDir, dstRoot);
            const dstDir = path.dirname(dstName);
            fs.ensureDir(dstDir, (error) => {
                if (error) {
                    console.error(error);
                }
                else {
                    fs.copy(file, dstDir, (error) => {
                        console.error(error);
                    });
                }
            });
        }
    }
});
