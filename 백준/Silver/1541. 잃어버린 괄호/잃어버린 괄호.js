const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const part = input.split("-");

  const result = part.reduce((total, item, idx) => {
    const sum = item.split("+").map(a => +a).reduce((a, b) => a + b, 0);

    return idx === 0 ? sum : total - sum;
  }, 0);

  return result;
}

console.log(solution(input));
