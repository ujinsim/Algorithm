const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, M, R] = parseInput[0].split(' ').map(Number);
  const countes = parseInput[1].split(' ').map(Number);
  const nodes = parseInput.slice(2).map(a => a.split(' ').map(Number));

  // 각 그래프에서의 거리를 구하고 마지막에 각 노드별 합(수색범위 이내)을 더한 후 최대를 찾는다
  const dist = Array.from({ length: N + 1 }, () =>
    new Array(N + 1).fill(Infinity)
  );

  for (let i = 0; i < nodes.length; i++) {
    const [n, v, c] = nodes[i];

    dist[n][v] = c;
    dist[v][n] = c;
  }

  for (let i = 1; i <= N; i++) {
    dist[i][i] = 0;
  }

  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        if (dist[i][k] !== Infinity && dist[k][i] !== Infinity && i !== j) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
  }

  let maxResult = -Infinity;

  for (let i = 1; i <= N; i++) {
    let count = 0;
    for (let j = 1; j <= N; j++) {
      if (dist[i][j] <= M) {
        count += countes[j - 1];
      }
    }
    if (count > maxResult) {
      maxResult = count;
    }
  }

  return maxResult;
}

console.log(solution(input));
