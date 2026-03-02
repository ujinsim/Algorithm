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

  // 0보다 작으면 low올리기
  // 0보다 크면 high 낮추기

  let low = 0;
  let high = N - 1;

  let resultArr = [];
  let result = Infinity;

  while (low < high) {
    let sum = nums[low] + nums[high];

    if (sum >= 0) {
      if (Math.abs(sum) < result) {
        result = Math.abs(sum);
        resultArr = [nums[low], nums[high]];
      }
      high -= 1;
    } else {
      if (Math.abs(sum) < result) {
        result = Math.abs(sum);
        resultArr = [nums[low], nums[high]];
      }
      low += 1;
    }
  }

  return resultArr.join(' ');
}

console.log(solution(input));
