const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const n = Number(input[0]);
  const tree = new Map();
  const parentMap = new Map();

  for (let i = 1; i <= n; i++) {
    const [node, left, right] = input[i].split(' ').map(Number);
    tree.set(node, { left, right });
    if (left !== -1) parentMap.set(left, node);
    if (right !== -1) parentMap.set(right, node);
  }

  let lastNode = 1;
  while (true) {
    const { right } = tree.get(lastNode);
    if (right === -1) break;
    lastNode = right;
  }

  let pathDist = 0;
  let temp = lastNode;
  while (temp !== 1) {
    temp = parentMap.get(temp);
    pathDist++;
  }

  return (n - 1) * 2 - pathDist;
}

console.log(solution(input));