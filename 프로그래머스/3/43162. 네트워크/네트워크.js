function solution(n, computers){
  const tree = new Map()
  let count = 0
  
  for(let i=0; i<computers.length; i++){
    for(let j=0; j<computers[i].length; j++){
      if(j !== i && computers[i][j] === 1){
        if(!tree.has(i)) tree.set(i,[])
        tree.get(i).push(j)
     
        
      }
    }
  }
  
  const visited = new Set()
  const queue = []

  for(let i=0; i<n; i++){
    if(!visited.has(i)){
      count++
      queue.push(i)
      visited.add(i)
      bfs()
    }
  }
  
 function bfs(){
   while(queue.length > 0){
   const value = queue.shift()
   const neighbors = tree.get(value) || []

    for(let i=0; i<neighbors.length; i++){
      if(!visited.has(neighbors[i])){
        queue.push(neighbors[i])
        visited.add(neighbors[i])
      }
    }
}
 }

  

  return count
}
