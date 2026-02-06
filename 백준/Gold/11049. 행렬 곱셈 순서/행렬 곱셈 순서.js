const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  // 곱할 떄는 1,2,4
  // 결과는 1 4

  // 5 * 3 * 2 (5*2) 그 다음 5 2 6
  // 3 * 2 * 6 (3*6) 그 다음 5 3 6

  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const arrs = parseInput.slice(1).map(a => a.split(' ').map(Number));

  const dp = Array.from({ length: N }, () => new Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    dp[i][i] = 0;
  }

  for (let gap = 1; gap < N; gap++) {
    for (let i = 0; i < N - gap; i++) {
      const j = i + gap;

      dp[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        const cost =
          dp[i][k] + dp[k + 1][j] + arrs[i][0] * arrs[k][1] * arrs[j][1];

        dp[i][j] = Math.min(dp[i][j], cost);
      }
    }
  }

  return dp[0][N - 1];
}

console.log(solution(input));
