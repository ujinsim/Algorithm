const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(input){
  const [N,K] = input.split(" ").map(Number)
  
  const time = new Array(100001).fill(Infinity);

  const queue = []
  queue.push([N,0])
  time[N] = 0; 

  while(queue.length){
      const [current, count] = queue.shift()

      if (time[current] < count) continue;

      if(current === K){
          return count
      }

      if(current * 2 <= 100000 && time[current * 2] > count){
        time[current * 2] = count; 
        queue.unshift([current * 2, count]);
      }
      
      if(current + 1 <= 100000 && time[current + 1] > count + 1){
        time[current + 1] = count + 1; 
        queue.push([current + 1, count + 1]);
      }
      
      if(current - 1 >= 0 && time[current - 1] > count + 1){
        time[current - 1] = count + 1; 
        queue.push([current - 1, count + 1]);
      }
  }
}

console.log(solution(input));