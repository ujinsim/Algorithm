const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString();
input = input.split(" ").map((e) => +e);

function result(A, B) {
  return A + B;
}

console.log(result(input[0], input[1]));