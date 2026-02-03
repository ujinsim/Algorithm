const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, M] = parseInput[0].split(' ').map(Number);
  const times = parseInput.slice(1).map(Number);

  //상근이와 친구들이 심사를 받는데 걸리는 시간의 최솟값

  // 7 에 4명 10에2명?

  let low = 1n;
  let high = BigInt(Math.max(...times)) * BigInt(M);
  let result = high;

  // 특정 시간인경우 6명이 가능한지
  // 가능하다면 high = mid -1
  // 불가하다면 low = mid + 1

  while (low <= high) {
    let mid = (low + high) / 2n;
    let count = 0n;

    for (let time of times) {
      count += mid / BigInt(time);
    }

    if (count >= BigInt(M)) {
      high = mid - 1n;
      result = mid;
    } else {
      low = mid + 1n;
    }
  }

  return result.toString();
}

console.log(solution(input));
