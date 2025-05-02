const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const splitInput = input.split("\n").map((line) => line.trim());
const [n, m, k] = splitInput[0].split(" ").map(Number);
const arr = splitInput[1].split(" ").map(Number);

function solution(m, k, arr) {
  let count = 0;
  let onBridge = Array(m).fill(0);
  let totalWeight = 0;

  while (arr.length > 0 || totalWeight > 0) {
    count++;

    totalWeight -= onBridge.shift();

    if (arr.length > 0 && totalWeight + arr[0] <= k) {
      const truck = arr.shift();
      onBridge.push(truck);
      totalWeight += truck;
    } else {
      onBridge.push(0);
    }
  }

  return count;
}

console.log(solution(m, k, arr));
