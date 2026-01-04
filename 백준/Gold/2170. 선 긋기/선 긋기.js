const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const lines = input.split('\n');
  const n = Number(lines[0]);
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(lines[i].split(' ').map(Number));
  }
  nums.sort((a, b) => a[0] - b[0]);

  const arr = [];

  let start = nums[0][0];
  let end = nums[0][1];

  for (let i = 1; i < n; i++) {
    const [nextStart, nextEnd] = nums[i];

    if (end >= nextStart) {
      end = Math.max(end, nextEnd);
    } else {
      arr.push([start, end]);
      start = nextStart;
      end = nextEnd;
    }
  }

  arr.push([start, end]);

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][1] - arr[i][0];
  }

  return result;
}
console.log(solution(input));
