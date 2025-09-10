function solution(board)
{
    let max = 0
    let maxCount = 0
    for(let i=1; i<board.length; i++){
        for(let j=1; j<board[i].length; j++){
        if(board[i][j] === 1){
            const up = board[i-1][j]
            const left = board[i][j-1]
            const upLeft = board[i-1][j-1]
            
            board[i][j] = Math.min(up,left,upLeft)+1
        }
        }
    }
    
    const maxVal = Math.max(...board.map((row)=> Math.max(...row)))
    

    
    
    return maxVal*maxVal
}