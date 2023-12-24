import crypto from "crypto";

const main = () => {
  const text = process.argv[2];

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

  if (text) {
    hash.write(text);

    hash.end();

    const sha1sum = hash.read();

    console.log(`${algo.toUpperCase()} of ${text} is ${sha1sum}`);
  } else {
    console.log("Provide a text to hash");
  }
};

main();
