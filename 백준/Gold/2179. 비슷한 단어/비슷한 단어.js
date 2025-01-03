const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function Result(words) {
  let max = -Infinity;
  let ans = [];

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const StringI = words[i];
      const StringJ = words[j];

      const len = getSameWordLength(StringI, StringJ);

      if (len > max) {
        max = len;
        ans = [i, j];
      } else if (len === max) {
        const [minIdx, maxIdx] = [Math.min(i, j), Math.max(i, j)];
        if (ans[0] > minIdx || (ans[0] === minIdx && ans[1] > maxIdx)) {
          ans = [minIdx, maxIdx];
        }
      }
    }
  }

  console.log(words[ans[0]]);
  console.log(words[ans[1]]);
}

const getSameWordLength = (str1, str2) => {
  const len = Math.min(str1.length, str2.length);
  let cnt = 0;

  for (let i = 0; i < len; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) break;
    cnt++;
  }
  return cnt;
};

Result(input.splice(1));
