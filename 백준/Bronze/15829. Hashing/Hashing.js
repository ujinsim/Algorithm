const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

function solution(input) {
  const [n, word] = input.split('\n');
  let result = 0;
  let multiple = 1;
  const mod = 1234567891;

  for (let i = 0; i < word.length; i++) {
    const value = word[i].charCodeAt(0) - 96;
    result = (result + value * multiple) % mod;
    multiple = (multiple * 31) % mod;
  }

  console.log(result);
}

solution(input);
