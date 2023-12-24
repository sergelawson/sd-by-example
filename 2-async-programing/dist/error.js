"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function runNow() {
    try {
        return Promise.reject(new Error("Deliberate "));
    }
    catch (error) {
        console.error("Caught exception");
    }
}
runNow().catch((error) => console.log("Uncaught error"));
