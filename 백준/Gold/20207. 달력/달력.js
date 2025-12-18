const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

function solution(input) {
  const lines = input.trim().split("\n");
  const n = Number(lines[0]);
  const calendar = new Array(367).fill(0);

  for (let i = 1; i <= n; i++) {
    const [start, end] = lines[i].split(' ').map(Number);
    for (let j = start; j <= end; j++) {
      calendar[j]++;
    }
  }

  let totalArea = 0;
  let currentWidth = 0;
  let maxHeight = 0;
  
  for (let i = 1; i <= 366; i++) {
    if (calendar[i] > 0) {
      currentWidth++;
      maxHeight = Math.max(maxHeight, calendar[i]);
    } else {
      if (currentWidth > 0) {
        totalArea += currentWidth * maxHeight;
        currentWidth = 0;
        maxHeight = 0;
      }
    }
  }

  if (currentWidth > 0) {
    totalArea += currentWidth * maxHeight;
  }

  console.log(totalArea);
}

solution(input);