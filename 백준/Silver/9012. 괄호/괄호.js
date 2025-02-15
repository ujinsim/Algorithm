const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function isVPS(words) {
  let stack = [];
  let result = [];

  words.forEach((word) => {
    stack = [];
    for (let i = 0; i < word.length; i++) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] !== word[i] &&
        word[i] !== "("
      ) {
        stack.pop();
      } else {
        stack.push(word[i]);
      }
    }
    if (stack.length !== 0) {
      result.push("NO");
    } else {
      result.push("YES");
    }
  });

  return result;
}

console.log(isVPS(input.slice(1)).join("\n"));
