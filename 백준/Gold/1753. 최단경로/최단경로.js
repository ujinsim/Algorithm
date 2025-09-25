const fs = require('fs');
const tokens = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let idx = 0;
const V = tokens[idx++];    
const E = tokens[idx++];      
const K = tokens[idx++];    

const graph = Array.from({ length: V + 1 }, () => []);
for (let i = 0; i < E; i++) {
  const u = tokens[idx++], v = tokens[idx++], w = tokens[idx++];
  graph[u].push([v, w]);
}

class MinHeap {
  constructor() { this.h = []; }
  size() { return this.h.length; }
  push(x) {
    const h = this.h; h.push(x);
    let i = h.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (h[p][0] <= h[i][0]) break;
      [h[p], h[i]] = [h[i], h[p]];
      i = p;
    }
  }
  pop() {
    const h = this.h;
    if (h.length === 0) return undefined;
    if (h.length === 1) return h.pop();
    const top = h[0];
    h[0] = h.pop();
    let i = 0;
    while (true) {
      let l = i * 2 + 1, r = l + 1, s = i;
      if (l < h.length && h[l][0] < h[s][0]) s = l;
      if (r < h.length && h[r][0] < h[s][0]) s = r;
      if (s === i) break;
      [h[i], h[s]] = [h[s], h[i]];
      i = s;
    }
    return top;
  }
}

const dist = Array(V + 1).fill(Infinity);
dist[K] = 0;

const heap = new MinHeap();
heap.push([0, K]); 

while (heap.size()) {
  const [d, u] = heap.pop();
  if (d !== dist[u]) continue;

  for (const [v, w] of graph[u]) {
    const nd = d + w;
    if (nd < dist[v]) {
      dist[v] = nd;
      heap.push([nd, v]);
    }
  }
}

let out = '';
for (let i = 1; i <= V; i++) {
  out += (dist[i] === Infinity ? 'INF' : dist[i]) + '\n';
}
process.stdout.write(out);
