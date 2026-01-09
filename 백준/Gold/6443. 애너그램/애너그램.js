const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const words = parseInput.slice(1);
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].split('').sort();
    const n = word.length;

    const resultSet = new Set();
    const visited = new Array(n + 1).fill(false);
    const dist = [];

    function backtrack(depth) {
      if (depth === n) {
        resultSet.add(dist.join(''));
        return;
      }

      for (let j = 0; j < n; j++) {
        if (visited[j]) continue;

        if (j > 0 && word[j] === word[j - 1] && !visited[j - 1]) continue;

        visited[j] = true;
        dist.push(word[j]);
        backtrack(depth + 1);
        dist.pop();
        visited[j] = false;
      }
    }

    backtrack(0);
    result.push(Array.from(resultSet));
  }

  return result.map(a => a.join('\n')).join('\n');
}

console.log(solution(input));
