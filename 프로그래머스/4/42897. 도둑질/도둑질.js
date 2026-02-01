function solution(money) {
   // 1을 털면 2를 못턺 
  // 1을 털면 n을 못턺 
    
    const n = money.length 
    
    const dp1 = new Array(n).fill(0)
    dp1[0] = money[0]
    dp1[1] = Math.max(money[1], money[0])
    // 처음걸 선택하는 경우 
    
    for(let i=2; i<n-1; i++){
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + money[i])
    }
    
    const dp2 = new Array(n).fill(0)
    dp2[n-1] = money[n-1]
    dp2[n-2] = Math.max(money[n-2], money[n-1])
 
    for(let i=n-3; i>=1; i--){
        dp2[i] = Math.max(dp2[i+1], dp2[i+2]+money[i])
    }
    
    return Math.max(dp1[n-2],dp2[1])
}

//인접한 두 집을 털면 경보가 울립니다.
//각 집에 있는 돈이 담긴 배열 money가 주어질 때, 도둑이 훔칠 수 있는 돈의 최댓값을 return 