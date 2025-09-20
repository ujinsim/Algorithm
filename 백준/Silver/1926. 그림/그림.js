const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let idx = 0;
const n = data[idx++], m = data[idx++];
const board = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => data[idx++])
);

const visited = Array.from({ length: n }, () => Array(m).fill(false));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const inRange = (x, y) => x >= 0 && x < n && y >= 0 && y < m;

function bfs(sx, sy) {
  const q = [[sx, sy]];
  let head = 0;
  visited[sx][sy] = true;
  let area = 1;

  while (head < q.length) {
    const [x, y] = q[head++];
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (inRange(nx, ny) && !visited[nx][ny] && board[nx][ny] === 1) {
        visited[nx][ny] = true;
        q.push([nx, ny]);
        area++;
      }
    }
  }
  return area;
}

let count = 0;
let maxArea = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      const a = bfs(i, j);
      count++;
      if (a > maxArea) maxArea = a;
    }
  }
}

console.log(count + '\n' + maxArea);
