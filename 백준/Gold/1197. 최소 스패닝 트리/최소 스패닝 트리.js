const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [V, E] = parseInput[0].split(' ').map(Number);
  const map = parseInput.slice(1).map(a => a.split(' ').map(Number));

  map.sort((a, b) => a[2] - b[2]);

  let cost = 0;

  const p = Array.from({ length: V + 1 }, (_, i) => i);

  function find(a) {
    if (p[a] === a) return a;
    return (p[a] = find(p[a]));
  }

  function union(a, b, c) {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA !== rootB) {
      p[rootB] = rootA;
      cost += c;
    } else {
      return false;
    }
  }

  for (let [n, v, c] of map) {
    union(n, v, c);
  }
  return cost;
}

console.log(solution(input));
