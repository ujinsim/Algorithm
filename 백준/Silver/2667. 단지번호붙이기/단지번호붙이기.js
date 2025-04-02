const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const cn = input.slice(1).map((line) => line.split("").map(Number));
const visited = Array.from({ length: n }, () => Array(n).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function dfs(x, y) {
  visited[y][x] = true;
  let space = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < n &&
      ny < n &&
      !visited[ny][nx] &&
      cn[ny][nx] === 1
    ) {
      space += dfs(nx, ny);
    }
  }

  return space;
}

const result = [];

for (let y = 0; y < n; y++) {
  for (let x = 0; x < n; x++) {
    if (!visited[y][x] && cn[y][x] === 1) {
      const area = dfs(x, y);
      result.push(area);
    }
  }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join("\n"));
