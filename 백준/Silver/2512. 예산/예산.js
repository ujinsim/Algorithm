const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const nums = parseInput[1].split(' ').map(Number);
  const M = Number(parseInput[2]);

  let low = 0;
  let high = Math.max(...nums);

  let result = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let sum = 0;

    for (let num of nums) {
      if (mid < num) {
        sum += mid;
      } else {
        sum += num;
      }
    }

    if (M >= sum) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

console.log(solution(input));
