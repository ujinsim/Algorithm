const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, M] = parseInput[0].split(' ').map(Number);
  const roads = parseInput.slice(1).map(a => a.split(' ').map(Number));

  const map = new Map();

  for (let i = 0; i < roads.length; i++) {
    const [n, v] = roads[i];

    if (!map.has(n)) map.set(n, []);
    map.get(n).push(v);

    if (!map.has(v)) map.set(v, []);
    map.get(v).push(n);
  }

  const com = [];
  const tempDist = [];

  function backtrack(start, depth) {
    if (2 == depth) {
      return com.push([...tempDist]);
    }

    for (let i = start; i <= N; i++) {
      tempDist.push(i);
      backtrack(i + 1, depth + 1);
      tempDist.pop();
    }
  }

  backtrack(1, 0);

  const graph = Array.from({ length: N + 1 }, () =>
    new Array(N + 1).fill(Infinity)
  );

  for (let [key, val] of roads) {
    graph[key][val] = 1;
    graph[val][key] = 1;
  }

  for (let i = 0; i <= N; i++) {
    graph[i][i] = 0;
  }

  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        if (graph[i][k] !== Infinity && graph[k][j] !== Infinity) {
          graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
      }
    }
  }

  let minDist = Infinity;
  let stores = [];

  for (let [a, b] of com) {
    let count = 0;
    for (let i = 1; i <= N; i++) {
      // a와 b를 제외하고 돌며 minDIst를 구한당~

      if (i !== a && i !== b) {
        count += Math.min(graph[a][i], graph[b][i]) * 2;
      }
    }
    if (count < minDist) {
      minDist = count;
      stores = [a, b];
    }
  }

  return stores.join(' ') + ' ' + minDist;
}

console.log(solution(input));
