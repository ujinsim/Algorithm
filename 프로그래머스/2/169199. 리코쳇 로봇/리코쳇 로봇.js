function solution(board) {
    const N = board.length
    const M = board[0].length
    const map = board.map((a)=> a.split(""))
    
    // BFS인데 밀어넣기로 가는 재질!
    
    let sx,sy,ex,ey
    
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            if(map[i][j] == 'R'){
                sx = i
                sy = j
            }
            
            if(map[i][j] == 'G'){
                ex = i
                ey = j
            }
        }
    }
    
    const queue = [[sx,sy,0]]
    const visited  = Array.from({length:N}, ()=> new Array(M).fill(false))
    visited[sx][sy] = true
    
    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]
    
    while(queue.length){
        const [x,y,count] = queue.shift()
        
        if(x == ex && y == ey){
            return count 
        }
        
        for(let i=0; i<4; i++){
            // 한 방향으로 밀어 붙이기 
            let nx = x 
            let ny = y 
            
            
            while(true){
                const nextX = nx + dx[i];
                const nextY = ny + dy[i];
                
               if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= M || map[nextX][nextY] === 'D') {
                   break
                }
                else {
                    nx = nextX
                    ny = nextY
                }
            }
            
            if(!visited[nx][ny]){
                visited[nx][ny] = true
                queue.push([nx,ny,count+1])
            }
        }

    }
    
    return -1
}