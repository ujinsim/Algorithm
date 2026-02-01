function solution(n, wires) {
    const tree = new Map()
    
    let result = Infinity
    
    for(let [n,v] of wires){
        if(!tree.has(n)) tree.set(n, [])
        tree.get(n).push(v)
        
        if(!tree.has(v)) tree.set(v, [])
        tree.get(v).push(n)
    }
    
    for(let i=0; i<wires.length; i++){
        const [cutOne, cutTwo] = wires[i]
        
        const visitedOne = new Array(n+1).fill(false)
        visitedOne[cutTwo] = true
        visitedOne[cutOne] = true
        let count1 = 0
        
        const visitedTwo = new Array(n+1).fill(false)
        visitedTwo[cutOne] = true
        visitedTwo[cutTwo] = true
         let count2 = 0
        
        // road 1 
        function dfs1(node, visited){
            
            const neighbors = tree.get(node) || []
            
            for(let neighbor of neighbors){
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    count1 ++
                    dfs1(neighbor, visited)
                }
            }
            
            return count1 
        }
        
        
        // road 2 
        function dfs2(node, visited){
            
            const neighbors = tree.get(node) || []
            
            for(let neighbor of neighbors){
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    count2 ++
                    dfs2(neighbor, visited)
                }
            }
            
            return count2
        }
        
        
        result = Math.min(Math.abs(dfs1(cutOne, visitedOne)-dfs2(cutTwo, visitedTwo)), result)

    }
    
    return result
    
}