import assert from "assert";
import caller from "caller";

class Hope {
  todo: any[] = [];
  passes: any[] = [];
  fails: any[] = [];
  errors: any[];

  constructor() {
    this.todo = [];
    this.passes = [];
    this.fails = [];
    this.errors = [];
  }

  test(comment: string, callback: () => void) {
    const callerList = caller().split("/");
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
      } catch (error) {
        if (error instanceof assert.AssertionError) {
          this.fails.push(comment);
        } else {
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

export default new Hope();
