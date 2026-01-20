const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let result = 0;

  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const triangle = parseInput.slice(1).map(a => a.split(' ').map(Number));

  for (let i = N - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length - 1; j++) {
      triangle[i - 1][j] = Math.max(
        triangle[i - 1][j] + triangle[i][j],
        triangle[i - 1][j] + triangle[i][j + 1]
      );
    }
  }

  return Number(triangle[0]);
}

console.log(solution(input));
