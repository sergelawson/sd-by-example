import assert from "assert";

const HopeTest: any[] = [];
let HopePass: number = 0;
let HopeFail: number = 0;
let HopeError: number = 0;

let hopeThat = (message: string, callback: () => void) => {
  HopeTest.push([message, callback]);
};

const main = () => {
  HopeTest.forEach(([message, test]) => {
    try {
      test();
      HopePass += 1;
    } catch (error) {
      if (error instanceof assert.AssertionError) {
        HopeFail += 1;
      } else {
        HopeError += 1;
      }
    }
  });

  console.log("Pass: ", HopePass);
  console.log("Fail: ", HopeFail);
  console.log("Error: ", HopeError);
};

const sign = (value: number): unknown => {
  return value < 0 ? -1 : 1;
};

hopeThat("Sign of negative is -1", () => assert(sign(-10) === -1));
hopeThat("Sign of positif is 1", () => assert(sign(19) === 1));

hopeThat("Sign of zero is 0", () => assert(sign(0) === 0));

// hopeThat("Sign mispelled is an error", () => assert(sgn(11) === 1));

main();
