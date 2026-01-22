const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let result = 0;

  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const map = parseInput.slice(1).map(a => a.split(' ').map(Number));
  const dp = Array.from({ length: N }, () => new Array(N).fill(BigInt(0)));

  dp[0][0] = BigInt(1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i == N - 1 && j == N - 1) {
        break;
      }
      if (dp[i][j] !== 0) {
        const v = map[i][j];

        if (v + i < N) {
          dp[v + i][j] += dp[i][j];
        }
        if (v + j < N) {
          dp[i][j + v] += dp[i][j];
        }
      }
    }
  }

  return dp[N - 1][N - 1].toString();
}

console.log(solution(input));
