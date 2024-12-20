const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on("line", (line) => {
  input = line;
});

rl.on("close", () => {
  const value = input.toUpperCase();

  let obj = {};
  for (const char of value) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }

  let max = 0;
  let result = "?";
  for (const char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      result = char;
    } else if (obj[char] === max) {
      result = "?";
    }
  }

  console.log(result);
});
