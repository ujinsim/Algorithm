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
               
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    while(queue.length){
        const [x,y,count] = queue.shift()
        
        if(x == targetX && y == targetY){
            return count
        }
        
        for(let i=0; i<4; i++){
            let nx = x;
            let ny = y;
            // 하나를 잡고 미끄러질 때까지 
            
            while(true){
                let nextX = nx + dx[i]
                let nextY = ny + dy[i]
                
                if(nextX < 0 || nextX >= N || nextY <0 || nextY >= M || map[nextX][nextY] == 'D' ){
                    break
                }
                
                nx = nextX
                ny = nextY
            }
            
            if(!visited[nx][ny]){
                visited[nx][ny] = true
                queue.push([nx,ny,count+1])
            }
        }
    }
    return -1 
}