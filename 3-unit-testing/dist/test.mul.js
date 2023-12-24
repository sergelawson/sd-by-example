"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const testRunner_1 = __importDefault(require("./testRunner"));
testRunner_1.default.test("Multiplying 7 by 4 equals 28", () => (0, assert_1.default)(7 * 4 === 28));
