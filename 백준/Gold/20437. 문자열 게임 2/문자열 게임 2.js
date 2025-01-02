const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.slice(1);

function Result(word, num) {
  let wordCount = {};

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    wordCount[char] = (wordCount[char] || 0) + 1;
  }

  const validChars = Object.keys(wordCount).filter(
    (char) => wordCount[char] >= num
  );

  if (validChars.length === 0) {
    return -1;
  }

  let minLength = Infinity;
  let maxLength = -Infinity;

  for (const char of validChars) {
    let indices = [];

    for (let i = 0; i < word.length; i++) {
      if (word[i] === char) indices.push(i);
    }

    if (indices.length < num) continue;

    for (let i = 0; i <= indices.length - num; i++) {
      const length = indices[i + num - 1] - indices[i] + 1;
      minLength = Math.min(minLength, length);
      maxLength = Math.max(maxLength, length);
    }
  }

  return minLength === Infinity || maxLength === -Infinity
    ? -1
    : [minLength, maxLength];
}

function print(result) {
  if (result === -1) {
    return "-1";
  } else {
    return `${result[0]} ${result[1]}`;
  }
}

for (let i = 0; i < input.length; i += 2) {
  const word = input[i];
  const num = Number(input[i + 1]);
  const result = Result(word, num);
  console.log(print(result));
}
