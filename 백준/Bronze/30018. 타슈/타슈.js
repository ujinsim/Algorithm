const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
 
  const list = input.split('\n').splice(1)
  let result = 0
  const value1 = list[0].split(" ").map(Number)
  const value2 = list[1].split(" ").map(Number)
  
  for(let i=0; i<value1.length; i++){
    if(value1[i]<value2[i]){
      result += value2[i]-value1[i]
    }
  }
  
  return result
}



console.log(solution(input))
