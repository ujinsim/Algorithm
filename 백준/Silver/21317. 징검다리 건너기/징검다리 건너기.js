const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(inputData) {
  const parseInput = inputData.trim().split('\n');
  const N = Number(parseInput[0]);
  if (N === 1) return 0;

  const nums = parseInput.slice(1, N).map(a => a.split(' ').map(Number));
  const K = Number(parseInput[parseInput.length - 1]);

  const dp = Array.from({ length: N }, () => [Infinity, Infinity]);

  dp[0][0] = 0;

  if (N > 1) {
    dp[1][0] = nums[0][0];
  }

  if (N > 2) {
    dp[2][0] = Math.min(nums[0][1], dp[1][0] + nums[1][0]);
  }

  for (let i = 0; i < N; i++) {
    if (i >= 1) {
      dp[i][0] = Math.min(nums[i - 1][0] + dp[i - 1][0], dp[i][0]);
    }

    if (i >= 2) {
      dp[i][0] = Math.min(nums[i - 2][1] + dp[i - 2][0], dp[i][0]);
    }

    if (i >= 1) {
      dp[i][1] = Math.min(nums[i - 1][0] + dp[i - 1][1], dp[i][1]);
    }

    if (i >= 2) {
      dp[i][1] = Math.min(nums[i - 2][1] + dp[i - 2][1], dp[i][1]);
    }

    if (i >= 3) {
      dp[i][1] = Math.min(K + dp[i - 3][0], dp[i][1]);
    }
  }

  return Math.min(dp[N - 1][1], dp[N - 1][0]);
}

console.log(solution(input));
