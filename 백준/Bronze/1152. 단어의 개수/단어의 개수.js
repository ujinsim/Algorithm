const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let wordsArr = input.trim().split(" ");
let countOfWords = 0;

for (let i = 0; i < wordsArr.length; i++) {
  if (wordsArr[i] !== "") {
    countOfWords++;
  }
}

console.log(countOfWords);
