const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const nums = Array.from({ length: 10 }, (a, b) => b);
  const result = [];

  function findDecrease(currNumber, lastDigit) {
    result.push(currNumber);

    for (let i = 0; i < lastDigit; i++) {
      const nextNumber = currNumber * 10 + i;
      findDecrease(nextNumber, i);
    }
  }

  for (let i = 0; i <= 9; i++) {
    findDecrease(i, i);
  }

  result.sort((a, b) => a - b);

  const index = Number(input) - 1;
  if (index >= result.length) return -1;
  return result[index];
}

console.log(solution(input));
