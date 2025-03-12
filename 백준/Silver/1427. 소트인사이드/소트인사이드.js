const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function Sort(nums) {
  const numsSplit = nums[0].split("").map(Number);
  const sortNums = numsSplit.sort((a, b) => {
    return b - a;
  });
  return sortNums.join("");
}

console.log(Sort(input));
