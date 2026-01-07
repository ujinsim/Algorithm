const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

class MinHeap {
  constructor() {
    this.h = [];
  }

  push(value) {
    this.h.push(value);
    let curr = this.h.length - 1;
    while (curr > 0) {
      let p = Math.floor((curr - 1) / 2);
      if (this.h[p][0] <= this.h[curr][0]) break;
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
      let l = curr * 2 + 1,
        r = curr * 2 + 2,
        s = l;
      if (r < this.h.length && this.h[r][0] < this.h[l][0]) s = r;
      if (this.h[curr][0] <= this.h[s][0]) break;
      [this.h[curr], this.h[s]] = [this.h[s], this.h[curr]];
      curr = s;
    }
    return rv;
  }
}

function solution(input) {
  const lines = input.trim().split('\n');
  const [N, W] = lines[0].split(' ').map(Number);
  const M = Number(lines[1]);

  const nodes = lines.slice(2, 2 + N).map(v => v.split(' ').map(Number));
  const connections = lines.slice(2 + N).map(v => v.split(' ').map(Number));

  function getDistance(a, b) {
    return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
  }

  const isConnected = Array.from({ length: N + 1 }, () => new Set());

  for (let i = 0; i < connections.length; i++) {
    const [n, m] = connections[i];

    isConnected[n].add(m);
    isConnected[m].add(n);
  }

  const map = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i <= N; i++) {
    for (let j = 1 + i; j <= N; j++) {
      if (isConnected[i].has(j)) {
        map[i].push([j, 0]);
        map[j].push([i, 0]);
      } else {
        const dist = getDistance(nodes[i - 1], nodes[j - 1]);
        if (dist <= M) {
          map[i].push([j, dist]);
          map[j].push([i, dist]);
        }
      }
    }
  }

  const dist = new Array(N + 1).fill(Infinity);
  const pd = new MinHeap();
  dist[1] = 0;
  pd.push([0, 1]);

  while (pd.h.length) {
    const [cost, node] = pd.pop();

    if (dist[node] < cost) continue;

    const neighbors = map[node] || [];

    for (let i = 0; i < neighbors.length; i++) {
      const [n, v] = neighbors[i];

      if (dist[n] > cost + v) {
        dist[n] = cost + v;
        pd.push([dist[n], n]);
      }
    }
  }

  return Math.floor(dist[N] * 1000);
}

console.log(solution(input));
