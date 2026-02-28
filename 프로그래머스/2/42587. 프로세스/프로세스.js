function solution(priorities, location){
  const sorted = [...priorities].sort((a,b) => b-a)
  const n = priorities.length
  const visited = new Array(n).fill(false)
  let curIdx = 0
  // visited에 방문번호 남기기 
  // 방문하면 다음거 방문하기 
  
  while(curIdx < n){
      for(let i=0; i<priorities.length; i++){
          if(priorities[i] == sorted[curIdx]){
              visited[i] = curIdx 
              curIdx ++
          }
      }
  }
  
  return visited[location] + 1
}

