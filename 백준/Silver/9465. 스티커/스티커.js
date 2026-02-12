const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.trim().split('\n');
  const TC = Number(parseInput[0]);

  let currentLine = 1;
  const result = [];

  for (let t = 0; t < TC; t++) {
    const n = Number(parseInput[currentLine]);

    const row1 = parseInput[currentLine + 1].split(' ').map(Number);
    const row2 = parseInput[currentLine + 2].split(' ').map(Number);

    currentLine += 3;

    const dp = Array.from({ length: 2 }, () => new Array(n).fill(Infinity));

    dp[0][0] = row1[0];
    dp[1][0] = row2[0];

    if (row1.length >= 1) {
      dp[0][1] = dp[1][0] + row1[1];
      dp[1][1] = dp[0][0] + row2[1];
    }

    // 두개전에 위랑 하나전의 아래와 비교

    if (row1.length >= 2) {
      for (let i = 2; i < row1.length; i++) {
        dp[0][i] =
          Math.max(dp[1][i - 1], Math.max(dp[1][i - 2], dp[0][i - 2])) +
          row1[i];
        dp[1][i] =
          Math.max(dp[0][i - 1], Math.max(dp[1][i - 2], dp[0][i - 2])) +
          row2[i];
      }
    }

    result.push(Math.max(dp[0][row1.length - 1], dp[1][row1.length - 1]));
  }

  return result.join(`\n`);
}

console.log(solution(input));
