const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(input) {
  let maxResult = 0;
  let minResult = Infinity;

  function countOdds(num) {
    let count = 0;
    for (let i = 0; i < num.length; i++) {
      if (parseInt(num[i]) % 2 === 1) {
        count += 1;
      }
    }
    return count;
  }

  function recursive(num, totalCount) {
    let currentCount = countOdds(num);
    let cumulativeCount = totalCount + currentCount;

    if (num.length === 1) {
      maxResult = Math.max(maxResult, cumulativeCount);
      minResult = Math.min(minResult, cumulativeCount);
      return;
    }

    if (num.length === 2) {
      const nextNum2 = Number(num[0]) + Number(num[1]);
      recursive(String(nextNum2), cumulativeCount);
    } else {
      for (let i = 1; i < num.length - 1; i++) {
        for (let j = i + 1; j < num.length; j++) {
          const a = num.slice(0, i);
          const b = num.slice(i, j);
          const c = num.slice(j);
          const nextNum = Number(a) + Number(b) + Number(c);
          recursive(String(nextNum), cumulativeCount);
        }
      }
    }
  }

  recursive(input, 0);
  console.log(`${minResult} ${maxResult}`);
}

solution(input);