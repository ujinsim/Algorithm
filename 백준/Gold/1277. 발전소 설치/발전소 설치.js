const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

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
  for (const [n, m] of connections) {
    isConnected[n].add(m);
    isConnected[m].add(n);
  }

  const adj = Array.from({ length: N + 1 }, () => []);
  for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j <= N; j++) {
      if (isConnected[i].has(j)) {
        adj[i].push([j, 0]);
        adj[j].push([i, 0]);
      } else {
        const d = getDistance(nodes[i - 1], nodes[j - 1]);
        if (d <= M) {
          adj[i].push([j, d]);
          adj[j].push([i, d]);
        }
      }
    }
  }

  const dist = new Array(N + 1).fill(Infinity);
  const visited = new Array(N + 1).fill(false);
  dist[1] = 0;

  for (let i = 0; i < N; i++) {
    let currNode = -1;
    let minCost = Infinity;

    for (let j = 1; j <= N; j++) {
      if (!visited[j] && dist[j] < minCost) {
        minCost = dist[j];
        currNode = j;
      }
    }

    if (currNode === -1) break;
    visited[currNode] = true;

    for (const [nextNode, weight] of adj[currNode]) {
      if (dist[nextNode] > dist[currNode] + weight) {
        dist[nextNode] = dist[currNode] + weight;
      }
    }
  }

  return dist[N] === Infinity ? -1 : Math.floor(dist[N] * 1000);
}
console.log(solution(input));
