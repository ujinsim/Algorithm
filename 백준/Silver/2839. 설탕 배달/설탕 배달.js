const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const n = Number(input);

  let result = -1;

  for (let i = Math.floor(n / 5); i >= 0; i--) {
    let left = input - i * 5;

    if (left % 3 === 0) {
      let j = left / 3;
      result = i + j;
      break;
    }
  }

  return result;
}

console.log(solution(input));
