const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const nums = parseInput.slice(1).map(Number);
  const dp = new Array(Math.max(...nums)).fill(0);

  dp[0] = 1;
  dp[1] = 2;
  dp[2] = 4;

  for (let i = 3; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(dp[nums[i] - 1]);
  }

  return result.join(`\n`);
}

console.log(solution(input));
