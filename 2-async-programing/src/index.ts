const [d, date] = process.hrtime();

const foo = () =>
  console.log((process.hrtime()[1] - date) / 1000 + "s: ", " foo");

const bar = () =>
  console.log((process.hrtime()[1] - date) / 1000 + "s: ", "bar");

const zoo = () =>
  console.log((process.hrtime()[1] - date) / 1000 + "s: ", "zoo");

const coco = () =>
  console.log((process.hrtime()[1] - date) / 1000 + "s: ", "coco");

function start() {
  new Promise((resolve) => resolve("Resolve")).then(coco);

  setImmediate(foo);

  process.nextTick(bar);

  zoo();
}

start();

// Promise.resolve("hello").then((result) => console.log(result));

/* const p = new Promise((resolve, reject) => resolve("hello 1")).then((result) =>
  console.log(result)
);
 */
