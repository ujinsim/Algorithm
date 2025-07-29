const input = require("fs").readFileSync("/dev/stdin").toString().trim();
function solution(input){
  const result = [0,0,0]
  const values = [300, 60, 10]
  
  for(let i=0; i<values.length; i++){
    while(values[i] <= input){
      result[i] +=1
      input -= values[i]
    }
  }
  
  return input === 0 ? result.join(" ") : -1;
}


console.log(solution(input))
