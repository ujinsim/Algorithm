const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const limits = parseInput[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);
  const M = Number(parseInput[2]);
  const weights = parseInput[3]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

  if (limits[0] < weights[0]) return -1;

  let time = 0;

  while (weights.length > 0) {
    time++;
    let boxIndex = 0;

    for (let i = 0; i < limits.length; i++) {
      while (boxIndex < weights.length) {
        if (limits[i] >= weights[boxIndex]) {
          weights.splice(boxIndex, 1);
          break;
        } else {
          boxIndex++;
        }
      }
    }
  }

  return time;
}

console.log(solution(input));
