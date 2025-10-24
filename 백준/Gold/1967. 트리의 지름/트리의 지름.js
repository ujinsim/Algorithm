const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(lines[0]);

const tree = new Map();
for (let i = 1; i < lines.length; i++) {
  const [a, b, w] = lines[i].split(' ').map(Number);
  if (!tree.has(a)) tree.set(a, []);
  if (!tree.has(b)) tree.set(b, []);
  tree.get(a).push([b, w]);
  tree.get(b).push([a, w]);
}

if (n === 1) {
  console.log('0');
  process.exit(0);
}

const visited = Array(n + 1).fill(false);

let max = { node: 1, dist: 0 };

function dfs(u, dist) {
  visited[u] = true;
  if (dist > max.dist) max = { node: u, dist };

  const neighbors = tree.get(u) || [];
  for (const [v, w] of neighbors) {
    if (!visited[v]) dfs(v, dist + w);
  }
}

dfs(1, 0);
const far = max.node;

visited.fill(false);
max = { node: far, dist: 0 };
dfs(far, 0);

console.log(String(max.dist));
