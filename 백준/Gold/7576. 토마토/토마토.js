const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [M, N] = parseInput[0].split(' ').map(Number);
  const arr = parseInput.slice(1).map(a => a.split(' ').map(Number));

  // 며칠이 지나면 토마토들이 모두 익는지
  // 정수 1은 익은 토마토, 정수 0은 익지 않은 토마토, 정수 -1은 토마토가 들어있지 않은 칸
  // 애초에 0이 없으면 -> 0, 다 돌았는데 0 있으면 -> -1

  let zeroCount = 0;
  let oneXY = [];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  let unripeCount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] == 0) {
        unripeCount += 1;
      }
      if (arr[i][j] == 1) {
        oneXY.push([i, j]);
        visited[i][j] = true;
      }
    }
  }

  if (unripeCount === 0) return 0;
  let head = 0;
  let result = 0;

  while (oneXY.length > head) {
    const [x, y] = oneXY[head++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        !visited[nx][ny] &&
        arr[nx][ny] == 0
      ) {
        arr[nx][ny] = 1 + arr[x][y];
        visited[nx][ny] = true;
        result = arr[nx][ny];
        oneXY.push([nx, ny]);
        unripeCount -= 1;
      }
    }
  }

  if (unripeCount > 0) return -1;

  return result - 1;
}

console.log(solution(input));
