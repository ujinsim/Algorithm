const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const [N, K] = input.split(' ').map(Number);

  const visitedSet = new Set();
  const queue = [];
  visitedSet.add(N);
  queue.push([N, 0]);
  let head = 0;

  while (queue.length > head) {
    const [curr, count] = queue[head++];

    if (curr == K) {
      return count;
    }

    if (curr * 2 <= 100000 && !visitedSet.has(curr * 2)) {
      visitedSet.add(curr * 2);
      queue.push([curr * 2, count]);
    }

    if (curr - 1 >= 0 && !visitedSet.has(curr - 1)) {
      visitedSet.add(curr - 1);
      queue.push([curr - 1, count + 1]);
    }
    if (curr + 1 <= 100000 && !visitedSet.has(curr + 1)) {
      visitedSet.add(curr + 1);
      queue.push([curr + 1, count + 1]);
    }
  }
}

console.log(solution(input));
