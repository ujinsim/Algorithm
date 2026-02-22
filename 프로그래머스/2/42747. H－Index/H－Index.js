function solution(citations) {
  // 이분탐색으로 간다 ㅅㄱ 
    
    
    let low = 0 
    let high = Math.max(...citations)
    let n = citations.length
    let result
    
    // n회 이상 인용되지 못했다면 high를 줄인다 
    
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        
        let count = 0
        let left = 0

        for(let i=0; i<n; i++){
            if(citations[i] >= mid){
                count +=1 
            }
            else {
                left +=1
            }
        }
        
        console.log(mid, left, count)
        
        if(count >= mid && left <= mid){
            low = mid + 1
            result = mid
        }
        else {
            high = mid - 1
        }
    }
    
    return result

}