const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.trim().split(`\n`);
  const [M, N, H] = parseInput[0].split(' ').map(Number);
  const rawData = parseInput.slice(1);
  const arr = [];

  for (let i = 0; i < H; i++) {
    const floorData = rawData.slice(i * N, (i + 1) * N);
    const floor = floorData.map(row => row.split(' ').map(Number));
    arr.push(floor);
  }

  const dz = [1, -1, 0, 0, 0, 0];
  const dx = [0, 0, 1, -1, 0, 0];
  const dy = [0, 0, 0, 0, 1, -1];

  let unripeCount = 0;
  const queue = [];

  for (let h = 0; h < H; h++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (arr[h][i][j] === 1) {
          queue.push([h, i, j]);
        } else if (arr[h][i][j] === 0) {
          unripeCount += 1;
        }
      }
    }
  }

  if (unripeCount === 0) return 0;

  let head = 0;
  let result = 0;

  while (queue.length > head) {
    const [z, x, y] = queue[head++];

    for (let i = 0; i < 6; i++) {
      const nz = z + dz[i];
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nz >= 0 &&
        nz < H &&
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        arr[nz][nx][ny] === 0
      ) {
        arr[nz][nx][ny] = arr[z][x][y] + 1;
        result = arr[nz][nx][ny];

        queue.push([nz, nx, ny]);
        unripeCount -= 1;
      }
    }
  }

  if (unripeCount > 0) return -1;

  return result - 1;
}

console.log(solution(input));
