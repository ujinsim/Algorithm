const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const [n, m] = input.split(" ").map(Number);

let result = [];

function backtrack(value) {
  if (value.length === m) {
    result.push(value.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!value.includes(i)) {
      backtrack(value.concat(i));
    }
  }
}

backtrack([]);

console.log(result.join("\n"));
