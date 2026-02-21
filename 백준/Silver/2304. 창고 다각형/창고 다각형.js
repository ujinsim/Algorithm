const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const n = Number(parseInput[0]);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));

  nums.sort((a, b) => a[0] - b[0]);

  let start = nums[0][0];
  let end = nums[nums.length - 1][0];

  const graph = new Array(end + 1).fill(0);

  let maxIndex = [];
  let max = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const [x, y] = nums[i];

    if (y > max) {
      max = y;
      maxIndex = [x];
    } else if (max == y) {
      maxIndex.push(x);
    }

    graph[x] = y;
  }

  maxIndex.sort((a, b) => a - b);

  count += (maxIndex[maxIndex.length - 1] - maxIndex[0] + 1) * max;

  let curLeft = 0;

  for (let i = start; i < maxIndex[0]; i++) {
    const y = graph[i];

    if (y > curLeft) {
      curLeft = y;
    }
    count += curLeft;
  }

  let curRight = 0;

  for (let i = end; i > maxIndex[maxIndex.length - 1]; i--) {
    const y = graph[i];

    if (y > curRight) {
      curRight = y;
    }
    count += curRight;
  }

  return count;
}

console.log(solution(input));
