const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  // 배열 안만들고 찾은 즉시 종료

  const [N, r, c] = input.split(' ').map(Number);

  let num = -1;

  let result;

  function recursive(sx, sy, ex, ey, size) {
    if (size < 2) return;

    if (result !== undefined) return;

    if (size == 2) {
      if (sx <= r && r < ex && sy <= c && c < ey) {
        for (let i = sx; i < ex; i++) {
          for (let j = sy; j < ey; j++) {
            num++;

            if (i == r && j == c) {
              result = num;
              break;
            }
          }
        }
      } else {
        num += 4;
      }
      return;
    } else {
      if (!(sx <= r && r < ex && sy <= c && c < ey)) {
        num += size * size;
        return;
      }
    }

    let nextSize = Math.floor(size / 2);

    if (nextSize >= 2) {
      recursive(sx, sy, ex - nextSize, ey - nextSize, nextSize);
      recursive(sx, sy + nextSize, ex - nextSize, ey, nextSize);
      recursive(sx + nextSize, sy, ex, ey - nextSize, nextSize);
      recursive(sx + nextSize, sy + nextSize, ex, ey, nextSize);
    }
  }

  recursive(0, 0, 2 ** N, 2 ** N, 2 ** N);

  return result;
}

console.log(solution(input));
