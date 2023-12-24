"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const caller_1 = __importDefault(require("caller"));
class Hope {
    todo = [];
    passes = [];
    fails = [];
    errors;
    constructor() {
        this.todo = [];
        this.passes = [];
        this.fails = [];
        this.errors = [];
    }
    test(comment, callback) {
        const callerList = (0, caller_1.default)().split("/");
        this.todo.push([
            `${callerList[callerList.length - 1]}::${comment}`,
            callback,
        ]);
    }
    run() {
        this.todo.forEach(([comment, test]) => {
            try {
                test();
                this.passes.push(comment);
            }
            catch (error) {
                if (error instanceof assert_1.default.AssertionError) {
                    this.fails.push(comment);
                }
                else {
                    this.errors.push(comment);
                }
            }
        });
    }
    cases() {
        return [
            ["passes", this.passes],
            ["fails", this.fails],
            ["error", this.errors],
        ];
    }
    terse() {
        return this.cases()
            .map(([title, results]) => `${title}: ${results.length}`)
            .join(" ");
    }
    verbose() {
        let report = "";
        let prefix = "";
        for (const [title, results] of this.cases()) {
            report += `${prefix}${title}:`;
            prefix = "\n";
            for (const r of results) {
                report += `${prefix}  ${r}`;
            }
        }
        return report;
    }
}
exports.default = new Hope();
