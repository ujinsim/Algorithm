const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = input.length;

  let maxHead = 0;
  let max = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] == 'K') {
      let value = input.slice(maxHead, i + 1);

      if (value) {
        let newValue = '5' + '0'.repeat(value.length - 1);
        max += newValue;
      }

      maxHead = i + 1;
    }
  }

  if (maxHead < N) {
    const leftmax = input.slice(maxHead);
    const nextmax = '1'.repeat(leftmax.length);

    if (nextmax !== null) max += nextmax;
  }

  let minHead = 0;
  let min = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] == 'K') {
      let value = input.slice(minHead, i);
      if (value) {
        let newValue = '1' + '0'.repeat(value.length - 1);
        min += newValue;
      }
      min += '5';
      minHead = i + 1;
    }
  }

  if (minHead < N) {
    const leftmin = input.slice(minHead);
    const nextmin = '1' + '0'.repeat(leftmin.length - 1);

    if (nextmin !== null) min += nextmin;
  }

  return `${max}\n${min}`;
}

console.log(solution(input));
