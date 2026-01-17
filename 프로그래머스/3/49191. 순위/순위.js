function solution(n, results) {
    // -1 -> 패배 , 1 -> 승리 
    
    const map = Array.from({length:n+1}, ()=> new Array(n+1).fill(Infinity))
    
    for(let i=0; i<results.length; i++){
        const [a,b] = results[i]
        map[a][b] = 1
        map[b][a] = -1
    }
    
    // 둘다 1이면 역방향은 -1 
    
    for(let i=1; i<=n; i++){
        map[i][i] = 0
}
    
    for(let k=1; k<=n; k++){
        for(let i=1; i<=n; i++){
            for(let j=1; j<=n; j++){
                if(map[i][k] == 1 && map[k][j] == 1){
                    map[i][j] = 1
                }
                if(map[i][k] == -1 && map[k][j] == -1){
                     map[i][j] = -1
                }
            }
        }
    }
    const order = new Array(n+1).fill(Infinity)
    
     for(let i=1; i<=n; i++){
         let isInfinity = false
         let count = 1
            for(let j=1; j<=n; j++){
                if(map[i][j] == Infinity){
                    isInfinity= true
                }
                else{
                    if(map[i][j] == -1){
                        count +=1
                    }
                }
            }
         if(!isInfinity){
             order[i] = count
         }
        }
    
    let result = 0
    
    for(let i=0; i<order.length; i++){
        if(order[i] !== Infinity){
            result+=1
        }
    }
    
    return result

}