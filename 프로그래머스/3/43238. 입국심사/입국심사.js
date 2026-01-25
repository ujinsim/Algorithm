function solution(n, times) {
    times.sort((a,b)=> a-b)
    let left = 1
    let right = times[times.length-1] * n
    // 시간이 최소인데 최대의 명을 쳐내야댐 
    while(left<=right){
        const mid = Math.floor((left+right)/2) // n분
        let sum = 0
        
        // 시간 구하기 
        for(let t of times){
            // n분이 주어졌을때 각 심사위원이 쳐낼수있는 최대 사람 
            sum += Math.floor(mid/t)
        }
        
        if(sum < n){
            left = mid+1
        }
        else {
            right = mid-1
        }
    }
    
    return left
}