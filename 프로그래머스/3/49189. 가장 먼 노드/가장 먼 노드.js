function solution(n, edge) {
    const graph = new Map()
    
    for(let [v,c] of edge){
        if(!graph.has(v)) graph.set(v,[])
        graph.get(v).push(c)
        
        if(!graph.has(c)) graph.set(c,[])
        graph.get(c).push(v)
    }
    
    let max= -Infinity
    let maxArr = new Set()
    const visited = new Array(n+1).fill(false)
    visited[1] = true
    const queue = [[1,0]]
    
    while(queue.length){
        const [node, count] = queue.shift()
        
        
        const neighbors = graph.get(node) || []
        
        for(let neighbor of neighbors){
            if(!visited[neighbor]){
                visited[neighbor] = true
                queue.push([neighbor,count+1])
                
                if(max < count){
                    max = count
                    maxArr = new Set()
                    maxArr.add(neighbor)
                }
                
                if(max == count){
                    maxArr.add(neighbor)
                }
            }
        }
        
    }
    
    
    
    return maxArr.size
}