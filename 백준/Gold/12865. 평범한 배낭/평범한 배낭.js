const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = (input || '').toString().split(`\n`);
  const [N, K] = parseInput[0].split(' ').map(Number);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));

  // 가치 안넘으면 계속 갱신

  const dp = new Array(K + 1).fill(0);

  for (let [weight, value] of nums) {
    for (let i = K; i >= weight; i--) {
      dp[i] = Math.max(dp[i], dp[i - weight] + value);
    }
  }

  return dp[dp.length - 1];
}

console.log(solution(input));
