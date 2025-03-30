const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function groupCount(n, graph) {
  const visited = Array(n + 1).fill(false);
  let count = 0;
  function dfs(node) {
    visited[node] = true;
    for (let next of graph[node]) {
      if (!visited[next]) {
        dfs(next);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
}

const [n, m] = input[0].split(" ").map(Number);
const graphArr = input.slice(1);
const graph = {};

for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  const [u, v] = graphArr[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

console.log(groupCount(n, graph));
