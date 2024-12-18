// 숫자의 합
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const target = input[1];

  const sum = target.split("").reduce((acc, num) => acc + parseInt(num, 10), 0);

  console.log(sum);
});
