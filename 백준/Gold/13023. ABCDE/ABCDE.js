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

  let hasFour = false;

  function backtrack(curr, depth) {
    if (depth == 4) {
      hasFour = true;
      return;
    }

    const neighbors = tree.get(curr) || [];

    for (let node of neighbors) {
      if (!visited[node]) {
        visited[node] = true;
        backtrack(node, depth + 1);
        visited[node] = false;
      }
    }
  }

  for (let [key, neighbors] of tree) {
    visited[key] = true;
    backtrack(key, 0);

    if (hasFour) {
      return 1;
    }
    visited[key] = false;
  }

  return 0;
}

console.log(solution(input));
