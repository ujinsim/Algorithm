const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

class MinHeap {
  constructor() {
    this.h = [];
  }

  push(v) {
    this.h.push(v);
    let curr = this.h.length - 1;

    while (curr > 0) {
      let p = Math.floor((curr - 1) / 2);
      if (this.h[p][0] < this.h[curr][0]) break;
      [this.h[p], this.h[curr]] = [this.h[curr], this.h[p]];
      curr = p;
    }
  }

  pop() {
    if (this.h.length === 0) return null;
    if (this.h.length === 1) return this.h.pop();

    const rv = this.h[0];
    this.h[0] = this.h.pop();
    let curr = 0;

    while (curr * 2 + 1 < this.h.length) {
      let l = curr * 2 + 1;
      let r = curr * 2 + 2;
      let s = l;

      if (r < this.h.length && this.h[r][0] < this.h[l][0]) s = r;
      if (this.h[curr][0] < this.h[s][0]) break;
      [this.h[s], this.h[curr]] = [this.h[curr], this.h[s]];
      curr = s;
    }
    return rv;
  }
}

function solution(input) {
  const parseInput = input.split(`\n`);

  const [N, M, X] = parseInput[0].split(' ').map(Number);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));

  const tree1 = new Map();
  const tree2 = new Map();

  for (let i = 0; i < nums.length; i++) {
    const [n, v, c] = nums[i];

    if (!tree1.has(n)) tree1.set(n, []);
    tree1.get(n).push([v, c]);

    if (!tree2.has(v)) tree2.set(v, []);
    tree2.get(v).push([n, c]);
  }

  function maxTime(tree) {
    const dist = new Array(N + 1).fill(Infinity);
    const pd = new MinHeap();
    dist[X] = 0;
    pd.push([0, X]);

    while (pd.h.length > 0) {
      const [count, node] = pd.pop();

      if (dist[node] < count) continue;

      const neighbors = tree.get(node) || [];

      for (let [nextNode, nextCost] of neighbors) {
        if (dist[nextNode] > count + nextCost) {
          dist[nextNode] = count + nextCost;
          pd.push([dist[nextNode], nextNode]);
        }
      }
    }

    return dist;
  }

  const result1 = maxTime(tree1);
  const result2 = maxTime(tree2);

  let maxDistance = 0;

  for (let i = 1; i <= N; i++) {
    const sum = result1[i] + result2[i];
    if (sum !== Infinity) {
      maxDistance = Math.max(maxDistance, sum);
    }
  }

  return maxDistance;
}

console.log(solution(input));
