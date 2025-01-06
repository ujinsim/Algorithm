const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function Result(word, expWord) {
  let stack = [];

  for (let char of word) {
    stack.push(char);

    if (
      stack.length >= expWord.length &&
      stack.slice(-expWord.length).join("") === expWord
    ) {
      stack.splice(-expWord.length, expWord.length);
    }
  }

  return stack.length === 0 ? "FRULA" : stack.join("");
}

console.log(Result(input[0], input[1]));
