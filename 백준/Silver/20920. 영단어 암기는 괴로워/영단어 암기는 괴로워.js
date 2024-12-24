const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");

const n = parseInt(input[0].split(" ")[0], 10);
const m = parseInt(input[0].split(" ")[1], 10);
const words = [];

for (let i = 1; i <= n; i++) {
  words.push(input[i]);
}

const Solution = (n, m, words) => {
  words = words.filter((word) => word.length >= m);

  const frequencyMap = {};
  for (const word of words) {
    frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  }

  const sortedWords = Object.keys(frequencyMap).sort((a, b) => {
    // 1. 빈도수
    if (frequencyMap[b] !== frequencyMap[a]) {
      return frequencyMap[b] - frequencyMap[a];
    }
    // 2. 길이
    if (a.length !== b.length) {
      return b.length - a.length;
    }
    // 3. 사전순
    return a.localeCompare(b);
  });

  console.log(sortedWords.join("\n"));
};

Solution(n, m, words);
