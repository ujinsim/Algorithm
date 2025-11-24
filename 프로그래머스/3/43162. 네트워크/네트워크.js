function solution(n, computers){
    const graph = new Map()
    const visited = new Array(n).fill(false)
    
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
        for (let j = 0; j < n; j++) {
            if (i !== j && computers[i][j] === 1) {
                graph.get(i).push(j);
            }
        }
    }
    let count = 0
    
    function dfs(node) {
        visited[node] = true;
        const neighbors = graph.get(node) || [];
        for (const next of neighbors) {
            if (!visited[next]) dfs(next);
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }
    
    return count 
}
