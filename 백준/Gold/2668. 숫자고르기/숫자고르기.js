const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const n = Number(parseInput[0]);
  const nums = parseInput.slice(1).map(a => Number(a));
  const map = new Map();

  for (let i = 1; i <= n; i++) {
    map.set(i, nums[i - 1]);
  }

  let result = [];

  function dfs(start, current, visited) {
    if (visited[current]) {
      if (current == start) {
        result.push(start);
      }
      return;
    }

    visited[current] = true;
    const node = map.get(current);

    dfs(start, node, visited);
  }

  for (let i = 1; i <= n; i++) {
    const visited = new Array(n + 1).fill(false);
    dfs(i, i, visited);
  }

  return result.length + '\n' + result.join('\n');
}

console.log(solution(input));
