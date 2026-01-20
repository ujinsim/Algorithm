const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const lines = input.split('\n');
  const N = Number(lines[0]);
  const nums = lines[1].split(' ').map(Number);
  const dp = [...nums];

  for (let i = 1; i < N; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        max = Math.max(dp[j] + nums[i], max);
      }
    }
    if (max == 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = max;
    }
  }

  return Math.max(...dp);
}

console.log(solution(input));
