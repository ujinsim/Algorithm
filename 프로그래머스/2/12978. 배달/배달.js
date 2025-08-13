function solution(N, road, K) {
    // 완조니 다익스트라 알고리즘 

    // K를 넘지하는 길이로 갈수 있는 경로를 찾기
    // 최단으로 다 찾고 안넘으면 filter해서 주기 
    
    //graph, cost, prev, visited 
    
    const graph = {}
    const cost = {}
    const visited = new Set()
    const prev = {}
    const start = 1
    let result = 0
    
    for (let i = 0; i < road.length; i++) {
        const [from, to, weight] = road[i];
        if (!graph[from]) graph[from] = {};
        if (!graph[to]) graph[to] = {};
        if (!graph[from][to] || graph[from][to] > weight) graph[from][to] = weight;
        if (!graph[to][from] || graph[to][from] > weight) graph[to][from] = weight;

    }
    
    
    for (let i = 1; i <= N; i++) {
        cost[i] = Infinity; 
        prev[i] = null;     
    }
    cost[start] = 0;
    
    while (visited.size < N) { 
        // 방문안한거에서 가장 작은거 찾기
        let current = null;  
        let currentCost = Infinity; 
        
        for (let node in cost) {
            if (!visited.has(Number(node)) && cost[node] < currentCost) {
                current = Number(node);
                currentCost = cost[node];
            }
        }
        
        // 더 이상 방문할 노드가 없으면 종료
        if (current === null) break;
        
        // 찾은거 주변 비용 업데이트 적다면
        for (let neighbor in (graph[current] || {})) { 
            const newCost = cost[current] + graph[current][neighbor];
            if (newCost < cost[neighbor]) { 
                cost[neighbor] = newCost;
                prev[neighbor] = current;
            }
        }
        visited.add(current);
    }
    
    for (let node in cost) {
    if (cost[node] <= K) result++;
}

    return result;
}
