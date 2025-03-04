const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const IncludeWordsCount = (target, content) => {
  const words = new Set(target);
  let count = 0;

  content.forEach((word) => {
    if (words.has(word)) {
      count++;
    }
  });

  return count;
};

const [N, M] = input[0].split(" ").map(Number);
console.log(IncludeWordsCount(input.slice(1, N + 1), input.slice(N + 1)));
