function solution(n, computers) {
    
    const graph = {};
    const visited = Array(n).fill(false)
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    for (let j = 0; j < n; j++) {
      if (i !== j && computers[i][j] === 1) {
        graph[i].push(j);
      }
    }
  }
    
    function dfs(node) {
            visited[node] = true;
            for(let next of graph[node]){
                 if (!visited[next]) {
                dfs(next)
                 }
            }
        
    }
        let count = 0
        
        for(let i=0; i<n; i++) {
            
            if(!visited[i]){
                dfs(i)
                count++;
            }
        
}
    
    return count;
}

