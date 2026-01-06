const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  //     1. 1번에서 가중치 제일 높은 노드 찾기
  // 2. 그 노드와 가중치 가장 긴 노드 찾기

  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));
  const tree = new Map();

  for (let i = 0; i < nums.length; i++) {
    const [n, c, d] = nums[i];

    if (!tree.has(n)) tree.set(n, []);
    tree.get(n).push([c, d]);

    if (!tree.has(c)) tree.set(c, []);
    tree.get(c).push([n, d]);
  }

  let maxCount = 0;
  let maxNode = 0;

  function dfs(node, visited, count) {
    if (count > maxCount) {
      maxCount = count;
      maxNode = node;
    }

    const neighbors = tree.get(node) || [];

    for (let i = 0; i < neighbors.length; i++) {
      const [newNode, newCount] = neighbors[i];

      if (!visited[newNode]) {
        visited[newNode] = true;
        dfs(newNode, visited, count + newCount);
      }

    }

    return { maxCount, maxNode };
  }

  const firstVisited = new Array(N + 1).fill(false);
  firstVisited[1] = true;
  const { maxNode: firstNodeResult } = dfs(1, firstVisited, 0);

  maxCount = 0;
  maxNode = 0;
  const secondVisited = new Array(N + 1).fill(false);
  secondVisited[firstNodeResult] = true;

  const { maxCount: resultCount, maxNode: resultNode } = dfs(
    firstNodeResult,
    secondVisited,
    0
  );

  return resultCount;
}

console.log(solution(input));
