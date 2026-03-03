const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  // 검없이 가는법 , 검 만나서 최단거리로 가는 법 비교

  const parseInput = input.split(`\n`);
  const [N, M, T] = parseInput[0].split(' ').map(Number);
  const map = parseInput.slice(1).map(a => a.split(' ').map(Number));

  // 용사 0,0
  // 공쥬님 n-1, m-1
  // 검찾았을때, 검안찾았을때

  const queue = [[0, 0, 0]];
  map[0][0] = 1;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let result = Infinity;
  let swordResult = Infinity;
  let normalResult = Infinity;

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    if (x == N - 1 && y == M - 1) {
      swordResult = Math.min(swordResult, count);
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] == 0) {
        map[nx][ny] = 1;
        queue.push([nx, ny, count + 1]);
      }
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] == 2) {
        map[nx][ny] = 1;
        normalResult = Math.min(
          normalResult,
          count + 1 + (N - 1 - nx) + (M - 1 - ny)
        );
      }
    }
  }

  return Math.min(swordResult, normalResult) <= T
    ? Math.min(swordResult, normalResult)
    : 'Fail';
}

console.log(solution(input));
