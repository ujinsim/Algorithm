function solution(n, results) {
   
    //만약 A 선수가 B 선수보다 실력이 좋다면 A 선수는 B 선수를 항상 이깁니다
    //정확하게 순위를 매길 수 있는 선수의 수를 return 하도록 
    
    // 다익스트라 
    
    // 누구한테 졌는지를 다 나타내고 -> 나를 제외한 칸이 채워져있다면 등수를 알 수 있음 
    // 추가적으로 알 수 있는 정보가 있는지 확인 
    
    const graph = Array.from({length:n}, ()=> new Array(n).fill(Infinity))
    
    // [a,b] (이긴(1), 진(-1)) -> i가 k한테 지고 k가 j한테 졌으면 i도 j한테 짐 
    
    for(let [w,l] of results){
        graph[w-1][l-1] = 1
        graph[l-1][w-1] = -1
    }
    
    for(let k=0; k<n; k++){
        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                if(i!==j){
                    if(graph[i][k] == -1 && graph[k][j] == -1){
                        graph[i][j] = -1
                    }
                    
                     if(graph[i][k] == 1 && graph[k][j] == 1){
                        graph[i][j] = 1
                    }
                }
            }
        }
    }
    
    let count = 0
    
    for(let i=0; i<n; i++){
        let cur = 0
        
        for(let j=0; j<n; j++){
            if(graph[i][j] !== Infinity){
                cur+=1
            }
        }
        
        if(cur == n-1){
            count +=1
        }
    }
    
    
    for(let g of graph){
        console.log(g)
    }

    return count
}