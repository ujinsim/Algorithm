function solution(N, road, K) {
  const graph = new Map()
  const costs = {}
  const visited = new Set()
  let result = 0
  
  for (const [a, b, c] of road) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push([b, c]);
    graph.get(b).push([a, c]);
  }
    
for (let i = 1; i <= N; i++) costs[i] = Infinity;
  costs[1] = 0;
  
  while(visited.size < N){
    let current = null
    let currentCost = Infinity
    
    for(let i = 1; i <= N; i++){
      if(!visited.has(i) && costs[i] < currentCost){
        current = i
        currentCost = costs[i]
      }
    }
    
    if (current === null) break;
    
    const neighbors = graph.get(current) || [];
    for (const [neighbor, w] of neighbors) {
      const newCost = costs[current] + w;
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    }
    visited.add(current)
  }
  
 for (let i = 1; i <= N; i++) {
  if (costs[i] <= K) result++;
}
    
  return result
}
