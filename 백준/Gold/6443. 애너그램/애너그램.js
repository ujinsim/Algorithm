const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const chars = parseInput.slice(1);
  const results = [];

  for (let i = 0; i < N; i++) {
    const char = chars[i];
    const sortedChar = char.split('').sort();

    // 같은 문자는 앞에서 부터 쓰기

    const dist = [];
    const result = [];
    const visited = new Array(sortedChar.length).fill(false);

    function bactrack(depth) {
      if (depth == char.length) {
        result.push(dist.join(''));
        return;
      }

      for (let i = 0; i < sortedChar.length; i++) {
        if (!visited[i]) {
          if (i > 0 && sortedChar[i] === sortedChar[i - 1] && !visited[i - 1])
            continue;
          visited[i] = true;
          dist.push(sortedChar[i]);
          bactrack(depth + 1);
          dist.pop();
          visited[i] = false;
        }
      }
    }

    bactrack(0);
    results.push(result.join('\n'));
  }

  return results.join(`\n`);
}

console.log(solution(input));
