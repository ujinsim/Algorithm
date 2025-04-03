const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = Number(input[0]);
const lines = Number(input[1]);

const cons = input.splice(2);
const graph = {};

for (let i = 1; i <= num; i++) {
  graph[i] = [];
}

for (let i = 0; i < lines; i++) {
  const [v, w] = cons[i].split(" ").map(Number);

  graph[v].push(w);
  graph[w].push(v);
}
const visited = Array(num + 1).fill(false);
function dfs(node) {
  visited[node] = true;
  let count = 1;

  for (let next of graph[node]) {
    if (!visited[next]) {
      count += dfs(next);
    }
  }

  return count;
}

console.log(dfs(1) - 1);
