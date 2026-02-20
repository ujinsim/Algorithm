function solution(m, n, puddles) {
   const mod = 1000000007
    
    //최단경로의 개수
    
    const puddleSet = new Set()
    const dp = Array.from({length:n}, ()=> new Array(m).fill(0))
    
    dp[0][0] = 1
    
    for(let i=0; i<puddles.length; i++){
        const [x,y] = puddles[i]
        dp[y - 1][x - 1] = -1;
    }
    
    //오른쪽과 아래쪽으로만 움직여
    
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
         if (dp[i][j] === -1) {
                dp[i][j] = 0; 
                continue;
            }
             
             if (j > 0) {
                dp[i][j] += (dp[i][j - 1] % mod);
            }
            if (i > 0) {
                dp[i][j] += (dp[i - 1][j] % mod);
            }
        }
    }

    return dp[n-1][m-1]%mod
}