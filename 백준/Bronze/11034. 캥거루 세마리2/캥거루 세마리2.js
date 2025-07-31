const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  return input
    .trim()
    .split("\n")
    .map(line => {
      const [a, b, c] = line.split(" ").map(Number);
      return Math.max(b - a, c - b) - 1;
    })
    .join("\n");
}



console.log(solution(input));
