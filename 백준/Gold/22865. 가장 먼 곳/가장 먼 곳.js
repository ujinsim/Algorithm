const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

class MinHeap {
  constructor() {
    this.h = [];
  }
  push(v) {
    this.h.push(v);
    let cur = this.h.length - 1;
    while (cur > 0) {
      let p = Math.floor((cur - 1) / 2);
      if (this.h[p][0] <= this.h[cur][0]) break;
      [this.h[p], this.h[cur]] = [this.h[cur], this.h[p]];
      cur = p;
    }
  }
  pop() {
    if (this.h.length === 0) return null;
    if (this.h.length === 1) return this.h.pop();
    const res = this.h[0];
    this.h[0] = this.h.pop();
    let cur = 0;
    while (cur * 2 + 1 < this.h.length) {
      let l = cur * 2 + 1;
      let r = cur * 2 + 2;
      let s = l;
      if (r < this.h.length && this.h[r][0] < this.h[l][0]) s = r;
      if (this.h[cur][0] <= this.h[s][0]) break;
      [this.h[cur], this.h[s]] = [this.h[s], this.h[cur]];
      cur = s;
    }
    return res;
  }
}

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const [A, B, C] = parseInput[1].split(' ').map(Number);
  const M = Number(parseInput[2]);
  const nums = parseInput.slice(3).map(a => a.split(' ').map(Number));
  const graph = new Map();

  for (let i = 0; i < nums.length; i++) {
    const [n, v, c] = nums[i];
    if (!graph.has(n)) graph.set(n, []);
    graph.get(n).push([v, c]);

    if (!graph.has(v)) graph.set(v, []);
    graph.get(v).push([n, c]);
  }

  function getDijkstra(startNode) {
    const dist = new Array(N + 1).fill(Infinity);

    const pd = new MinHeap();
    pd.push([0, startNode]);
    dist[startNode] = 0;

    while (pd.h.length > 0) {
      const popper = pd.pop();

      if (!popper) break;

      const [n, c] = popper;
      if (dist[c] < n) continue;

      const neighbors = graph.get(c) || [];

      for (const neighbor of neighbors) {
        const [node, count] = neighbor;
        if (dist[node] > n + count) {
          dist[node] = n + count;
          pd.push([dist[node], node]);
        }
      }
    }
    return dist;
  }

  const distA = getDijkstra(A);
  const distB = getDijkstra(B);
  const distC = getDijkstra(C);

  let maxMinDist = -1;
  let ansNode = 0;

  for (let i = 1; i <= N; i++) {
    const minDist = Math.min(distA[i], distB[i], distC[i]);
    if (minDist > maxMinDist) {
      maxMinDist = minDist;
      ansNode = i;
    }
  }

  return ansNode;
}

console.log(solution(input));
