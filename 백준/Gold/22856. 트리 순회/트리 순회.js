const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  if (!parseInput[0]) return 0;

  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const [node, left, right] = nums[i];
    map.set(node, { left, right });
  }

  let lastNode = 1;
  let depth = 0;
  while (true) {
    const node = map.get(lastNode);
    if (!node || node.right === -1) break;
    lastNode = node.right;
    depth++;
  }

  let count = 0;

  function dfs(node) {
    const { left, right } = map.get(node);

    if (left !== -1) {
      count += 1;
      dfs(left);
      count += 1;
    }

    if (right !== -1) {
      count += 1;
      dfs(right);
      count += 1;
    }
  }
  dfs(1);

  return count - depth;
}

console.log(solution(input));
