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
  const file = fs.readFileSync(filename);

  if (!file) {
    console.log("Provide a file to hash");

    return;
  }
  hash.write(file);

  hash.end();

  const sha1sum = hash.read();

  console.log(`${algo.toUpperCase()} of ${filename} is ${sha1sum}`);
};

main();
