const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

const result = [];
const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function findDecreasingNumbers(index, current) {
  if (current.length > 0) {
    result.push(Number(current));
  }

  for (let i = index; i < 10; i++) {
    findDecreasingNumbers(i + 1, current + digits[i]);
  }
}

findDecreasingNumbers(0, '');

result.sort((a, b) => a - b);

if (N > result.length) {
  console.log(-1);
} else {
  console.log(result[N - 1]);
}
