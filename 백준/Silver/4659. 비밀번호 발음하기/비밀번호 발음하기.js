const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  if (line.trim() === "end") {
    rl.close();
  } else {
    input.push(line.trim());
  }
});

rl.on("close", () => {
  const vowels = ["a", "e", "i", "o", "u"];

  input.forEach((word) => {
    let hasVowel = false;
    let isAcceptable = true;
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const isVowel = vowels.includes(char);

      if (isVowel) {
        hasVowel = true;
        vowelCount++;
        consonantCount = 0;
      } else {
        consonantCount++;
        vowelCount = 0;
      }

      if (vowelCount >= 3 || consonantCount >= 3) {
        isAcceptable = false;
        break;
      }

      if (
        i > 0 &&
        word[i] === word[i - 1] &&
        !(word[i] === "e" || word[i] === "o")
      ) {
        isAcceptable = false;
        break;
      }
    }

    if (!hasVowel) {
      isAcceptable = false;
    }

    if (isAcceptable) {
      console.log(`<${word}> is acceptable.`);
    } else {
      console.log(`<${word}> is not acceptable.`);
    }
  });
});
