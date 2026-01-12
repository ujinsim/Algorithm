const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const num = Number(input);
  const arr = Array.from({ length: num }, (v, a) => a + 1);
  let head = 0;

  while (head < arr.length - 1) {
    // 버리기
    head += 1;

    // 옮기기
    arr.push(arr[head++]);
  }
  return arr[head];
}

console.log(solution(input));
