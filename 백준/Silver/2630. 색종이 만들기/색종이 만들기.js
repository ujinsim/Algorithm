const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let blueCount = 0;
  let whiteCount = 0;

  const parseInput = input.split(`\n`);
  const n = Number(parseInput[0]);
  const arr = parseInput.slice(1).map(a => a.split(' ').map(Number));
  const visited = Array.from({ length: n }, () => new Array(n).fill(false));

  function recursive(sx, sy, ex, ey) {
    let bc = 0;
    let wc = 0;

    for (let i = sx; i < ex; i++) {
      for (let j = sy; j < ey; j++) {
        if (arr[i][j] == 1) {
          bc += 1;
        }
        if (arr[i][j] == 0) {
          wc += 1;
        }
      }
    }

    if (bc == 0) {
      whiteCount += 1;
      return;
    }

    if (wc == 0) {
      blueCount += 1;
      return;
    }

    const midX = Math.floor((sx + ex) / 2);
    const midY = Math.floor((sy + ey) / 2);

    recursive(sx, sy, midX, midY);
    recursive(sx, midY, midX, ey);
    recursive(midX, sy, ex, midY);
    recursive(midX, midY, ex, ey);
  }

  recursive(0, 0, n, n);

  return whiteCount + `\n` + blueCount;
}

console.log(solution(input));
