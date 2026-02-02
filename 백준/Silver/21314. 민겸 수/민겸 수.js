const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let max = '';
  let mCount = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'M') {
      mCount++;
    } else {
      max += '5' + '0'.repeat(mCount);
      mCount = 0;
    }
  }
  if (mCount > 0) {
    max += '1'.repeat(mCount);
  }

  let min = '';
  mCount = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'M') {
      mCount++;
    } else {
      if (mCount > 0) {
        min += '1' + '0'.repeat(mCount - 1) + '5';
      } else {
        min += '5';
      }
      mCount = 0;
    }
  }
  if (mCount > 0) {
    min += '1' + '0'.repeat(mCount - 1);
  }

  return max + '\n' + min;
}

console.log(solution(input));
