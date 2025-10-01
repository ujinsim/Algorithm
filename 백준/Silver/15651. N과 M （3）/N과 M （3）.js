const fs = require('fs');
const [n, m] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const dist = [];
const result = [];

function dfs(depth) {
  if (depth === m) {
    result.push(dist.join(' '));
    return;
  }

  for (let i = 1; i <= n; i++) {
    dist.push(i);
    dfs(depth + 1);
    dist.pop();
  }
}

dfs(0);
console.log(result.join('\n'));
