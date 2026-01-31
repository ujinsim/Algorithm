const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));

  const dp = new Array(N + 1).fill(0);

  // idx1이 1일

  for (let i = 0; i < N; i++) {
    const [time, profit] = nums[i];
    const finishDay = i + time;

    dp[i + 1] = Math.max(dp[i + 1], dp[i]);

    if (finishDay <= N) {
      dp[finishDay] = Math.max(dp[finishDay], profit + dp[i]);
    }
  }
  return Math.max(...dp);
}

console.log(solution(input));
