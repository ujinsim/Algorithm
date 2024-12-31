const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const words = input
  .split("\n")
  .slice(1)
  .map((e) => e.split(".")[1]);

function Result(words) {
  const result = {};

  for (const word of words) {
    result[word] = (result[word] || 0) + 1;
  }

  return result;
}

const sortedWords = words.sort();
const wordCounts = Result(sortedWords);

for (const [key, value] of Object.entries(wordCounts)) {
  console.log(`${key} ${value}`);
}
