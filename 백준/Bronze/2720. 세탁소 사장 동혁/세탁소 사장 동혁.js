const input = require("fs").readFileSync("/dev/stdin").toString().trim();
function solution(input){
  const values = input.split(`\n`).splice(1).map(Number)
  const result = []
  const dividend = [25,10,5,1]
  
  for(let i=0; i<values.length; i++){
      const changeCounts = [0,0,0,0]
    for(let d=0; d<dividend.length; d++){
      while(values[i] >= dividend[d] ){
        changeCounts[d]++;
        values[i]-= dividend[d]
      }
    }
    result.push(changeCounts)
  }

  
  return result.map(counts => counts.join(' ')).join('\n')
}

console.log(solution(input))
