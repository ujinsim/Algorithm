const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  //1은 집이 있는 곳을, 0은 집이 없는 곳

  const parseInput = input.split(`\n`);
  const n = Number(parseInput[0]);
  const arr = parseInput.slice(1).map(a => a.split('').map(Number));
  const visited = Array.from({ length: n }, () => new Array(n).fill(false));

  let dist = 0;
  const results = [];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function dfs(x, y) {
    visited[x][y] = true;
    dist += 1;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        !visited[nx][ny] &&
        arr[nx][ny] == 1
      ) {
        dfs(nx, ny);
      }
    }
    return dist;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dist = 0;
      if (arr[i][j] == 1 && visited[i][j] == false) {
        const result = dfs(i, j);
        results.push(result);
      }
    }
  }

  return results.length + '\n' + results.sort((a, b) => a - b).join('\n');
}

console.log(solution(input));
