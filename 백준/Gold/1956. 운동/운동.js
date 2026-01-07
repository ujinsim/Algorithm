const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [V, E] = parseInput[0].split(' ').map(Number);
  const edges = parseInput.slice(1).map(a => a.split(' ').map(Number));

  const dist = Array.from({ length: V + 1 }, () =>
    new Array(V + 1).fill(Infinity)
  );

  for (let i = 0; i < edges.length; i++) {
    const [n, v, c] = edges[i];

    dist[n][v] = c;
  }

  for (let k = 1; k <= V; k++) {
    for (let i = 1; i <= V; i++) {
      for (let j = 1; j <= V; j++) {
        if (i !== j) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
  }

  let minCycle = Infinity;

  for (let i = 1; i <= V; i++) {
    for (let j = 1; j <= V; j++) {
      if (i !== j) {
        if (dist[i][j] !== Infinity && dist[j][i] !== Infinity) {
          if (dist[i][j] + dist[j][i] < minCycle) {
            minCycle = dist[i][j] + dist[j][i];
          }
        }
      }
    }
  }

  return minCycle == Infinity ? -1 : minCycle;
}

console.log(solution(input));
