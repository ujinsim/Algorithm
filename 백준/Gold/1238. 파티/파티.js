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
    if (this.h.length == 0) return -1;
    if (this.h.length == 1) return this.h.pop();

    let rv = this.h[0];
    this.h[0] = this.h.pop();

    let cur = 0;

    while (cur * 2 + 1 < this.h.length) {
      let l = cur * 2 + 1;
      let r = cur * 2 + 2;
      let s = l;
      if (r < this.h.length && this.h[r][0] < this.h[l][0]) s = r;
      if (this.h[s][0] >= this.h[cur][0]) break;
      [this.h[s], this.h[cur]] = [this.h[cur], this.h[s]];
      cur = s;
    }
    return rv;
  }
}

function solution(input) {
  const parseInput = input.split(`\n`);

  const [N, M, X] = parseInput[0].split(' ').map(Number);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < nums.length; i++) {
    const [s, e, t] = nums[i];
    if (!map1.has(s)) map1.set(s, []);
    map1.get(s).push([e, t]);

    if (!map2.has(e)) map2.set(e, []);
    map2.get(e).push([s, t]);
  }

  function dak(map) {
    const dist = new Array(N + 1).fill(Infinity);
    dist[X] = 0;

    const pd = new MinHeap();
    pd.push([0, X]);

    while (pd.h.length) {
      const [count, node] = pd.pop();

      if (dist[node] < count) continue;

      const neighbors = map.get(node) || [];

      for (let [neighbor, nextW] of neighbors) {
        if (nextW + count < dist[neighbor]) {
          dist[neighbor] = nextW + count;
          pd.push([nextW + count, neighbor]);
        }
      }
    }
    return dist;
  }

  const dist1 = dak(map1);
  const dist2 = dak(map2);

  let result = 0;

  for (let i = 1; i <= N; i++) {
    const max = dist1[i] + dist2[i];

    if (max !== Infinity && max > result) {
      result = max;
    }
  }

  return result;
}

console.log(solution(input));
