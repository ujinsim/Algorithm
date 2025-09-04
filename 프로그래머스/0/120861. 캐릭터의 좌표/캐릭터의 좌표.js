function solution(keyinput, board) {
    
    const maxX = Math.round(board[0]/2)
    const maxY = Math.round(board[1]/2)
    const result = [0,0]
    
    for(i of keyinput){
        
        if(i == 'left' && result[0]-1 > -maxX){
            result[0] = result[0]-1
        }
         if(i == 'right' && result[0]+1 < maxX){
            result[0] = result[0]+1
        }
         if(i == 'up' && result[1]+1 < maxY ){
             result[1] = result[1]+1
            
        }
         if(i == 'down'&& result[1]-1 > -maxY){
             result[1] = result[1]-1
            
        }
    
    }
    return result

}