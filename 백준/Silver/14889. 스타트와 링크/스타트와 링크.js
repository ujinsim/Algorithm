const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const map = parseInput.slice(1).map(a => a.split(' ').map(Number));

  const nums = Array.from({ length: N }, (_, i) => i + 1);

  // 조합 n/2
  const result = [];
  const dist = [];

  function backtrack(cur, depth) {
    if (depth == N / 2) {
      result.push(dist.join(' ').split(' ').map(Number));
      return;
    }

    for (let i = cur; i < N; i++) {
      dist.push(nums[i]);
      backtrack(i + 1, depth + 1);
      dist.pop();
    }
  }

  backtrack(0, 0);

  let min = Infinity;

  for (let i = 0; i < Math.floor(result.length / 2); i++) {
    let group1 = result[i];
    let group2 = result[result.length - 1 - i];

    let sumOne = 0;
    let sumTwo = 0;

    for (let j = 0; j < group1.length; j++) {
      for (let k = 0; k < group1.length; k++) {
        const one = group1[j];
        const two = group1[k];

        sumOne += map[one - 1][two - 1];
      }
    }

    for (let j = 0; j < group2.length; j++) {
      for (let k = 0; k < group2.length; k++) {
        const one = group2[j];
        const two = group2[k];

        sumTwo += map[one - 1][two - 1];
      }
    }

    min = Math.abs(sumTwo - sumOne) < min ? Math.abs(sumTwo - sumOne) : min;
  }

  return min;
}

console.log(solution(input));
