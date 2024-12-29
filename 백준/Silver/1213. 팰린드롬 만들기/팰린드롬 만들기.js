const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function Result(word) {
  const charCount = {};
  for (const char of word) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let oddCount = 0;
  let middle = "";
  const sortedChars = Object.keys(charCount).sort();
  for (const char of sortedChars) {
    if (charCount[char] % 2 !== 0) {
      oddCount++;
      middle = char;
    }
  }

  if (oddCount > 1) {
    return "I'm Sorry Hansoo";
  }

  let half = "";
  for (const char of sortedChars) {
    half += char.repeat(Math.floor(charCount[char] / 2));
  }

  return half + middle + half.split("").reverse().join("");
}

console.log(Result(input));
