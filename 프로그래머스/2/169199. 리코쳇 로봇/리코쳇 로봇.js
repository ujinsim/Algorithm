function solution(board) {
    const N = board.length
    const M = board[0].length
    const map = board.map((a)=> a.split(""))
    const visited = Array.from({length:N}, ()=> new Array(M).fill(false))
    
    const queue = []
    let targetX = 0
    let targetY = 0
    
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            if(map[i][j] == 'R'){
                queue.push([i,j,0])
                visited[i][j] = true
            }
            if(map[i][j] == 'G'){
                targetX = i
                targetY = j
            }
        }
    }
    
    let dir = 0
               
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    while(queue.length){
        const [x,y,count] = queue.shift()
        
        if(x==targetX && y == targetY){
            return count
        }
        
        for(let i=0; i<4; i++){
            let nx = x
            let ny = y 
            
            while(true){
                const nextX = nx + dx[i]
                const nextY = ny + dy[i]
                
                if(nextX < 0 || nextX >= N || nextY < 0 || nextY >= M || map[nextX][nextY] === 'D'){
                    break
                }
                nx = nextX
                ny = nextY
            }
           if (!visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny, count + 1]);
        }
        }
    }
    
    return -1 
}