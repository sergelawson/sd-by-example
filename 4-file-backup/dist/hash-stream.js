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
    fs_1.default.createReadStream(filename).pipe(hash);
    hash.on("finish", () => {
        const final = hash.read();
        console.log(`${algo.toUpperCase()} of ${filename} is ${final}`);
    });
};
main();
