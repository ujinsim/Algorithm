const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const n = Number(input);
  const dp = new Array(n + 1).fill(Infinity);
  dp[n] = 0;

  for (let i = n; i >= 0; i--) {
    if (i % 3 == 0) {
      dp[i / 3] = Math.min(dp[i / 3], dp[i] + 1);
    }

    if (i % 2 == 0) {
      dp[i / 2] = Math.min(dp[i / 2], dp[i] + 1);
    }

    if (i > 1) {
      dp[i - 1] = Math.min(dp[i - 1], dp[i] + 1);
    }
  }

  return dp[1];
}

console.log(solution(input));
