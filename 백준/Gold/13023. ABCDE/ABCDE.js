const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);

  const [N, M] = parseInput[0].split(' ').map(Number);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));

  const tree = new Map();
  const visited = new Array(N + 1).fill(false);

  for (let i = 0; i < nums.length; i++) {
    const [parent, child] = nums[i];

    if (!tree.has(parent)) tree.set(parent, []);
    tree.get(parent).push(child);

    if (!tree.has(child)) tree.set(child, []);
    tree.get(child).push(parent);
  }

  let answer = 0;

  function dfs(node, depth) {
    if (answer === 1) return;

    if (depth == 4) {
      answer = 1;
      return;
    }

    visited[node] = true;

    const neighbors = tree.get(node) || [];

    for (let key of neighbors) {
      if (!visited[key]) {
        dfs(key, depth + 1);
      }
    }
    visited[node] = false;
  }
  for (let i = 0; i < N; i++) {
    dfs(i, 0);
    if (answer === 1) break;
  }

  return answer;
}

console.log(solution(input));
