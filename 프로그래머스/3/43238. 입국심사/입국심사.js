function solution(n, times) {
    // 특정 입국 심사시간이 됐을때 반환하기 
    
    let low = 0
    let high = Math.max(...times) * n
    let result = 0
    
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        let count = 0
    
        
        for(let i=0; i<times.length; i++){
            const time = times[i]
            count += Math.floor((mid / time))
        }
        
        
        if(count >= n){
            high = mid-1
            result = mid
        }
        else {
            low = mid+1
        }
    }
    
    return result
    
}