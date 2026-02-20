const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, T] = parseInput[0].split(' ').map(Number);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));

  // 해당 공부시간 이내에 얻을 수 있는 가장 큰 가치

  const dp = new Array(T + 1).fill(0);
  let max = 0;

  for (let [time, value] of nums) {
    for (let k = T; k >= time; k--) {
      dp[k] = Math.max(dp[k], dp[k - time] + value);

      max = Math.max(dp[k], max);
    }
  }

  return max;
}

console.log(solution(input));
