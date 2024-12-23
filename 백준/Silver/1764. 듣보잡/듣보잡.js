const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let N, M;

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  [N, M] = input[0].split(" ").map(Number);
  const unheard = new Set(input.slice(1, N + 1));
  const unseen = input.slice(N + 1);

  const result = unseen.filter((name) => unheard.has(name));
  result.sort();

  console.log(result.length);
  console.log(result.join("\n"));
});
