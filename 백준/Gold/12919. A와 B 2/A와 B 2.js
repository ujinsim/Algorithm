const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const [word1, word2] = input.split('\n');
  let answer = 0;
  const visited = new Set();

  function recursive(word) {
    if (answer === 1) return;
    if (word.length < word1.length) return;
    if (visited.has(word)) return;

    visited.add(word);

    if (word === word1) {
      answer = 1;
      return;
    }

    if (word[word.length - 1] === 'A') {
      recursive(word.slice(0, -1));
    }

    if (word[0] === 'B') {
      const nextWord = word.slice(1).split('').reverse().join('');
      recursive(nextWord);
    }
  }

  recursive(word2);
  return answer;
}

console.log(solution(input));
