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
  const T = parseInt(input[0], 10);
  const results = [];

  for (let i = 1; i <= T; i++) {
    const sentence = input[i];
    const frequency = {};

    // 각 문자의 빈도 계산 (공백 제외)
    for (const char of sentence) {
      if (char !== " ") {
        frequency[char] = (frequency[char] || 0) + 1;
      }
    }

    // 가장 빈번한 문자를 찾기
    let maxCount = 0;
    let maxChar = "?";

    for (const [char, count] of Object.entries(frequency)) {
      if (count > maxCount) {
        maxCount = count;
        maxChar = char;
      } else if (count === maxCount) {
        maxChar = "?"; // 동일 빈도의 문자
      }
    }

    results.push(maxChar);
  }
  console.log(results.join("\n"));
});
