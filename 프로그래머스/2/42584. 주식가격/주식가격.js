function solution(prices){
    const n = prices.length 
    const result = new Array(n).fill(0)
    
    for(let i=0; i<n; i++){
        let count = 0
        for(let j=i+1; j<n; j++){
           
            if(prices[i] <= prices[j]){
                count ++
            }
            else{
                result[i] = count+1
                break
            }
            result[i] = count 
        }
    }
    return result
}