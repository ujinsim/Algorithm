const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const values = input.split(`\n`)
  let [num, won] = values[0].split(" ").map(Number)
  const counts = values.splice(1).map(Number).sort((a,b)=>b-a)
  
  let count = 0
  for(i of counts){
    while(won >= i) {
        won -= i
        count +=1
    }
  }
  
 return count
}

console.log(solution(input));
