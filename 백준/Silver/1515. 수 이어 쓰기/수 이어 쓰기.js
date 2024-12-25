const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();

function isSubsequence(full, sub) {
  let i = 0, j = 0;
  while (i < full.length && j < sub.length) {
    if (full[i] === sub[j]) j++;
    i++;
  }
  return j === sub.length;
}

function findMinimumN(subsequence) {
  let left = 1, right = 10 ** 6; 
  let result = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const fullSequence = Array.from({ length: mid }, (_, i) => i + 1).join("");
    if (isSubsequence(fullSequence, subsequence)) {
      result = mid; 
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

console.log(findMinimumN(input));
