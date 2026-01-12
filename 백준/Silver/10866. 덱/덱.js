const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split('\n');
  const orders = parseInput.slice(1).map(a => a.split(' '));

  const deque = [];
  const result = [];

  for (let i = 0; i < orders.length; i++) {
    const [order, num] = orders[i];

    switch (order) {
      case 'push_front':
        deque.unshift(num);
        break;
      case 'push_back':
        deque.push(num);
        break;
      case 'pop_front':
        result.push(deque.length === 0 ? -1 : deque.shift());
        break;
      case 'pop_back':
        result.push(deque.length === 0 ? -1 : deque.pop());
        break;
      case 'size':
        result.push(deque.length);
        break;
      case 'empty':
        result.push(deque.length === 0 ? 1 : 0);
        break;
      case 'front':
        result.push(deque.length === 0 ? -1 : deque[0]);
        break;
      case 'back':
        result.push(deque.length === 0 ? -1 : deque[deque.length - 1]);
        break;
    }
  }

  return result.join('\n');
}

console.log(solution(input));
