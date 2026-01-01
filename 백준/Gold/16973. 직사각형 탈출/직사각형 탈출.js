const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split('\n');
  const [N, M] = parseInput[0].split(' ').map(Number);
  const arr = parseInput.slice(1, N + 1).map(a => a.split(' ').map(Number));
  let [h, w, sx, sy, fx, fy] = parseInput[parseInput.length - 1]
    .split(' ')
    .map(Number);

  sx -= 1;
  sy -= 1;
  fx -= 1;
  fy -= 1;

  const walls = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 1) walls.push([i, j]);
    }
  }

  let queue = [[sx, sy, 0]];
  let visited = Array.from({ length: N }, () => new Array(M).fill(false));
  visited[sx][sy] = true;

  let head = 0;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length > head) {
    const [x, y, count] = queue[head++];

    if (x === fx && y === fy) return count;

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx + h <= N &&
        ny + w <= M &&
        !visited[nx][ny]
      ) {
        let canMove = true;

        for (let i = 0; i < walls.length; i++) {
          const [wr, wc] = walls[i];

          if (wr >= nx && wr < nx + h && wc >= ny && wc < ny + w) {
            canMove = false;
            break;
          }
        }

        if (canMove) {
          visited[nx][ny] = true;
          queue.push([nx, ny, count + 1]);
        }
      }
    }
  }
  return -1;
}

console.log(solution(input));
