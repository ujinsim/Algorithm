const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function processString(input) {
  const regExp = /<[^>]+>|[^<\s]+|\s+/g;
  let result = input.match(regExp).map((word) => {
    if (word.startsWith("<") || word.trim() === "") {
      return word;
    } else {
      return word.split("").reverse().join("");
    }
  });

  return result.join("");
}

console.log(processString(input));
