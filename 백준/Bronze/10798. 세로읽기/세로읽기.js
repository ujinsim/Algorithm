const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let maxLength = 0;
  for (st of input) {
    if (maxLength < st.length) {
      maxLength = st.length;
    }
  }
  let result = [];
  for (let i = 0; i < maxLength; i++) {
    for (st of input) {
      if (st[i] !== undefined) {
        result.push(st[i]);
      }
    }
  }

  console.log(result.join(""));
});
