const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split('\n');
  const orders = parseInput.slice(1);

  let queue = [];
  let head = 0;
  let tail = 0;
  let result = [];

  for (let i = 0; i < orders.length; i++) {
    const line = orders[i].split(' ');
    const order = line[0];

    if (order === 'push') {
      const num = line[1];
      queue[tail] = num;
      tail++;
    } else if (order === 'pop') {
      if (tail == head) {
        result.push(-1);
      } else {
        result.push(queue[head]);
        head += 1;
      }
    } else if (order === 'size') {
      result.push(tail - head);
    } else if (order === 'empty') {
      result.push(head === tail ? 1 : 0);
    } else if (order === 'front') {
      if (tail == head) {
        result.push(-1);
      } else {
        result.push(queue[head]);
      }
    } else if (order === 'back') {
      if (tail == head) {
        result.push(-1);
      } else {
        result.push(queue[tail - 1]);
      }
    }
  }

  return result.join('\n');
}

console.log(solution(input));
