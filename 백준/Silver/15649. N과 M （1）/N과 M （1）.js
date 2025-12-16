const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();


const [n, m] = input.split(" ").map(Number);

const dist = [];
const result = [];
const visited = new Array(n).fill(false);

function backtrack(depth) {
  if (depth === m) {
    result.push(dist.join(" ")); 
    return;
  }
  
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dist.push(i + 1);
      backtrack(depth + 1);
      dist.pop();
      visited[i] = false; 
    }
  }
}

backtrack(0);

console.log(result.join("\n"));