const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function result(a) {
  const numbers = a.split(" ").map(Number);

  let max = numbers[0];
  let min = numbers[0];

  numbers.forEach((num) => {
    if (num > max) max = num;
    if (num < min) min = num;
  });

  return [min, max];
}

const output = result(input[1]);

console.log(output.join(" "));
