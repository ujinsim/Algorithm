function solution(n, k) {
    
    const nums = n.toString(k).split(0).map(Number)
    console.log(nums)
    let count = 0
    
    function isPrime(n){
        console.log(n)
        if(n == 1) return false
        if(n == 2) return true
        if (n % 2 === 0) return false
        
        // 나눴을때 1이랑 지 자신밖에 안나오는거 
        for(let i=2; i<=Math.sqrt(n); i++){
            
            if(n % i === 0){
                return false
            }
        }
        
        return true
        
    }
    
    for(let i of nums){
        if(isPrime(i)){
            count+=1
        }
    }
    
    return count
}