function solution(m, n, board) {
    let map = board.map((a)=> a.split(""))
 
    let count = 0
    
    const dx = [0,1,1]
    const dy = [1,0,1]
    
    while(true){
        let isSame = new Set();
        // 지우기
        for(let i=0; i<m-1; i++){
            for(let j=0; j<n-1; j++){
                
                const value = map[i][j]
                
                if (!value) continue;
                let same = true
            
            for(let k=0; k<3; k++){
                const nx = i+dx[k]
                const ny = j+dy[k]
             
                if(value !== map[nx][ny]){
                    same = false
                    break
                }
            }
            if (same) {
                    // 배열 대신 문자열로 저장해야 중복이 제거됨
                    isSame.add(`${i},${j}`);
                    isSame.add(`${i + 0},${j + 1}`);
                    isSame.add(`${i + 1},${j + 0}`);
                    isSame.add(`${i + 1},${j + 1}`);
                }
        }
        }
        
        if(isSame.size == 0){
            break
        }
    
        for (let pos of isSame) {
            const [x, y] = pos.split(",").map(Number);
            if (map[x][y] !== null) {
                map[x][y] = null;
                count += 1;
            }
        }
    
        
  
    const isNotNullMap = []
    
    for(let j=0; j<n; j++){
        const arr =[]
        for(let i=0; i<m; i++){
            if(map[i][j] !== null){
                arr.push(map[i][j])
            }
        }
        isNotNullMap.push(arr)
    }
    
    const newMap = Array.from({length:n}, ()=> new Array(m).fill(null))
    
    for (let j = 0; j < n; j++) { 
        const columnData = isNotNullMap[j]; 
        for (let i = 0; i < columnData.length; i++) {
            newMap[m - 1 - i][j] = columnData[columnData.length - 1 - i];
    }
    }
    
    
        map = newMap.map((a)=> [...a])
        
    }
    
    
    
    
    
   return count
}