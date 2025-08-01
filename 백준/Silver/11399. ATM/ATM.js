const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const result = []
  const values = input.split("\n")[1].split(" ").map(Number).sort((a, b) => a - b)
  let sum = 0
  let result_sum = 0
  for (i of values){
    sum+=i
    result.push(sum)
  
  }
  
  for(i of result){
    result_sum +=i
  }
  
 return result_sum
}


console.log(solution(input));
