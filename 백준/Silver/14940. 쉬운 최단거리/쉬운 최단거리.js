const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const map = input.slice(1).map(line => line.split(" ").map(Number));

const result = Array.from({ length: n }, () => Array(m).fill(-1));
const visited = Array.from({ length: n }, () => Array(m).fill(false));
const queue = [];

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      queue.push([i, j, 0]);
      visited[i][j] = true;
      result[i][j] = 0;
    }
  }
}

while (queue.length) {
  const [x, y, dist] = queue.shift();

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (
      nx >= 0 && ny >= 0 && nx < n && ny < m &&
      !visited[nx][ny] && map[nx][ny] === 1
    ) {
      visited[nx][ny] = true;
      result[nx][ny] = dist + 1;
      queue.push([nx, ny, dist + 1]);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0) result[i][j] = 0;
  }
}

console.log(result.map(row => row.join(" ")).join("\n"));
