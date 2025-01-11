const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function bigCount(num, members) {
  members = members.map((line) => line.split(" ").map(Number));
  const ranks = Array(num).fill(1);

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i !== j) {
        if (members[i][0] < members[j][0] && members[i][1] < members[j][1]) {
          ranks[i]++;
        }
      }
    }
  }

  return ranks.join(" ");
}

const num = parseInt(input[0], 10);
const members = input.slice(1);
console.log(bigCount(num, members));
