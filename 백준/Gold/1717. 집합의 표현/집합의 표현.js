const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const p = Array.from({ length: n + 1 }, (_, i) => i);

const find = (a) => {
  if (p[a] !== a) {
    p[a] = find(p[a]);
  }
  return p[a];
};

const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);
  if (rootA !== rootB) {
    if (rootA < rootB) p[rootB] = rootA;
    else p[rootA] = rootB;
  }
};

const result = [];
for (let i = 1; i <= m; i++) {
  const [op, a, b] = input[i].split(' ').map(Number);

  if (op === 0) {
    union(a, b);
  } else {
    result.push(find(a) === find(b) ? 'YES' : 'NO');
  }
}

console.log(result.join('\n'));