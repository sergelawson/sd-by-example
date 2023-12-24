"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testRunner_1 = __importDefault(require("./testRunner"));
require("./test.add");
require("./test.mul");
require("./test.div");
testRunner_1.default.run();
console.log(testRunner_1.default.verbose());
