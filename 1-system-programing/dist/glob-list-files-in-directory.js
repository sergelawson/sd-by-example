import glob from "glob";
const srcDir = process.argv[2];
glob(`${srcDir}/**/*.*`, { ignore: `${srcDir}/*.bck` }, (err, files) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("data", files);
        for (const file of files) {
            console.log(file);
        }
    }
});
