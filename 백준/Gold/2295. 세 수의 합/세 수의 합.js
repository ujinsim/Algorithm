const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

const n = input[0];
const arr = input.slice(1).sort((a, b) => a - b);

const twoSum = [];
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    twoSum.push(arr[i] + arr[j]);
  }
}
twoSum.sort((a, b) => a - b);

for (let k = n - 1; k >= 0; k--) {
  for (let i = 0; i < k; i++) {
    const target = arr[k] - arr[i];

    let left = 0;
    let right = twoSum.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (twoSum[mid] === target) {
        console.log(arr[k]);
        process.exit(0);
      }
      if (twoSum[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
  }
}
