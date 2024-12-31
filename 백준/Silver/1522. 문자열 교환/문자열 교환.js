const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function minSwapsToGroupA(input) {
  const n = input.length;
  const countA = input.split("").filter((char) => char === "a").length;

  let currentB = 0;
  for (let i = 0; i < countA; i++) {
    if (input[i] === "b") currentB++;
  }

  let minSwaps = currentB;

  for (let i = 1; i < n; i++) {
    if (input[i - 1] === "b") currentB--;
    if (input[(i + countA - 1) % n] === "b") currentB++;

    minSwaps = Math.min(minSwaps, currentB);
  }

  return minSwaps;
}

const result = minSwapsToGroupA(input);
console.log(result);
