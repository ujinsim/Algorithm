const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(str) {
  const n = str.length;
  const visited = new Array(n).fill(false);
  const result = [];

  function divide(left, right) {
    if (left > right) return;

    let minIdx = left;
    for (let i = left; i <= right; i++) {
      if (str[i] < str[minIdx]) {
        minIdx = i;
      }
    }

    visited[minIdx] = true;

    let currStr = "";
    for (let i = 0; i < n; i++) {
      if (visited[i]) currStr += str[i];
    }
    result.push(currStr);

    divide(minIdx + 1, right);
    divide(left, minIdx - 1);
  }

  divide(0, n - 1);
  console.log(result.join('\n'));
}

solution(input);