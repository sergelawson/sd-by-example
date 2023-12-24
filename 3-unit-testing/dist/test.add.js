"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const testRunner_1 = __importDefault(require("./testRunner"));
testRunner_1.default.test("Adding 2 and 3 equals 5", () => (0, assert_1.default)(2 + 3 === 5));
