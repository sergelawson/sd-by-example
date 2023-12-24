import { globSync } from "glob";
import hope from "./testRunner";
import path from "path";

const main = async (args: string[]) => {
  let filenames = [];

  filenames = globSync(`**/test.*.js`);

  for (const f of filenames) {
    await import(`../${f}`);
  }

  hope.run();

  const result = args.includes("-v") ? hope.verbose() : hope.terse();

  console.log(result);
};

main(process.argv.slice(2));
