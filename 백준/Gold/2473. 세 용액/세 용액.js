const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const nums = parseInput[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let curSum = Infinity;
  let curNum = [];

  for (let t = 0; t < nums.length - 2; t++) {
    let left = t + 1;
    let right = N - 1;
    const target = nums[t];

    while (left < right) {
      let sum = nums[left] + nums[right] + nums[t];

      if (Math.abs(sum) < curSum) {
        curSum = Math.abs(sum);
        curNum = [nums[left], nums[right], nums[t]];
      }

      if (sum < 0) {
        left = left + 1;
      } else {
        right = right - 1;
      }
    }
  }

  return curNum.sort((a, b) => a - b).join(' ');
}

console.log(solution(input));
