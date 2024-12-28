const fs = require("fs");

let input = fs.readFileSync('dev/stdin').toString().trim().split("\n");

function result(a, b) {
  const fn = parseInt(a, 10);
  const sn = b;

  const output = [];

  for (let i = 0; i < sn.length; i++) {
    const digit = parseInt(sn[sn.length - 1 - i], 10);
    const partialProduct = fn * digit;
    output.push(partialProduct);
  }

  const totalProduct = fn * parseInt(sn, 10);

  output.push(totalProduct);
  return output;
}

const output = result(input[0], input[1]);
output.forEach((line) => console.log(line));
