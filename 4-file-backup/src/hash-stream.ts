import crypto from "crypto";
import fs from "fs";

const main = () => {
  let algo = "sha1";

  if (process.argv[3]) {
    algo = process.argv[3];
    algo = algo.split("--")[1];

    if (algo !== "sha1" && algo !== "sha256" && algo !== "sha512") {
      algo = "sha1";
    }
  }

  const hash = crypto.createHash(algo);

  hash.setEncoding("hex");

  const filename = process.argv[2];

  fs.createReadStream(filename).pipe(hash);

  hash.on("finish", () => {
    const final = hash.read();

    console.log(`${algo.toUpperCase()} of ${filename} is ${final}`);
  });
};

main();
