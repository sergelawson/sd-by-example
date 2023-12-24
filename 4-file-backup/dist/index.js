"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
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
    const hash = crypto_1.default.createHash(algo);
    hash.setEncoding("hex");
    if (text) {
        hash.write(text);
        hash.end();
        const sha1sum = hash.read();
        console.log(`${algo.toUpperCase()} of ${text} is ${sha1sum}`);
    }
    else {
        console.log("Provide a text to hash");
    }
};
main();
