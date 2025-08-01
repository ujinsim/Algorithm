const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]);
  const heights = lines[1].split(' ').map(Number);

  let pushCount = 0;
  let idx = 0;

  while (idx < n) {
    pushCount++;
    let curHeight = heights[idx];
    idx++;


    while (idx < n && heights[idx] < curHeight) {
      curHeight = heights[idx];
      idx++;
    }
  }

  return pushCount;
}


console.log(solution(input)); 

