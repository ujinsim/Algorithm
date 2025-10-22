const fs = require('fs');
const parsedInput = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(parsedInput[0]);
const [p, b] = parsedInput[1].split(' ').map(Number);
const m = Number(parsedInput[2]);
const arrs = parsedInput.slice(3).map((a) => a.split(' ').map(Number));

const tree = new Map();
const isVisited = new Array(n + 1).fill(false);
const dist = new Array(n + 1).fill(0);

for (let i = 0; i < arrs.length; i++) {
  const [u, v] = arrs[i];
  if (!tree.has(u)) tree.set(u, []);
  if (!tree.has(v)) tree.set(v, []);
  tree.get(u).push(v);
  tree.get(v).push(u);
}

const queue = [p];
let head = 0;
isVisited[p] = true;
dist[p] = 0;

let answer = -1;

while (head < queue.length) {
  const value = queue[head++];

  if (value === b) {
    answer = dist[value];
    break;
  }

  const neighbors = tree.get(value) || [];
  for (let i = 0; i < neighbors.length; i++) {
    const next = neighbors[i];
    if (!isVisited[next]) {
      isVisited[next] = true;
      dist[next] = dist[value] + 1;
      queue.push(next);
    }
  }
}

console.log(answer);
