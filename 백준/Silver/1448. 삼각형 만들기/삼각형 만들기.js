const fs = require('fs');
const nums = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const n = nums[0];
const arr = nums.slice(1);

arr.sort((a, b) => b - a);

for (let i = 0; i <= n - 3; i++) {
  const a = arr[i], b = arr[i + 1], c = arr[i + 2];
  if (a < b + c) {
    console.log(a + b + c);
    process.exit(0);
  }
}

console.log(-1);
