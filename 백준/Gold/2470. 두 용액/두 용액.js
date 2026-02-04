const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);

  const nums = parseInput[1]
    .split(' ')
    .map(BigInt)
    .sort((a, b) => (a < b ? -1 : 1));

  let low = 0;
  let high = N - 1;

  const absBI = val => (val < 0n ? -val : val);
  let minResult = 2000000001n;
  let results = [];

  while (low < high) {
    let sum = nums[low] + nums[high];

    if (absBI(minResult) > absBI(sum)) {
      minResult = sum;
      results = [nums[low], nums[high]];
    }

    if (absBI(sum) > 0n) {
      if (
        absBI(nums[low + 1] + nums[high]) < absBI(nums[high - 1] + nums[low])
      ) {
        low = low + 1;
      } else {
        high = high - 1;
      }
    } else {
      break;
    }
  }

  return results
    .sort((a, b) => (a < b ? -1 : 1))
    .map(String)
    .join(' ');
}

console.log(solution(input));
