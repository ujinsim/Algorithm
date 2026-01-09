const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const nums = parseInput[1].split(' ').map(Number);
  const operatorIdx = parseInput[2].split(' ').map(Number);

  const dist = [];
  const visited = new Array(N + 1).fill(false);

  let minResult = Infinity;
  let maxResult = -Infinity;

  function backtrack(start, depth) {
    if (dist.length == 2 * N - 1) {
      const resultArr = dist.join(' ').split(' ').map(Number);

      let result = resultArr[0];

      for (let i = 1; i < resultArr.length; i += 2) {
        const opr = resultArr[i];
        const num = resultArr[i + 1];

        if (opr == 0) {
          result += num;
        } else if (opr == 1) {
          result -= num;
        } else if (opr == 2) {
          result *= num;
        } else {
          result = Math.trunc(result / num);
        }
      }

      if (result > maxResult) {
        maxResult = result;
      }
      if (result < minResult) {
        minResult = result;
      }
    } else {
      if (depth % 2 == 1) {
        for (let i = 0; i < operatorIdx.length; i++) {
          if (operatorIdx[i] > 0) {
            operatorIdx[i] -= 1;
            dist.push(i);
            backtrack(start, depth + 1);
            dist.pop();
            operatorIdx[i] += 1;
          }
        }
      }
      if (depth % 2 == 0) {
        for (let i = start; i < nums.length; i++) {
          if (!visited[i]) {
            const v = nums[i];
            visited[i] = true;
            dist.push(v);
            backtrack(i + 1, depth + 1);
            dist.pop();
            visited[i] = false;
          }
        }
      }
    }
  }

  backtrack(0, 0);

  return maxResult + `\n` + minResult;
}

console.log(solution(input));
