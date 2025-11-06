function solution(input) {
  const [n, ...arr] = input.trim().split(/\s+/).map(Number);
  const dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + arr[j - 1]);
    }
  }

  return dp[n];
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8');
console.log(solution(input));
