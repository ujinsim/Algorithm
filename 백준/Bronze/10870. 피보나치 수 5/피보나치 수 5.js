const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

const arr = new Array(input + 1).fill(0);

function fibonacci(n) {
  if (n === 0) return arr[n] = 0;
  if (n === 1) return arr[n] = 1;

  if (arr[n] !== 0) return arr[n];

  arr[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return arr[n];
}

console.log(fibonacci(input));
