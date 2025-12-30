const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split('\n');
  const orders = parseInput.slice(1).map(a => a.split(' '));

  const deque = {};

  let headIdx = 0;
  let tailIdx = 0;

  const result = [];

  for (let i = 0; i < orders.length; i++) {
    const [order, val] = orders[i];
    const num = Number(val);

    if (order == 'push_front') {
      headIdx -= 1;
      deque[headIdx] = num;
    }

    if (order == 'push_back') {
      deque[tailIdx] = num;
      tailIdx += 1;
    }

    if (order == 'pop_front') {
      if (headIdx === tailIdx) {
        result.push(-1);
      } else {
        result.push(deque[headIdx]);
        delete deque[headIdx];
        headIdx += 1;
      }
    }

    if (order == 'pop_back') {
      if (headIdx === tailIdx) {
        result.push(-1);
      } else {
        tailIdx -= 1;
        result.push(deque[tailIdx]);
        delete deque[tailIdx];
      }
    }

    if (order == 'size') {
      result.push(tailIdx - headIdx);
    }

    if (order == 'empty') {
      result.push(headIdx === tailIdx ? 1 : 0);
    }

    if (order == 'front') {
      if (headIdx === tailIdx) {
        result.push(-1);
      } else {
        result.push(deque[headIdx]);
      }
    }

    if (order == 'back') {
      if (headIdx === tailIdx) {
        result.push(-1);
      } else {
        result.push(deque[tailIdx - 1]);
      }
    }
  }

  return result.join('\n');
}

console.log(solution(input));
