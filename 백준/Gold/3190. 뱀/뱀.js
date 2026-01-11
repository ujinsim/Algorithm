const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const lines = input.trim().split('\n');
  let cursor = 0;

  const n = Number(lines[cursor++]);
  const k = Number(lines[cursor++]);

  const map = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let i = 0; i < k; i++) {
    const [r, c] = lines[cursor++].split(' ').map(Number);
    map[r - 1][c - 1] = 2;
  }

  const l = Number(lines[cursor++]);
  const directions = {};
  for (let i = 0; i < l; i++) {
    const [t, d] = lines[cursor++].split(' ');
    directions[Number(t)] = d;
  }

  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];

  let time = 0;
  let d = 0;
  let headX = 0,
    headY = 0;
  let snake = [[0, 0]];
  map[0][0] = 1;

  while (true) {
    time += 1;

    headX = headX + dr[d];
    headY = headY + dc[d];

    if (
      headX < 0 ||
      headX >= n ||
      headY < 0 ||
      headY >= n ||
      map[headX][headY] == 1
    ) {
      return time;
    }

    if (map[headX][headY] == 2) {
      map[headX][headY] = 1;
      snake.push([headX, headY]);
    } else {
      const [tailX, tailY] = snake.shift();
      map[tailX][tailY] = 0;
      map[headX][headY] = 1;
      snake.push([headX, headY]);
    }

    if (directions[time]) {
      if (directions[time] == 'D') {
        d = (d + 1) % 4;
      } else {
        d = (d + 3) % 4;
      }
    }
  }
}

console.log(solution(input));
