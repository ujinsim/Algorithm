const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function 요세푸스(input) {
  let [length, target] = input.split(" ").map(Number);
  let arr = Array.from({ length: length }, (_, i) => i + 1);
  let result = [];
  let index = 0;

  while (arr.length > 0) {
    index = (index + target - 1) % arr.length;
    result.push(arr.splice(index, 1)[0]);
  }

  return `<${result.join(", ")}>`;
}

console.log(요세푸스(input));
