const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function CaseCount(input) {
  let lines = input.split("\n").slice(1);
  let result = [];

  while (lines.length > 0) {
    let lineCount = parseInt(lines[0]);
    lines.shift();

    let wears = {};

    for (let i = 0; i < lineCount; i++) {
      if (!lines[i]) continue;
      const [word, category] = lines[i].split(" ");

      if (!wears[category]) {
        wears[category] = [];
      }
      wears[category].push(word);
    }

    let combinations =
      Object.values(wears).reduce((acc, arr) => acc * (arr.length + 1), 1) - 1;
    result.push(combinations);

    lines.splice(0, lineCount);
  }

  return result.join("\n");
}

console.log(CaseCount(input));
