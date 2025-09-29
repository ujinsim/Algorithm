function solution(n, computers) {
    let isVisitedCount = 0
    const visitedValue = new Set()
    let result = 0;
    
    function dfs(node){
        if(isVisitedCount == n){
            return result
        }
        visitedValue.add(node)
        isVisitedCount++
        for(let i=0; i<n; i++){
            if(i!==node && computers[node][i] === 1 && !visitedValue.has(i)){ 
                dfs(i)
            }
        }
    } 

    for(let i=0; i<computers.length; i++){
        if(!visitedValue.has(i)){ 
            result ++ 
            dfs(i)
        }
    }
    return result

} 