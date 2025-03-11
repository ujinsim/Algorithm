const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0], 10);
const matrix = input.slice(1).map((line) => line.split("").map(Number));
const visited = Array.from({ length: n }, () => Array(n).fill(false));

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function dfs(x, y) {
  let count = 1;
  visited[x][y] = true;

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
      if (matrix[nx][ny] === 1 && !visited[nx][ny]) {
        count += dfs(nx, ny);
      }
    }
  }

  return count;
}

const result = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] === 1 && !visited[i][j]) {
      result.push(dfs(i, j));
    }
  }
}

result.sort((a, b) => a - b);

console.log(result.length);
console.log(result.join("\n"));
