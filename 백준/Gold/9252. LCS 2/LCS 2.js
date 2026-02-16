const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();


function solution(input) {
  const parseInput = input.split(`\n`);
  const [one, two] = parseInput;
  const n = one.length;
  const m = two.length;

  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (one[i - 1] === two[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const max = Math.max(...dp.flat());
    if (max === 0) return 0;

  let resultStr = [];
  let x = n;
  let y = m;

  while (x > 0 && y > 0) {
    if (one[x - 1] === two[y - 1]) {
      resultStr.push(one[x - 1]);
      x--;
      y--;
    } else if (dp[x - 1][y] >= dp[x][y - 1]) {
      x--;
    } else {
      y--;
    }
  }


  return max + '\n' + resultStr.reverse().join("");
}


console.log(solution(input))