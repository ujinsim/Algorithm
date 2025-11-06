const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

function solution(input) {
  const dp = new Array(input + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  }

  return dp[input];
}

console.log(solution(input));
