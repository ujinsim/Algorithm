const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, K] = parseInput[0].split(' ').map(Number);
  const springX = parseInput[1].split(' ').map(Number);

  const visited = new Set();
  const queue = [];

  for (let i = 0; i < N; i++) {
    queue.push([springX[i], 0]);
    visited.add(springX[i]);
  }

  let head = 0;
  let result = 0;
  let builtHouses = 0;

  while (queue.length > head) {
    const [x, count] = queue[head++];

    const dirs = [x - 1, x + 1];

    for (const nextX of dirs) {
      if (!visited.has(nextX)) {
        visited.add(nextX);
        result += count + 1;
        builtHouses++;

        if (builtHouses === K) return result;

        queue.push([nextX, count + 1]);
      }
    }
  }

  return result;
}

console.log(solution(input));
