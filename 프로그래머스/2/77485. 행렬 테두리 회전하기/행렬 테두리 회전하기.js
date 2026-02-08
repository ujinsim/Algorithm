function solution(rows, columns, queries) {
    // 돌리기(시계방향으로 1번 껍질만) -> 작은 값 담기 
    
    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]
    
    const map = Array.from({ length: rows }, () => new Array(columns));
    
    let num = 1
    let result = []
    
    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            map[i][j] = num
            num++
        }
    }
    
    for(let query of queries){
        let [sx,sy,ex,ey] = query
        let min = Infinity
        
        sx-=1
        sy-=1
        ex-=1
        ey-=1
        
        let idx = 0
        let middle = new Set()
        
        for(let i=sx+1; i<ex; i++){
            for(let j=sy+1; j<ey; j++){
                middle.add(`${i},${j}`)
            }
        }
        
        let nx = sx 
        let ny = sy
            
        let prevalue = map[nx][ny]
        min = prevalue;
        
        while(idx < 4){

            let nextX = nx + dx[idx]
            let nextY = ny + dy[idx]
            
            if(nextX >= sx && nextX <= ex && nextY >= sy && nextY <= ey && !middle.has(`${nextX},${nextY}`)){
                const dist = map[nextX][nextY]
                min = Math.min(min, dist);
                map[nextX][nextY]= prevalue
                prevalue = dist 
                
                nx = nextX
                ny = nextY
            }
            else {
                idx++
            }
            
            
        }
        result.push(min)
    }
    
    return result
}