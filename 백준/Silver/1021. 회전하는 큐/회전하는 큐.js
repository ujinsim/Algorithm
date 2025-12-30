const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, M] = parseInput[0].split(' ').map(Number);
  const nums = parseInput[1].split(' ').map(Number);

  const arr = Array.from({ length: N }, (_, i) => i + 1);
  let count = 0;

  for (let i = 0; i < M; i++) {
    const curLength = arr.length;
    const target = nums[i];
    let targetIdx = Infinity;

    for (let k = 0; k < arr.length; k++) {
      if (arr[k] == target) {
        targetIdx = k;
      }
    }

    if (targetIdx <= curLength - targetIdx) {
      while (arr[0] !== target) {
        const value = arr.shift();
        arr.push(value);
        count += 1;
      }
      if (arr[0] === target) {
        arr.shift();
      }
    } else {
      while (arr[0] !== target) {
        const value = arr.pop();
        arr.unshift(value);
        count += 1;
      }
      if (arr[0] === target) {
        arr.shift();
      }
    }
  }

  return count;
}

console.log(solution(input));
