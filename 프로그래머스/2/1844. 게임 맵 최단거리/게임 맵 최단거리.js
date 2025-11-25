function solution(maps){
  const n = maps.length
  const m = maps[0].length 
  
  const visited = Array.from({length:n}, ()=>new Array(m).fill(false))
  const queue = []
  
  const nx = [1,-1,0,0]
  const ny = [0,0,1,-1]
  
  queue.push([0,0,1])
  visited[0][0] = true
  
  while(queue.length > 0){
      const [x,y,count] = queue.shift()

      if(x == n-1 && y == m-1){
          return count 
      }
      
      for(let i=0; i<4; i++){
          const dx = nx[i] + x
          const dy = ny[i] + y
          
          if(dx >= 0 && dx <n && dy>= 0 && dy<m && !visited[dx][dy] && maps[dx][dy] == 1){
              visited[dx][dy] = true
              queue.push([dx,dy,count+1])
          }
      }
  }
    return -1 

}