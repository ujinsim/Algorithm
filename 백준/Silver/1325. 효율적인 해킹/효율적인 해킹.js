const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [n, m] = parseInput[0].split(' ').map(Number);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));
  const tree = new Map();
  let visited = new Array(n + 1).fill(false);

  for (let i = 0; i < nums.length; i++) {
    const [parent, child] = nums[i];

    if (!tree.has(child)) tree.set(child, []);
    tree.get(child).push(parent);
  }

  let count = 0;

  function dfs(node) {
    visited[node] = true;
    count += 1;

    const childs = tree.get(node) || [];
    if (childs) {
      for (let i = 0; i < childs.length; i++) {
        const child = childs[i];
        if (!visited[child]) {
          dfs(child);
        }
      }
    }

    return count;
  }

  let maxCost = 0;
  let maxValues = [];

  for ([key, value] of tree) {
    count = 0;
    visited = new Array(n + 1).fill(false);
    const cost = dfs(key);
    if (cost == maxCost) {
      maxValues.push(key);
    }
    if (cost > maxCost) {
      maxCost = cost;
      maxValues = [];
      maxValues.push(key);
    }
  }

  return maxValues.sort((a, b) => a - b).join(' ');
}

console.log(solution(input));
