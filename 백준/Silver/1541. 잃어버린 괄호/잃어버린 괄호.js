const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  // 빼기 기호 뒤에는 다 더해 최대로 만들어준다

  const parse = input.split('-');

  let result = 0;

  for (let i = 0; i < parse.length; i++) {
    const nums = parse[i].split('+').map(Number);

    const sum = nums.reduce((a, b) => a + b);

    if (i == 0) {
      result += sum;
    } else {
      result -= sum;
    }
  }

  return result;
}

console.log(solution(input));
