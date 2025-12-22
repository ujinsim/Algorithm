const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, q] = input[0].split(' ').map(Number);

const logs = [];
for (let i = 1; i <= n; i++) {
  const [x1, x2, y] = input[i].split(' ').map(Number);
  logs.push({ id: i, x1, x2 });
}

logs.sort((a, b) => a.x1 - b.x1);

const parent = Array.from({ length: n + 1 }, (_, i) => i);

function find(x) {
  if (parent[x] === x) return x;
  parent[x] = find(parent[x]);
  return parent[x];
}

function union(a, b) {
  const rootA = find(a);
  const rootB = find(b);
  if (rootA !== rootB) {
    parent[rootB] = rootA;
  }
}

let currentRoot = logs[0].id;
let maxRight = logs[0].x2;

for (let i = 1; i < n; i++) {
  const { id, x1, x2 } = logs[i];

  if (x1 <= maxRight) {
    union(currentRoot, id);
    maxRight = Math.max(maxRight, x2);
  } else {
    currentRoot = id;
    maxRight = x2;
  }
}

const result = [];
for (let i = n + 1; i < n + 1 + q; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  result.push(find(a) === find(b) ? 1 : 0);
}

console.log(result.join('\n'));