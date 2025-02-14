const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function countGoodWords(words) {
  let count = 0;

  words.forEach((word) => {
    const stack = [];
    
    for (const char of word) {
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }

    if (stack.length === 0) {
      count++;
    }
  });

  return count;
}

console.log(countGoodWords(input.slice(1)));
