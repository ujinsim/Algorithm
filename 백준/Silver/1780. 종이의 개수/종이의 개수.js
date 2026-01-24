const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const map = parseInput.slice(1).map(a => a.split(' ').map(Number));

  let minusOne = 0;
  let zero = 0;
  let one = 0;

  function division(x, y, w) {
    const n = w / 3;

    let mo = 0;
    let z = 0;
    let o = 0;

    for (let i = x; i < x + w; i++) {
      for (let j = y; j < y + w; j++) {
        if (map[i][j] == -1) {
          mo += 1;
        }
        if (map[i][j] == 0) {
          z += 1;
        }
        if (map[i][j] == 1) {
          o += 1;
        }
      }
    }

    if (mo == w * w) {
      minusOne += 1;
    } else if (z == w * w) {
      zero += 1;
    } else if (o == w * w) {
      one += 1;
    } else {
      division(x, y, n);
      division(x + n, y, n);
      division(x + 2 * n, y, n);

      division(x + n, y + n, n);
      division(x, y + n, n);
      division(x, y + 2 * n, n);

      division(x + n, y + 2 * n, n);
      division(x + 2 * n, y + n, n);
      division(x + 2 * n, y + 2 * n, n);
    }
  }

  division(0, 0, N);

  const result = [minusOne, zero, one];

  return result.join(`\n`);
}

console.log(solution(input));
