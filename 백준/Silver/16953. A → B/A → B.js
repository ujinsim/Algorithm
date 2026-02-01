const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const [A, B] = input.split(' ').map(Number);

  //B를 A로 바꾸면 될듯
  // 1이면 뒤에 빼고 아니면 2를 나눈다

  function recursive(cur, count) {
    if (cur == A) {
      return count;
    }

    if (cur < A) {
      return -1;
    }

    const strCur = String(cur);

    const lastChar = strCur.at(-1);

    if (lastChar === '1') {
      const next = Number(strCur.slice(0, -1));
      return recursive(next, count + 1);
    }

    if (cur % 2 == 0) {
      return recursive(cur / 2, count + 1);
    }

    return -1;
  }

  return recursive(B, 1);
}

console.log(solution(input));
