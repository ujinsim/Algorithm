const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  let [initial, target] = input.split(" ").map(Number);
  let count = 1; 

  while (initial < target) {
    if (target % 10 === 1) {
      target = Math.floor(target / 10);
    } else if (target % 2 === 0) {
      target = target / 2;
    } else {
      return -1; 
    }
    count++;
  }

  return target === initial ? count : -1;
}


console.log(solution(input));  
