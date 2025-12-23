const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim();

const parseInput = input.split(`\n`);
const [n, m, v] = parseInput[0].split(' ').map(Number);
const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));
const tree = new Map();
const visitedDFS = new Array(n + 1).fill(false);
const visitedBFS = new Array(n + 1).fill(false);

const resultDFS = [];
const resultBFS = [];

for (let i = 0; i < nums.length; i++) {
  const [parent, child] = nums[i];
  if (!tree.has(parent)) tree.set(parent, []);
  tree.get(parent).push(child);

  if (!tree.has(child)) tree.set(child, []);
  tree.get(child).push(parent);
}

tree.forEach(value => {
  value.sort((a, b) => a - b);
});

function dfs(node) {
  visitedDFS[node] = true;
  resultDFS.push(node);

  const childs = tree.get(node);
  if (childs) {
    for (let i = 0; i < childs.length; i++) {
      const child = childs[i];
      if (!visitedDFS[child]) {
        dfs(child);
      }
    }
  }
}

dfs(v);

const queue = [];
queue.push(v);
visitedBFS[v] = true;

while (queue.length) {
  const value = queue.shift();
  resultBFS.push(value);

  const childs = tree.get(value);
  if (childs) {
    for (let i = 0; i < childs.length; i++) {
      const child = childs[i];
      if (!visitedBFS[child]) {
        queue.push(child);
        visitedBFS[child] = true;
      }
    }
  }
}

console.log(resultDFS.join(' '));
console.log(resultBFS.join(' '));
