const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [V, E] = parseInput[0].split(' ').map(Number);
  const nodes = parseInput.slice(1).map(a => a.split(' ').map(Number));

  // 정렬하고 union - find ㅋㅋ ㅅㄱ

  nodes.sort((a, b) => a[2] - b[2]);
  const p = Array.from({ length: V + 1 }, (_, i) => i);

  function find(a) {
    if (p[a] == a) {
      return a;
    }

    return (p[a] = find(p[a]));
  }

  function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA !== rootB) {
      p[rootA] = rootB;
      return true;
    }
    return false;
  }

  let count = 0;

  for (let [n, v, c] of nodes) {
    if (union(n, v)) {
      count += c;
    }
  }

  return count;
}

console.log(solution(input));
