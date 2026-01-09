const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const lines = input.split('\n');
  let lineIdx = 0;
  const TC = Number(lines[lineIdx++]);
  const finalResult = [];

  for (let t = 0; t < TC; t++) {
    const [N, M, W] = lines[lineIdx++].split(' ').map(Number);
    const edges = [];

    for (let i = 0; i < M; i++) {
      const [s, e, t] = lines[lineIdx++].split(' ').map(Number);
      edges.push([s, e, t]);
      edges.push([e, s, t]);
    }

    for (let i = 0; i < W; i++) {
      const [s, e, t] = lines[lineIdx++].split(' ').map(Number);
      edges.push([s, e, -t]);
    }

    const cost = new Array(N + 1).fill(0);
    let hasNegativeCycle = false;

    for (let i = 1; i <= N; i++) {
      for (const [curr, next, weight] of edges) {
        if (cost[next] > cost[curr] + weight) {
          cost[next] = cost[curr] + weight;

          if (i === N) {
            hasNegativeCycle = true;
          }
        }
      }
    }

    finalResult.push(hasNegativeCycle ? 'YES' : 'NO');
  }

  return finalResult.join('\n');
}

console.log(solution(input));
