const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const dists = parseInput[1].split(' ').map(v => BigInt(v));
  const costs = parseInput[2]
    .split(' ')
    .map(v => BigInt(v))
    .slice(0, N - 1);

  let minCost = costs[0];
  let result = 0n;

  for (let i = 0; i < costs.length; i++) {
    if (costs[i] < minCost) {
      minCost = costs[i];
    }

    result += minCost * dists[i];
  }

  return result.toString();
}

console.log(solution(input));
