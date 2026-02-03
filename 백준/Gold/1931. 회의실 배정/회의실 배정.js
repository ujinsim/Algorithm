const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  //각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수를 찾아보자
  // NlogN

  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const times = parseInput.slice(1).map(a => a.split(' ').map(Number));

  times.sort((a, b) => (a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]));

  let end = times[0][1];
  let count = 1;

  for (let i = 1; i < N; i++) {
    if (times[i][0] >= end) {
      count += 1;
      end = times[i][1];
    }
  }

  return count;
}

console.log(solution(input));
