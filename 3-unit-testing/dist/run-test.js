"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = require("glob");
const testRunner_1 = __importDefault(require("./testRunner"));
const main = async (args) => {
    let filenames = [];
    filenames = (0, glob_1.globSync)(`**/test.*.js`);
    for (const f of filenames) {
        await import(`../${f}`);
    }
    testRunner_1.default.run();
    const result = args.includes("-v") ? testRunner_1.default.verbose() : testRunner_1.default.terse();
    console.log(result);
};
main(process.argv.slice(2));
