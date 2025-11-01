function solution(rectangle, characterX, characterY,itemX,itemY){

  
  const dx = [1,-1,0,0]
  const dy = [0,0,1,-1]
  
  
  const MAX_COORD = 51 * 2; 
  
  const arr = Array.from({ length: MAX_COORD }, () => new Array(MAX_COORD).fill(0));

    const visited = Array.from({ length: MAX_COORD }, () => new Array(MAX_COORD).fill(false));
  
  for (let i = 0; i < rectangle.length; i++) {
        const [o, t, r, f] = rectangle[i].map((x) => x * 2);

   
        for (let x = o; x <= r; x++) {
            for (let y = t; y <= f; y++) {
                
                if (x === o || x === r || y === t || y === f) {
                   
                    if (arr[y][x] !== 2) { 
                        arr[y][x] = 1; 
                    }
                } 
              
                else {
                    arr[y][x] = 2; 
                }
        }
    }
    }
    
    const startX = characterX * 2;
    const startY = characterY * 2;
    const targetX = itemX * 2;
    const targetY = itemY * 2;
    
    const queue = []
    queue.push([startX, startY, 0])
    visited[startY][startX] = true;
    
    while(queue.length){
      const [x,y,dist] = queue.shift()
      
      if(x == targetX && y == targetY){
        return dist/2
      }
      
      for(let i=0; i<4; i++){
        const nx = dx[i] + x
        const ny = dy[i] + y
        
        if (nx >= 0 && nx < MAX_COORD && ny >= 0 && ny < MAX_COORD && !visited[ny][nx]) {
          if(arr[ny][nx] === 1){
            visited[ny][nx] = true
            queue.push([nx,ny,dist+1])
          }
        }
      }
      
      
    }
    return 0
 
  
}


