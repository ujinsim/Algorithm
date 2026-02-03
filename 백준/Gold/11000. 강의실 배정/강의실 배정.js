const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  //최소의 강의실을 사용해서 모든 수업을 가능하게 해야 한다.

  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const times = parseInput.slice(1).map(a => a.split(' ').map(Number));

  const obj = [];

  for (let i = 0; i < times.length; i++) {
    const [start, end] = times[i];

    obj.push({ time: start, start: 1 });
    obj.push({ time: end, start: -1 });
  }

  obj.sort((a, b) => (a.time == b.time ? a.start - b.start : a.time - b.time));

  let classRoom = 0;
  let answer = 0;

  for (let i = 0; i < obj.length; i++) {
    classRoom += obj[i].start;

    answer = Math.max(classRoom, answer);
  }

  return answer;
}

console.log(solution(input));
