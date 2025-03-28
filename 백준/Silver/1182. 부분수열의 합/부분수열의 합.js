const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, targetSum] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

let count = 0;

function dfs(index, sum) {
  if (index === n) {
    if (sum === targetSum) {
      count++;
    }
    return;
  }

  dfs(index + 1, sum + numbers[index]);
  dfs(index + 1, sum);
}

dfs(0, 0);

if (targetSum === 0) {
  count--;
}

console.log(count);
