const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, M] = parseInput[0].split(' ').map(Number);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));

  const graph = new Map();

  for (let num of nums) {
    const [a, b] = num;

    if (!graph.has(a)) graph.set(a, []);
    graph.get(a).push(b);

    if (!graph.has(b)) graph.set(b, []);
    graph.get(b).push(a);
  }

  const dists = new Array(N + 1).fill(Infinity);

  dists[1] = 0;
  const queue = [[1, 0]];

  while (queue.length) {
    const [node, count] = queue.shift();

    const neighbors = graph.get(node) || [];

    for (let neighbor of neighbors) {
      if (dists[neighbor] == Infinity) {
        dists[neighbor] = count + 1;
        queue.push([neighbor, count + 1]);
      }
    }
  }

  const max = Math.max(...dists.slice(1));
  const maxList = [];

  for (let i = 0; i < dists.length; i++) {
    if (dists[i] == max) {
      maxList.push(i);
    }
  }

  const result = [maxList.sort((a, b) => a - b)[0], max, maxList.length];

  return result.join(' ');
}

console.log(solution(input));
