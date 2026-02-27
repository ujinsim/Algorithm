const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const dists = parseInput[1].split(' ').map(Number);
  const costs = parseInput[2]
    .split(' ')
    .map(Number)
    .slice(0, N - 1);

  let minCost = Infinity;
  let result = 0;

  for (let i = 0; i < costs.length; i++) {
    if (costs[i] < minCost) {
      minCost = costs[i];
    }

    result += minCost * dists[i];
  }

  return result;
}

console.log(solution(input));
