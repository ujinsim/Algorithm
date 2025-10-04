function solution(input) {
  const split_input = input.trim().split("\n");
  const n = Number(split_input[0]);
  const arr = split_input[1].split(" ").map(Number);
  
  const lisArr = new Array(n).fill(1);
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        lisArr[i] = Math.max(lisArr[i], lisArr[j] + 1);
      }
    }
  }
  
  return Math.max(...lisArr);
}

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString();
console.log(solution(input));
