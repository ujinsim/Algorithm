const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

function solution(input) {
  const tree = new Map();
  const splitInput = input.split('\n');
  const [n, m] = splitInput[0].split(' ').map(Number);
  const inputArr = splitInput.slice(1).map((a) => a.split(' ').map(Number));

  const want = [];
  const result = [];

  for (let i = 0; i < n - 1; i++) {
    const [parent, child, cost] = inputArr[i];
    if (!tree.has(parent)) tree.set(parent, []);
    if (!tree.has(child)) tree.set(child, []);
    tree.get(parent).push([child, cost]);
    tree.get(child).push([parent, cost]);
  }

  for (let i = n - 1; i < n - 1 + m; i++) {
    want.push(inputArr[i]);
  }

  function countLength(start, end, length) {
    const isVisited = Array(n + 1).fill(false);

    function dfs(cur, acc) {
      if (cur === end) return acc;
      isVisited[cur] = true;
      const neighbors = tree.get(cur) || [];
      for (let i = 0; i < neighbors.length; i++) {
        const [neighbor, cost] = neighbors[i];
        if (!isVisited[neighbor]) {
          const got = dfs(neighbor, acc + cost);
          if (got !== -1) return got;
        }
      }
      return -1;
    }

    return dfs(start, length);
  }

  for (let i = 0; i < want.length; i++) {
    const [start, end] = want[i];
    result.push(countLength(start, end, 0));
  }

  console.log(result.join('\n'));
}

solution(input);
