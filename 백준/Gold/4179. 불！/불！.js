const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [R, C] = parseInput[0].split(' ').map(Number);
  const arr = parseInput.slice(1).map(a => a.split(''));

  // 불 확장 배열 , 지훈이 이동 배열 만들기

  const fireArr = Array.from({ length: R }, () => new Array(C).fill(Infinity));
  const jiArr = Array.from({ length: R }, () => new Array(C).fill(-1));

  let fQueue = [];
  let jQueue = [];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (arr[i][j] == 'J') {
        jQueue.push([i, j]);
        jiArr[i][j] = 0;
      }

      if (arr[i][j] == 'F') {
        fQueue.push([i, j]);
        fireArr[i][j] = 0;
      }
    }
  }

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  while (fQueue.length > 0) {
    const [x, y] = fQueue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < R &&
        ny >= 0 &&
        ny < C &&
        fireArr[nx][ny] == Infinity &&
        arr[nx][ny] !== '#'
      ) {
        fireArr[nx][ny] = fireArr[x][y] + 1;
        fQueue.push([nx, ny]);
      }
    }
  }

  while (jQueue.length > 0) {
    const [x, y] = jQueue.shift();

    if (x === 0 || x === R - 1 || y === 0 || y === C - 1) {
      return jiArr[x][y] + 1;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < R &&
        ny >= 0 &&
        ny < C &&
        jiArr[nx][ny] == -1 &&
        arr[nx][ny] === '.' &&
        fireArr[nx][ny] > jiArr[x][y] + 1
      ) {
        jiArr[nx][ny] = jiArr[x][y] + 1;
        jQueue.push([nx, ny]);
      }
    }
  }

  return 'IMPOSSIBLE';
}

console.log(solution(input));
