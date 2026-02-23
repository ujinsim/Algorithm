function solution(arr) {
    
    // 나의 구역이 하나라도 다르면 압축 
    
    let count = [0,0]
    let n = arr.length
    
    function isSame(x1,y1,x2,y2){
        let t = arr[x1][y1]
        
        for(let i=x1; i<x2; i++){
            for(let j=y1; j<y2; j++){
                if(arr[i][j] !== t){
                    return false
                    break
                } 
            }
        }
        return t == 1 ? 1 : 2
    }
    
    function recursive(x1,y1,x2,y2,size){
        
        const ns = size/2
        
        // 같으면 +1 아니면 분할정복 
        const r = isSame(x1,y1,x2,y2)
        
        if(r !== false){
            if(r == 1){
                count[1] += 1
            }
            else {
                count[0] +=1
            }
        }
        else {
            recursive(x1,y1,x2-ns, y2-ns, ns)
            recursive(x1,y1+ns,x2-ns, y2, ns)
            recursive(x1+ns,y1,x2, y2-ns, ns)
            recursive(x1+ns,y1+ns,x2, y2, ns)
        }
        
    }
    
    recursive(0,0,n,n,n)
    
    return count
}