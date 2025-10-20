const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const word = input[0];
const wordCount = parseInt(input[1]);
const words = input.slice(2, 2 + wordCount);

for (let i = 0; i < 26; i++) {
  let converted = '';

  for (let j = 0; j < word.length; j++) {
    const code = word[j].charCodeAt(0) - i;
    const wrapped = code < 97 ? code + 26 : code;
    converted += String.fromCharCode(wrapped);
  }

  for (let k = 0; k < wordCount; k++) {
    if (converted.includes(words[k])) {
      console.log(converted);
      process.exit(0);
    }
  }
}
