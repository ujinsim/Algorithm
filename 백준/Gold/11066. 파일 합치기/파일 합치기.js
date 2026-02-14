const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const lines = input.split('\n');
  const TC = Number(lines[0]);
  let currentLine = 1;
  const results = [];

  for (let t = 0; t < TC; t++) {
    const N = Number(lines[currentLine]);
    const data = lines[currentLine + 1].split(' ').map(Number);

    const sum = new Array(N + 1).fill(0);

    for (let i = 0; i < data.length; i++) {
      sum[i + 1] = sum[i] + data[i];
    }

    const dp = Array.from({ length: N }, () => new Array(N).fill(0));

    for (let gap = 1; gap < N; gap++) {
      for (let i = 0; i < N - gap; i++) {
        const j = gap + i;
        dp[i][j] = Infinity;

        for (let k = i; k < j; k++) {
          const cost = dp[i][k] + dp[k + 1][j] + (sum[j + 1] - sum[i]);

          dp[i][j] = Math.min(dp[i][j], cost);
        }
      }
    }

    results.push(dp[0][N - 1]);
    currentLine += 2;
  }

  return results.join('\n');
}

console.log(solution(input));
