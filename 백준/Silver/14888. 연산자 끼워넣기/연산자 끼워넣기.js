const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const nums = input[1].split(' ').map(Number);
  const ops = input[2].split(' ').map(Number);

  let max = -Infinity;
  let min = Infinity;

  function dfs(current, idx) {
    if (idx === N) {
      max = Math.max(max, current);
      min = Math.min(min, current);
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (ops[i] > 0) {
        ops[i]--;
        let next;
        if (i === 0) next = current + nums[idx];
        else if (i === 1) next = current - nums[idx];
        else if (i === 2) next = current * nums[idx];
        else next = Math.trunc(current / nums[idx]);

        dfs(next, idx + 1);
        ops[i]++;
      }
    }
  }

  dfs(nums[0], 1);

  return `${max === 0 ? 0 : max}\n${min === 0 ? 0 : min}`;
}

console.log(solution(input));