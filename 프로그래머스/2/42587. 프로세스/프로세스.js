function solution(priorities, location){
  const queue = [...priorities]
  const n = priorities.length
  
  const sorted = queue.sort((a,b)=> b-a)
  let maxIdx = 0
  
  const visited = new Array(n).fill(false)
  let visitOrder = 1
  
  while(maxIdx <= n-1){
      for(let i=0; i<n; i++){
          if(priorities[i] == sorted[maxIdx] && !visited[i]){
              visited[i] = visitOrder
              visitOrder +=1
              maxIdx+=1
          }
      }
  }
  
  return visited[location]
}

