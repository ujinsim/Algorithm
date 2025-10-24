const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

function solution(input) {
  const parsedInput = input.trim().split('\n');
  const n = Number(parsedInput[0]);
  const m = Number(parsedInput[1]);
  const p = parsedInput[2];

  let result = 0;
  let currentIndex = 0;
  let cnt = 0; 

  while (currentIndex < p.length - 2) {
    if (p[currentIndex] === 'I' && p.slice(currentIndex, currentIndex + 3) === 'IOI') {
      currentIndex += 2;
      cnt += 1;

      if (cnt === n) {
        result += 1;
        cnt -= 1; 
      }
    } else {
      currentIndex += 1;
      cnt = 0;
    }
  }

  console.log(result);
}

solution(input);
