"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const main = () => {
    let algo = "sha1";
    if (process.argv[3]) {
        algo = process.argv[3];
        algo = algo.split("--")[1];
        if (algo !== "sha1" && algo !== "sha256" && algo !== "sha512") {
            algo = "sha1";
        }
    }
    const hash = crypto_1.default.createHash(algo);
    hash.setEncoding("hex");
    const filename = process.argv[2];
    const file = fs_1.default.readFileSync(filename);
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
