const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const n = Number(parseInput[0]);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));

  let maxX = 0;
  let minX = Infinity;

  let max = 0;
  let maxArr = [];

  nums.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < nums.length; i++) {
    const [x, y] = nums[i];
    if (x > maxX) {
      maxX = x;
    }
    if (x < minX) {
      minX = x;
    }

    if (max < y) {
      max = y;
      maxArr = [x];
    } else if (max == y) {
      maxArr.push(x);
    }
  }
  const heights = new Array(maxX + 1).fill(0);
  nums.forEach(([x, y]) => {
    heights[x] = y;
  });

  const resultArr = new Array(maxX).fill(0);
  let frontIdx = minX;
  let backIdx = maxX;
  let maxLeft = 0;
  let maxRight = 0;

  for (let i = 0; i < maxArr.length; i++) {
    const mid = maxArr[i];
    resultArr[mid] = max;

    for (let l = frontIdx; l < mid; l++) {
      if (heights[l] > maxLeft) {
        maxLeft = heights[l];
      }
      resultArr[l] = maxLeft;
      frontIdx += 1;
    }

    for (let r = backIdx; r > mid; r--) {
      if (heights[r] > maxRight) {
        maxRight = heights[r];
      }
      resultArr[r] = maxRight;
      backIdx -= 1;
    }
  }

  let result = 0;

  for (let i = 0; i < resultArr.length; i++) {
    result += resultArr[i];
  }
  return result;
}

console.log(solution(input));
