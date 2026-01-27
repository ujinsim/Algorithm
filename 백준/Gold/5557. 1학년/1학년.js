const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const nums = parseInput.slice(1)[0].split(' ').map(Number);
  const target = nums[nums.length - 1];

  const dp = Array.from({ length: nums.length - 1 }, () =>
    new Array(21).fill(0n)
  );

  dp[0][nums[0]] = 1n;

  for (let i = 1; i < nums.length - 1; i++) {
    for (let j = 0; j < 21; j++) {
      if (dp[i - 1][j] > 0n) {
        if (j + nums[i] <= 20) {
          dp[i][j + nums[i]] += dp[i - 1][j];
        }

        if (j - nums[i] >= 0) {
          dp[i][j - nums[i]] += dp[i - 1][j];
        }
      }
    }
  }

  return dp[nums.length - 2][target].toString();
}

console.log(solution(input));
