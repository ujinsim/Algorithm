const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, M] = parseInput[0].split(' ').map(Number);
  const map = parseInput.slice(1, 1 + N).map(a => a.split(' ').map(Number));

  const questions = parseInput.slice(2 + N).map(a => a.split(' ').map(Number));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const top = i > 0 ? map[i - 1][j] : 0;
      const left = j > 0 ? map[i][j - 1] : 0;
      const topLeft = i > 0 && j > 0 ? map[i - 1][j - 1] : 0;

      if (i > 0 || j > 0) {
        if (i > 0 && j > 0) {
          map[i][j] += top + left - topLeft;
        } else if (i > 0) {
          map[i][j] += top;
        } else if (j > 0) {
          map[i][j] += left;
        }
      }
    }
  }

  const result = [];

  for (let i = 0; i < questions.length; i++) {
    let [x1, y1, x2, y2] = questions[i];

    x1 -= 1;
    y1 -= 1;
    x2 -= 1;
    y2 -= 1;

    let total = map[x2][y2];

    if (x1 > 0) total -= map[x1 - 1][y2];
    if (y1 > 0) total -= map[x2][y1 - 1];
    if (x1 > 0 && y1 > 0) total += map[x1 - 1][y1 - 1];

    result.push(total);
    // 아니면 겹치는 부분 빼주기
  }

  return result.join(`\n`);
}

console.log(solution(input));
