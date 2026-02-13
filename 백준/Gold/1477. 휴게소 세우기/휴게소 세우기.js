const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, M, L] = parseInput[0].split(' ').map(Number);

  let locates = [];
  if (N > 0 && parseInput[1]) {
    locates = parseInput[1].split(' ').map(Number);
  }

  locates.push(0);
  locates.push(L);
  locates.sort((a, b) => a - b);

  let left = 1;
  let right = L - 1;
  let result = L;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid === 0) {
      left = 1;
      continue;
    }

    let count = 0;
    for (let i = 0; i < locates.length - 1; i++) {
      let dist = locates[i + 1] - locates[i];
      count += Math.floor((dist - 1) / mid);
    }

    if (count > M) {
      left = mid + 1;
    } else {
      result = mid;
      right = mid - 1;
    }
  }

  return result;
}

console.log(solution(input));
