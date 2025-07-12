function solution(board, moves) {
   
    const stack = []
    
    //0이 아니여야됨
    //가장 최상단이여야됨
    //0이아니라 1
    
    for(i of moves) {
        for(let j=0; j<board.length; j++) {
            if(board[j][i-1] !== 0 ) {
                stack.push(board[j][i-1])
                board[j][i-1] = 0
                break;
            }
        }
    }
    
    const arrs = []
    let result = 0
    
    for (const i of stack) {
    if (arrs.length > 0 && arrs[arrs.length - 1] === i) {
        arrs.pop();
        result += 2;
    } else {
        arrs.push(i);
    }
}
    
    
    return result
}