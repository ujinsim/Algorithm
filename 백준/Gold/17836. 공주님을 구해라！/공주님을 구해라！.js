const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, M, T] = parseInput[0].split(' ').map(Number);
  const arr = parseInput.slice(1).map(a => a.split(' ').map(Number));

  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  const queue = [];

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  queue.push([0, 0, 0]);
  visited[0][0] = true;

  let gramDist = Infinity;

  while (queue.length) {
    const [x, y, count] = queue.shift();

    if (x == N - 1 && y == M - 1) {
      const finalResult = Math.min(count, gramDist);
      return finalResult <= T ? finalResult : 'Fail';
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
        if (arr[nx][ny] == 0) {
          visited[nx][ny] = true;
          queue.push([nx, ny, count + 1]);
        }
        if (arr[nx][ny] == 2) {
          visited[nx][ny] = true;
          const distance = count + 1 + (N - 1 - nx) + (M - 1 - ny);

          if (distance < gramDist) {
            gramDist = distance;
          }
        }
      }
    }
  }
  return gramDist <= T ? gramDist : 'Fail';
}

console.log(solution(input));
