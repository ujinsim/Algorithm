
const fs = require('fs');
const parsedInput = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(parsedInput[0]);
const [p, b] = parsedInput[1].split(' ').map(Number);
const m = Number(parsedInput[2]);
const arrs = parsedInput.slice(3).map((a) => a.split(' ').map(Number));

const tree = new Map();
for (let i = 0; i < m; i++) {
  const [u, v] = arrs[i];
  if (!tree.has(u)) tree.set(u, []);
  if (!tree.has(v)) tree.set(v, []);
  tree.get(u).push(v);
  tree.get(v).push(u);
}

const visited = new Array(n + 1).fill(false);
let answer = -1;

function dfs(node, depth) {
  visited[node] = true;

  if (node === b) {
    answer = depth;
    return;
  }

  const neighbors = tree.get(node) || [];
  for (const next of neighbors) {
    if (!visited[next]) {
      dfs(next, depth + 1);
    }
  }
}

dfs(p, 0);
console.log(answer);
