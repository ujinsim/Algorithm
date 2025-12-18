const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [H, W] = input[0].split(' ').map(Number);
const heights = input[1].split(' ').map(Number);

function solution(H, W, heights) {
  let totalWater = 0;

  for (let i = 1; i < W - 1; i++) {
    let maxLeft = 0;
    let maxRight = 0;

    for (let j = 0; j < i; j++) {
      maxLeft = Math.max(maxLeft, heights[j]);
    }

    for (let j = i + 1; j < W; j++) {
      maxRight = Math.max(maxRight, heights[j]);
    }

    const minHeight = Math.min(maxLeft, maxRight);

    if (minHeight > heights[i]) {
      totalWater += minHeight - heights[i];
    }
  }

  console.log(totalWater);
}

solution(H, W, heights);