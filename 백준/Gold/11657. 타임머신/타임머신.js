const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

function solution(input) {
  const lines = input.split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const arr = lines.slice(1, 1 + m).map(s => s.split(' ').map(Number));

  const graph = new Map();
  const costs = {};
  const prev = {};

  for (let i = 1; i <= n; i++) graph.set(i, []);

  for (const [u, v, w] of arr) {
    graph.get(u).push([v, w]);
  }

  for (let i = 1; i <= n; i++) {
    costs[i] = Infinity;
    prev[i] = null;
  }
  costs[1] = 0;

  for (let i = 0; i < n - 1; i++) {
    let updated = false;
    for (const [node, neighbors] of graph) {
      if (costs[node] === Infinity) continue; 
      for (const [neighbor, w] of neighbors) {
        if (costs[node] + w < costs[neighbor]) {
          costs[neighbor] = costs[node] + w;
          prev[neighbor] = node;
          updated = true;
        }
      }
    }
    if (!updated) break; 
  }

  for (const [node, neighbors] of graph) {
    if (costs[node] === Infinity) continue;
    for (const [neighbor, w] of neighbors) {
      if (costs[node] + w < costs[neighbor]) {
        return '-1';
      }
    }
  }

  const out = [];
  for (let i = 2; i <= n; i++) out.push(costs[i] === Infinity ? -1 : costs[i]);
  return out.join('\n');
}

console.log(solution(input));
