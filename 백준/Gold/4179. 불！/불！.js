const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [R, C] = parseInput[0].split(' ').map(Number);
  const map = parseInput.slice(1).map(a => a.split(''));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const fireArr = Array.from({ length: R }, () => new Array(C).fill(Infinity));
  const fireQueue = [];
  const fireVisited = Array.from({ length: R }, () => new Array(C).fill(false));

  const jihoonArr = Array.from({ length: R }, () => new Array(C).fill(-1));
  const jihoonQueue = [];
  const jihoonVisited = Array.from({ length: R }, () =>
    new Array(C).fill(false)
  );
  let jihoonHead = 0;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (map[i][j] == 'F') {
        fireArr[i][j] = 0;
        fireVisited[i][j] = true;
        fireQueue.push([i, j]);
      }
      if (map[i][j] == 'J') {
        jihoonVisited[i][j] = true;
        jihoonQueue.push([i, j]);
        jihoonArr[i][j] = 0;
      }
    }
  }

  let fireHead = 0;
  while (fireQueue.length > fireHead) {
    const [x, y] = fireQueue[fireHead++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < R &&
        ny >= 0 &&
        ny < C &&
        map[nx][ny] !== '#' &&
        !fireVisited[nx][ny]
      ) {
        fireVisited[nx][ny] = true;
        fireArr[nx][ny] = fireArr[x][y] + 1;
        fireQueue.push([nx, ny]);
      }
    }
  }

  while (jihoonQueue.length > jihoonHead) {
    const [x, y] = jihoonQueue[jihoonHead++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= R || ny < 0 || ny >= C) {
        return jihoonArr[x][y] + 1;
      }

      if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
        if (
          jihoonArr[x][y] + 1 < fireArr[nx][ny] &&
          map[nx][ny] !== '#' &&
          map[nx][ny] !== 'F' &&
          !jihoonVisited[nx][ny]
        ) {
          jihoonVisited[nx][ny] = true;
          jihoonArr[nx][ny] = jihoonArr[x][y] + 1;
          jihoonQueue.push([nx, ny]);
        }
      }
    }
  }

  return 'IMPOSSIBLE';
}

console.log(solution(input));
