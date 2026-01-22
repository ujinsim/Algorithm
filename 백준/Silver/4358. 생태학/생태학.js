const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const woods = input.split(`\n`);
  woods.sort();

  const map = new Map();
  let count = woods.length;

  for (let i = 0; i < woods.length; i++) {
    const wood = woods[i];
    if (!map.has(wood)) map.set(wood, 0);

    map.set(wood, map.get(wood) + 1);
  }
  const result = [];

  for (let [key, value] of map) {
    const num = ((value / count) * 100).toFixed(4);
    result.push(`${key} ${num}`);
  }

  return result.join(`\n`);
}

console.log(solution(input));
