"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date = new Date();
const foo = () => console.log((new Date().getTime() - date.getTime()) / 1000 + "s: ", " foo");
const bar = () => console.log((new Date().getTime() - date.getTime()) / 1000 + "s: ", "bar");
const zoo = () => console.log((new Date().getTime() - date.getTime()) / 1000 + "s: ", "zoo");
const coco = () => console.log((new Date().getTime() - date.getTime()) / 1000 + "s: ", "coco");
function start() {
    new Promise((resolve) => resolve("Resolve")).then(coco);
    setImmediate(foo);
    process.nextTick(bar);
    zoo();
}
// start();
// Promise.resolve("hello").then((result) => console.log(result));
const p = new Promise((resolve, reject) => resolve("hello 1")).then((result) => console.log(result));
