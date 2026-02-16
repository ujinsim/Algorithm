function solution(arr) {
    const N = Math.ceil(arr.length/2)
    const min_dp = Array.from({length:N}, ()=> new Array(N).fill(Infinity))
    const max_dp = Array.from({length:N}, ()=> new Array(N).fill(-Infinity))
    
    for (let i = 0; i < N; i++) {
        max_dp[i][i] = Number(arr[i * 2]);
        min_dp[i][i] = Number(arr[i * 2]);
    }
    
    for(let gap=1; gap<N; gap++){
        for(let i=0; i<N-gap; i++){
            let j = i+gap
            
            for(let k=i; k<j; k++){
                const opr = arr[k*2 + 1]
                
                if(opr == '-'){
                    min_dp[i][j] = Math.min(min_dp[i][j], min_dp[i][k] - max_dp[k+1][j])
                    max_dp[i][j] = Math.max(max_dp[i][j], max_dp[i][k] - min_dp[k+1][j])
                }
                
                else if(opr == '+'){
                    min_dp[i][j] = Math.min(min_dp[i][j], min_dp[i][k] + min_dp[k+1][j])
                    max_dp[i][j] = Math.max(max_dp[i][j], max_dp[i][k] + max_dp[k+1][j])
                }
            }
        }
    }
    
    return max_dp[0][N-1]
}