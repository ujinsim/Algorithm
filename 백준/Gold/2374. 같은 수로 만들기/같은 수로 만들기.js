const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.trim().split(/\s+/);
  const N = Number(parseInput[0]);
  const nums = parseInput.slice(1, N + 1).map(a => Number(a));

  let count = 0;

  function division(start, end, target) {
    if (start >= end) return;

    const currNums = nums.slice(start, end);
    const max = Math.max(...currNums);
    const maxIdx = [];

    count += target - max;

    for (let i = start; i < end; i++) {
      if (nums[i] === max) {
        maxIdx.push(i);
      }
    }

    let left = start;

    for (let i = 0; i < maxIdx.length; i++) {
      division(left, maxIdx[i], max);
      left = maxIdx[i] + 1;
    }
    division(left, end, max);
  }

  const overallMax = Math.max(...nums);
  division(0, nums.length, overallMax);

  return count;
}

console.log(solution(input));
