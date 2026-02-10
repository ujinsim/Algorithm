function solution(n, costs) {
    
    costs.sort((a,b)=> a[2]-b[2])
    
    const p = Array.from({length:n}, (_,i)=> i)
    
    let cost = 0
    
    function find(a){
        if(p[a] == a){
           return a
        }   
        return p[a] = find(p[a])
    }
    
    function union(a,b,c){
        const rootA = find(a)
        const rootB = find(b)
        
        if(rootA !== rootB) {
            p[rootA] = rootB
            cost+=c
            return true
        }
        
        return false
    }
   
    
    for(let [n,v,c] of costs){
            union(n,v,c)
    }
    
    return cost
    
    
    
}

