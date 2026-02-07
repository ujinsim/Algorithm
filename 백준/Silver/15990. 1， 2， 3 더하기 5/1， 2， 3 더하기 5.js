const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const nums = parseInput.slice(1).map(Number);

  const max = Math.max(...nums);

  const dp = Array.from({ length: max + 1 }, () => new Array(3).fill(0));

  let mod = 1000000009;

  dp[1][0] = 1;
  dp[2][1] = 1;
  dp[3][0] = 1;
  dp[3][1] = 1;
  dp[3][2] = 1;

  //같은 수를 두 번 이상 연속해서 사용하면 안 된다
  // 4
  // [1,2,1], [1,3], [3,1]
  // 5
  // [2,1,2], [3,2], [2,3], [1,3,1]
  // 6
  // [2,1,2,1], [1,2,1,2], [3,2,1], [1,2,3], [2,1,3], [2,3,1], [3,1,2], [1,3,2]

  for (let i = 4; i < max + 1; i++) {
    dp[i][0] = (dp[i - 1][1] + dp[i - 1][2]) % mod;

    dp[i][1] = (dp[i - 2][2] + dp[i - 2][0]) % mod;

    dp[i][2] = (dp[i - 3][0] + dp[i - 3][1]) % mod;
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const cur = dp[num];

    const sum = cur.reduce((a, b) => a + b) % mod;

    result.push(sum);
  }

  return result.join('\n');
}

console.log(solution(input));
