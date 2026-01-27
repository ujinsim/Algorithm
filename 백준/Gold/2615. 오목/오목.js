const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const map = input
    .trim()
    .split(`\n`)
    .map(a => a.trim().split(/\s+/).map(Number));
  const N = 19;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= N - 5; j++) {
      const stone = map[i][j];
      if (stone === 0) continue;

      let isFive = true;
      for (let k = 0; k < 5; k++) {
        if (map[i][j + k] !== stone) {
          isFive = false;
          break;
        }
      }

      if (isFive) {
        const prevSame = j - 1 >= 0 && map[i][j - 1] === stone;
        const nextSame = j + 5 < N && map[i][j + 5] === stone;
        if (!prevSame && !nextSame) return `${stone}\n${i + 1} ${j + 1}`;
      }
    }
  }

  for (let j = 0; j < N; j++) {
    for (let i = 0; i <= N - 5; i++) {
      const stone = map[i][j];
      if (stone === 0) continue;

      let isFive = true;
      for (let k = 0; k < 5; k++) {
        if (map[i + k][j] !== stone) {
          isFive = false;
          break;
        }
      }

      if (isFive) {
        const prevSame = i - 1 >= 0 && map[i - 1][j] === stone;
        const nextSame = i + 5 < N && map[i + 5][j] === stone;
        if (!prevSame && !nextSame) return `${stone}\n${i + 1} ${j + 1}`;
      }
    }
  }

  for (let j = 0; j <= N - 5; j++) {
    for (let i = 0; i <= N - 5; i++) {
      const stone = map[i][j];
      if (stone === 0) continue;

      let isFive = true;
      for (let k = 0; k < 5; k++) {
        if (map[i + k][j + k] !== stone) {
          isFive = false;
          break;
        }
      }

      if (isFive) {
        const prevSame =
          i - 1 >= 0 && j - 1 >= 0 && map[i - 1][j - 1] === stone;
        const nextSame = i + 5 < N && j + 5 < N && map[i + 5][j + 5] === stone;
        if (!prevSame && !nextSame) return `${stone}\n${i + 1} ${j + 1}`;
      }
    }
  }

  for (let j = 0; j <= N - 5; j++) {
    for (let i = 4; i < N; i++) {
      const stone = map[i][j];
      if (stone === 0) continue;

      let isFive = true;
      for (let k = 0; k < 5; k++) {
        if (map[i - k][j + k] !== stone) {
          isFive = false;
          break;
        }
      }

      if (isFive) {
        const prevSame = i + 1 < N && j - 1 >= 0 && map[i + 1][j - 1] === stone;
        const nextSame = i - 5 >= 0 && j + 5 < N && map[i - 5][j + 5] === stone;
        if (!prevSame && !nextSame) return `${stone}\n${i + 1} ${j + 1}`;
      }
    }
  }

  return '0';
}

console.log(solution(input));
