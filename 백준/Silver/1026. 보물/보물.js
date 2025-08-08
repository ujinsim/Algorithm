const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const values = input.split('\n');
  const a = values[1].split(' ').map(Number).sort((x, y) => x - y);
  const b = values[2].split(' ').map(Number).sort((x, y) => y - x);
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

console.log(solution(input));
