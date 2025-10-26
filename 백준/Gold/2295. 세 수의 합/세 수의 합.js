const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(Number).sort((a, b) => a - b);

const sumSet = new Set();

for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    sumSet.add(arr[i] + arr[j]);
  }
}

for (let k = n - 1; k >= 0; k--) {
  for (let i = 0; i <= k; i++) {
    const diff = arr[k] - arr[i];
    if (sumSet.has(diff)) {
      console.log(arr[k]);
      process.exit(0);
    }
  }
}
