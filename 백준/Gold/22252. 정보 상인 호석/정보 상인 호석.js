const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  //  호석이가 정보들을 구매하는 데에 쓴 돈의 총합을 구하자.

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

    if (n == 1) {
      if (!map.has(name)) map.set(name, []);
      const nums = parseList.slice(3).map(Number);
      map.get(name).push(...nums);
    }

    if (n == 2) {
      const costs = map.get(name);
      if (!costs || costs.length === 0) continue;

      costs.sort((a, b) => b - a);

      const sold = costs.splice(0, num);
      for (let cost of sold) {
        result += cost;
      }
    }
  }

  return result;
}

console.log(solution(input));
