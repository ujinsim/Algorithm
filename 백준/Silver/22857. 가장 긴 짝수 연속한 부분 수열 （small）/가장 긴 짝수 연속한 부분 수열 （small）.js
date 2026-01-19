const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const lines = input.split('\n');
  const [N, K] = lines[0].split(' ').map(Number);
  const nums = lines[1].split(' ').map(Number);

  let left = 0;
  let right = 0;
  let maxLen = 0;
  let oddCount = 0;

  while (right < N) {
    if (nums[right] % 2 !== 0) {
      oddCount += 1;
    }

    while (oddCount > K) {
      if (nums[left] % 2 !== 0) {
        oddCount -= 1;
      }
      left += 1;
    }

    maxLen = Math.max(maxLen, right - left + 1 - oddCount);

    right += 1;
  }

  return maxLen;
}

console.log(solution(input));
