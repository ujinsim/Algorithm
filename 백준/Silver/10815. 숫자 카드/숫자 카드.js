const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function IncludeWordsCount(target, content) {
  const targetSet = new Set(target.split(" "));
  const contentArray = content.split(" ");

  const result = contentArray.map((word) => (targetSet.has(word) ? 1 : 0));

  return result.join(" ");
}

console.log(IncludeWordsCount(input[1], input[3]));
