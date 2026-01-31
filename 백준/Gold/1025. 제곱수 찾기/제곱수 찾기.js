const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function isSquare(n) {
  if (n < 0) return false;
  const root = Math.round(Math.sqrt(n));
  return root * root === n;
}

function solution(input) {
  const lines = input.trim().split('\n');
  const [N, M] = lines[0].split(' ').map(Number);
  const map = lines.slice(1).map(row => row.trim().split('').map(Number));

  let maxSquare = -1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let dx = -N + 1; dx < N; dx++) {
        for (let dy = -M + 1; dy < M; dy++) {
          if (dx == 0 && dy == 0) {
            if (isSquare(map[i][j])) maxSquare = Math.max(map[i][j], maxSquare);
            continue;
          }

          let curX = i;
          let curY = j;
          let curStr = '';

          while (curX >= 0 && curX < N && curY >= 0 && curY < M) {
            curStr += map[curX][curY];
            let num = parseInt(curStr);

            if (isSquare(num)) {
              maxSquare = Math.max(num, maxSquare);
            }

            curX += dx;
            curY += dy;
          }
        }
      }
    }
  }

  return maxSquare;
}

console.log(solution(input));
