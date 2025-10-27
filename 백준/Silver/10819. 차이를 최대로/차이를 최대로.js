const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const visited = new Array(n).fill(false);
const dist = [];
let result = 0;

function backtrack(depth) {
  if (depth === n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum += Math.abs(dist[i] - dist[i + 1]);
    }
    result = Math.max(result, sum);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dist.push(arr[i]);
      backtrack(depth + 1);
      dist.pop();
      visited[i] = false;
    }
  }
}

backtrack(0);
console.log(result);
