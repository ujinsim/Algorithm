const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString();
input = input.split(" ");

function result(input) {
  let result = 0;

  result = input.reduce((acc, cur) => Number(acc) + Number(cur));
  return result;
}

console.log(result(input));
