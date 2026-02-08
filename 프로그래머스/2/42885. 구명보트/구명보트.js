function solution(people, limit) {
   //구명보트 개수의 최솟값
    
    people.sort((a,b)=> a-b)
    
    let low = 0
    let high = people.length-1
    let count = 0
    
    // 큰거 더하기 작은거 ? 
    
    while(low <=high){
        count ++
        let curW = 0
        
        if(people[high] + curW <= limit){
            curW += people[high]
            high -=1
        }
        
        if(people[low] + curW <= limit){
            curW += people[low]
            low +=1
        }
    
    }
    
    return count
    
}
