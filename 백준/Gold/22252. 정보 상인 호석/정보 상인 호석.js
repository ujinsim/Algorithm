const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const lists = parseInput.slice(1);
  const map = new Map();
  let result = 0;

  for (let i = 0; i < lists.length; i++) {
    const parseList = lists[i].split(' ');

    const n = Number(parseList[0]);
    const name = parseList[1];
    const num = Number(parseList[2]);
    const nums = parseList.slice(3).map(Number);

    if (n == 1) {
      if (!map.has(name)) map.set(name, []);
      map.get(name).push(...nums);
    }
    if (n == 2) {
      let candidate = map.get(name);

      if (!candidate || candidate.length == 0) continue;

      candidate.sort((a, b) => b - a);

      const sold = candidate.slice(0, num);

      for (let cost of sold) {
        result += cost;
      }
      map.set(name, candidate.slice(num));
    }
  }

  return result;
}

console.log(solution(input));
