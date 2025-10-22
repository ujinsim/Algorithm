const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [K, N] = input[0].split(' ').map(Number);
const arrs = input.slice(1).map(Number);

let low = 1;
let high = Math.max(...arrs);
let result = 0;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);
  let cnt = 0;

  for (let i = 0; i < K; i++) {
    cnt += Math.floor(arrs[i] / mid);
  }

  if (cnt >= N) {
    result = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(result);
