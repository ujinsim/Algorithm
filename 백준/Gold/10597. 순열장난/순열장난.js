const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const L = input.length;
  const N = L < 10 ? L : 9 + (L - 9) / 2;

  const visited = new Array(N + 1).fill(false);

  const dist = [];
  const result = [];

  function backtrack(idx, count) {
    if (result.length >= 1) return;

    if (idx > input.length) return;

    if (count == N) {
      if (idx === input.length) {
        return result.push(...dist);
      }
    }

    if (idx + 1 <= input.length) {
      const sliceOne = Number(input.slice(idx, idx + 1));

      if (sliceOne && !visited[sliceOne] && sliceOne <= N) {
        visited[sliceOne] = true;
        dist.push(sliceOne);
        backtrack(idx + 1, count + 1);
        dist.pop();
        visited[sliceOne] = false;
      }

      if (idx + 2 <= input.length) {
        const sliceTwo = Number(input.slice(idx, idx + 2));

        if (sliceTwo && !visited[sliceTwo] && sliceTwo <= N) {
          visited[sliceTwo] = true;
          dist.push(sliceTwo);
          backtrack(idx + 2, count + 1);
          dist.pop();
          visited[sliceTwo] = false;
        }
      }
    }
  }

  backtrack(0, 0);

  return result.join(' ');
}

console.log(solution(input));
