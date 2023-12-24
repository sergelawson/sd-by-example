"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const HopeTest = [];
let HopePass = 0;
let HopeFail = 0;
let HopeError = 0;
let hopeThat = (message, callback) => {
    HopeTest.push([message, callback]);
};
const main = () => {
    HopeTest.forEach(([message, test]) => {
        try {
            test();
            HopePass += 1;
        }
        catch (error) {
            if (error instanceof assert_1.default.AssertionError) {
                HopeFail += 1;
            }
            else {
                HopeError += 1;
            }
        }
    });
    console.log("Pass: ", HopePass);
    console.log("Fail: ", HopeFail);
    console.log("Error: ", HopeError);
};
const sign = (value) => {
    return value < 0 ? -1 : 1;
};
hopeThat("Sign of negative is -1", () => (0, assert_1.default)(sign(-10) === -1));
hopeThat("Sign of positif is 1", () => (0, assert_1.default)(sign(19) === 1));
hopeThat("Sign of zero is 0", () => (0, assert_1.default)(sign(0) === 0));
// hopeThat("Sign mispelled is an error", () => assert(sgn(11) === 1));
main();
