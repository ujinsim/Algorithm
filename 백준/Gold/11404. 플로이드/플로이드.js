const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const M = Number(parseInput[1]);
  const edges = parseInput.slice(2).map(a => a.split(' ').map(Number));

  const dists = Array.from({ length: N + 1 }, () =>
    new Array(N + 1).fill(Infinity)
  );

  for (let i = 0; i < edges.length; i++) {
    const [n, v, c] = edges[i];
    dists[n][v] = Math.min(dists[n][v], c);
  }

  for (let k = 1; k <= N; k++) {
    for (let i = 0; i <= N; i++) {
      for (let j = 0; j <= N; j++) {
        if (i !== j) {
          if (dists[i][k] + dists[k][j] < dists[i][j]) {
            dists[i][j] = dists[i][k] + dists[k][j];
          }
        }
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (dists[i][j] == Infinity) {
        dists[i][j] = 0;
      }
    }
  }

  const result = dists.slice(1).map(row => row.slice(1));

  return result.map(row => row.join(' ')).join(`\n`);
}

console.log(solution(input));
