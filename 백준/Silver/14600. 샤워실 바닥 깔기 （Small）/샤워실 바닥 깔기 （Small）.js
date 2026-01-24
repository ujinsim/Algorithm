const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const K = Number(parseInput[0]);
  const N = Math.pow(2, K);
  const map = Array.from({ length: N }, () => new Array(N).fill(0));
  const [x, y] = parseInput[1].split(' ').map(Number);

  map[N - y][x - 1] = -1;

  let count = 0;

  function check(r, c, s) {
    // 하나라도 있으면 true

    for (let i = r; i < r + s; i++) {
      for (let j = c; j < c + s; j++) {
        if (map[i][j] !== 0) {
          return true;
        }
      }
    }
    return false;
  }

  function recursive(r, c, s) {
    if (s == 1) return;
    count += 1;

    const ns = s / 2;

    if (!check(r, c, ns)) map[r + ns - 1][c + ns - 1] = count;
    if (!check(r, c + ns, ns)) map[r + ns - 1][c + ns] = count;
    if (!check(r + ns, c, ns)) map[r + ns][c + ns - 1] = count;
    if (!check(r + ns, c + ns, ns)) map[r + ns][c + ns] = count;

    recursive(r, c, ns);
    recursive(r, c + ns, ns);
    recursive(r + ns, c, ns);
    recursive(r + ns, c + ns, ns);
  }

  recursive(0, 0, N);

  return map.map(row => row.join(' ')).join('\n');
}

console.log(solution(input));
