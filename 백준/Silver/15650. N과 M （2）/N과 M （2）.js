const fs = require('fs');
const [n, m] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const dist = [];
const result = [];

function dfs(start, depth) {
  if (depth === m) {
    result.push(dist.join(' '));
    return;
  }

  for (let i = start; i <= n; i++) {
    dist.push(i);
    dfs(i + 1, depth + 1); 
    dist.pop();
  }
}

dfs(1, 0);
console.log(result.join('\n'));
