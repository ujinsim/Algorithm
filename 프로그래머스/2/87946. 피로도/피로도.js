function solution(k, dungeons) {
    let result = 0
    const n = dungeons.length
    const visited = Array(n).fill(false);
  
    function dfs(curK,count){
        result = Math.max(result, count);
      
      for(let i=0; i<n; i++){
        const [p,s] = dungeons[i]
          if(curK >= p && !visited[i]){
            visited[i] = true
            dfs(curK-s,count+1)
            visited[i] = false
        }
      }
    }
    
    dfs(k,0)
    
    return result
}
