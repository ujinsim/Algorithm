const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n, k] = input[0].split(" ").map(Number);
const cdn = input.slice(1, k + 1).map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: m }, () => Array(n).fill(false));

//  색칠
for (let i = 0; i < k; i++) {
  const [x1, y1, x2, y2] = cdn[i];
  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      visited[y][x] = true;
    }
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function dfs(x, y) {
  visited[y][x] = true;
  let area = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < n && ny < m && !visited[ny][nx]) {
      area += dfs(nx, ny);
    }
  }

  return area;
}

const result = [];

for (let y = 0; y < m; y++) {
  for (let x = 0; x < n; x++) {
    if (!visited[y][x]) {
      const area = dfs(x, y);
      result.push(area);
    }
  }
}

result.sort((a, b) => a - b);
console.log(result.length);
console.log(result.join(" "));
