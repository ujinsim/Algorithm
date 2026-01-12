const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, M] = parseInput[0].split(' ').map(Number);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const [n, c, v] = nums[i];
    if (!map.has(n)) map.set(n, []);
    map.get(n).push([c, v]);
  }

  const dist = new Array(N + 1).fill(Infinity);
  dist[1] = 0;

  for (let i = 1; i <= N - 1; i++) {
    let updated = false;

    for (let [key, neighbors] of map) {
      if (dist[key] == Infinity) {
        continue;
      }

      for (let [neighbor, count] of neighbors) {
        if (dist[key] + count < dist[neighbor]) {
          dist[neighbor] = dist[key] + count;
          updated = true;
        }
      }
    }
    if (!updated) {
      break;
    }
  }

  for (const [node, neighbors] of map) {
    if (dist[node] == Infinity) continue;
    for (let [neighbor, w] of neighbors) {
      if (dist[neighbor] > dist[node] + w) {
        return '-1';
      }
    }
  }

  const result = dist.slice(2).map(v => (v === Infinity ? -1 : v));
  return result.join('\n');
}

console.log(solution(input));
