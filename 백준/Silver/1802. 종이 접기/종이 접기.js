const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);

  const N = Number(parseInput[0]);
  const nums = parseInput.slice(1).map(a => a.split('').map(Number));

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    function recursive(num) {
      const mid = Math.floor(num.length / 2);

      if (num.length == 1) return true;

      for (let j = 0; j < mid; j++) {
        if (num[j] === num[num.length - 1 - j]) {
          return false;
        }
      }

      return recursive(num.slice(0, mid));
    }

    if (recursive(num)) {
      result.push('YES');
    } else {
      result.push('NO');
    }
  }

  return result.join('\n');
}

console.log(solution(input));
