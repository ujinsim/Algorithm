function solution(n) {
  let result = 0
  const pos = Array(n).fill(-1)
  
  function isValid(row,col){
      for(let i=0; i<row; i++){
          const c = pos[i]
          
          if(c === col || Math.abs(col-c) === Math.abs(row-i)) return false
      }
      
      
      
      return true
  }
  
  function dfs(row){
      
    if(row === n){
        result +=1
        return; 
    }  
      
    for(let i=0; i<n; i++){
        if(!isValid(row, i)) continue; 
        pos[row] = i
        dfs(row+1)
        pos[row] = -1
    }  
  }
    
  dfs(0)  
  return result
}
