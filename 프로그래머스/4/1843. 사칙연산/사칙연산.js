function solution(arr) {
    // 계산중 최댓값 
    const n = Math.floor((arr.length/2)) + 1
    const max_dp = Array.from({length:n}, ()=> new Array(n).fill(-Infinity))
    const min_dp = Array.from({length:n}, ()=> new Array(n).fill(Infinity))
    
    for(let i=0; i<arr.length; i++){
        if(i%2 == 0){
            max_dp[i/2][i/2] = Number(arr[i])
            min_dp[i/2][i/2] = Number(arr[i])
        }
    }
    
    for(let gap=1; gap<n; gap++){
        for(let i=0; i<n-gap; i++){
            let j = i+gap
            
            for(let k=i; k<j; k++){
                const opr = arr[k*2+1]
                
                if(opr == '+'){
                    max_dp[i][j] = Math.max(max_dp[i][k] + max_dp[k+1][j], max_dp[i][j])
                    min_dp[i][j] = Math.min(min_dp[i][k] + min_dp[k+1][j], min_dp[i][j]) 
                }
                
                if(opr == '-'){
                    max_dp[i][j] = Math.max(max_dp[i][k] - min_dp[k+1][j], max_dp[i][j])
                    min_dp[i][j] = Math.min(min_dp[i][k] - max_dp[k+1][j], min_dp[i][j]) 
                }
            }
        }
    }
    
    
    return max_dp[0][n-1]
    
}