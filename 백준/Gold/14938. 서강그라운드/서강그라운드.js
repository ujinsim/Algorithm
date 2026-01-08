const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  // 선 위에 숫자는 수색 범위  체크용이다
  // 다익스트라로 풀기 + 플로이드 워셜
  // n번에 떨어진 경우로 각각 돌기 << 이때 수색범위보다 작으면 업데이트
  // 행별 맥스를 구해서 최대가 정답

  const parseInput = input.split(`\n`);
  const [N, M, R] = parseInput[0].split(' ').map(Number);
  const countes = parseInput[1].split(' ').map(Number);
  const nodes = parseInput.slice(2).map(a => a.split(' ').map(Number));

  const map = new Map();
  const dists = Array.from({ length: N + 1 }, () =>
    new Array(N + 1).fill(Infinity)
  );

  for (let i = 0; i < nodes.length; i++) {
    const [n, v, c] = nodes[i];
    if (!map.has(n)) map.set(n, []);
    map.get(n).push([v, c]);

    if (!map.has(v)) map.set(v, []);
    map.get(v).push([n, c]);

    dists[n][v] = c;
    dists[v][n] = c;
  }

  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= N; j++) {
      if (i == j) {
        dists[i][j] = 0;
      }
    }
  }

  for (let k = 1; k < N + 1; k++) {
    for (let i = 1; i < N + 1; i++) {
      for (let j = 1; j < N + 1; j++) {
        if (i !== j) {
          if (dists[i][k] + dists[k][j] < dists[i][j]) {
            dists[i][j] = dists[i][k] + dists[k][j];
          }
        }
      }
    }
  }

  let result = 0;

  for (let i = 1; i < N + 1; i++) {
    let count = 0;
    for (let j = 1; j < N + 1; j++) {
      if (dists[i][j] !== Infinity && dists[i][j] <= M) {
        count += countes[j - 1];
      }
    }
    if (count > result) {
      result = count;
    }
  }

  return result;
}

console.log(solution(input));
