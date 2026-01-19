const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const lines = input.split('\n');
  const N = Number(lines[0]);
  const nums = lines[1].split(' ').map(Number);
  const dp = [...nums];

  //돌면서 최근 나보다 작으ㅡㄴ거의 DP에 더하기 없으면 자기 자신

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      // 나보다 작은 경우
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + nums[i]);
      }
    }
  }

  return Math.max(...dp);
}

console.log(solution(input));
