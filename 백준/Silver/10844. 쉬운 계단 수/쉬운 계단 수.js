const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = Number(input);
  const mod = 1000000000;
  const dp = Array.from({ length: N }, () => new Array(10).fill(0));

  dp[0][0] = 0;

  for (let i = 1; i <= 9; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < N; i++) {
    dp[i][0] = dp[i - 1][1] % mod;
    dp[i][9] = dp[i - 1][8] % mod;

    for (let k = 1; k <= 8; k++) {
      dp[i][k] = (dp[i - 1][k - 1] + dp[i - 1][k + 1]) % mod;
    }
  }

  let sum = dp[N - 1].reduce((a, b) => a + b);

  return sum % mod;
}

console.log(solution(input));
