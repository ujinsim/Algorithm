
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const board = input.slice(1).map(line => line.trim().split('').map(Number));
const visited = Array.from({ length: n }, () => Array(n).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const inRange = (x, y) => x >= 0 && y >= 0 && x < n && y < n;

function dfs(x, y) {
  visited[x][y] = true;
  let size = 1;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (
      inRange(nx, ny) &&
      !visited[nx][ny] &&
      board[nx][ny] === 1
    ) {
      size += dfs(nx, ny);
    }
  }
  return size;
}

const sizes = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      sizes.push(dfs(i, j));
    }
  }
}

sizes.sort((a, b) => a - b);
console.log(sizes.length);
console.log(sizes.join('\n'));
