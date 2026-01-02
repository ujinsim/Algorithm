const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(k) {
  const parseInput = k.split(`\n`);
  const [R, C] = parseInput[0].split(' ').map(Number);
  const map = parseInput.slice(1).map(a => a.split(''));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  let startX = 0;
  let startY = 0;

  const fireDist = Array.from(Array(R), () => Array(C).fill(-1));
  const fireQueue = [];
  const queue = [];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (map[i][j] === 'F') {
        fireQueue.push([i, j]);
        fireDist[i][j] = 0;
      }
      if (map[i][j] == 'J') {
        startX = i;
        startY = j;
      }
    }
  }

  let head = 0;
  while (head < fireQueue.length) {
    const [currX, currY] = fireQueue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = currX + dx[i];
      const ny = currY + dy[i];

      if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
        if (map[nx][ny] !== '#' && fireDist[nx][ny] === -1) {
          fireDist[nx][ny] = fireDist[currX][currY] + 1;
          fireQueue.push([nx, ny]);
        }
      }
    }
  }

  let jihoonDist = Array.from(Array(R), () => Array(C).fill(-1));
  let jihoonHead = 0;
  queue.push([startX, startY]);
  jihoonDist[startX][startY] = 0;

  while (jihoonHead < queue.length) {
    const [currX, currY] = queue[jihoonHead++];

    for (let i = 0; i < 4; i++) {
      const nx = currX + dx[i];
      const ny = currY + dy[i];

      //끝이다
      if (nx < 0 || nx >= R || ny < 0 || ny >= C) {
        return jihoonDist[currX][currY] + 1;
      }

      if (map[nx][ny] === '.' && jihoonDist[nx][ny] === -1) {
        if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
          if (
            fireDist[nx][ny] === -1 ||
            jihoonDist[currX][currY] + 1 < fireDist[nx][ny]
          ) {
            jihoonDist[nx][ny] = jihoonDist[currX][currY] + 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  return 'IMPOSSIBLE';
}

console.log(solution(input));
