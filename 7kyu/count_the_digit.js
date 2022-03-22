function nbDig(n, d) {
  let arrayOfSquares = [];

  for (let i = 0; i <= n; i++) {
    let squaredNumber = i * i;
    arrayOfSquares.push(squaredNumber);
  }

  let coundOfD = 0;

  let newArry = arrayOfSquares.join("").split("");

  newArry.map((digit) => {
    if (digit === d.toString()) {
      return (coundOfD += 1);
    }
    return;
  });

  return coundOfD;
}

// const assert = require('chai').assert;
// describe("nbDig", () => {
//   it("Basic tests", () => {
//     assert.strictEqual(nbDig( 5750, 0),  4700, "n = 5750, d = 0");
//     assert.strictEqual(nbDig(11011, 2),  9481, "n = 11011, d = 2");
//     assert.strictEqual(nbDig(12224, 8),  7733, "n = 12224, d = 8");
//     assert.strictEqual(nbDig(11549, 1), 11905, "n = 11549, d = 1");
//   });
// });

console.log(nbDig(5750, 0));
