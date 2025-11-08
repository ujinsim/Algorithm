const fs = require('fs');

// 표준 입력에서 N 값을 읽어옵니다.
const input = fs.readFileSync(0, 'utf8').trim();
const N = parseInt(input);

const solution = (N) => {
    // N이 1일 때의 초기값 처리
    if (N === 1) {
        return 3;
    }
    
    // N이 2일 때의 초기값 처리
    if (N === 2) {
        return 7;
    }

    const MOD = 9901;
    
    const dp = new Array(N).fill(0);
    

    dp[0] = 3; 
    dp[1] = 7; 


    for (let i = 2; i < N; i++) {
        dp[i] = (2 * dp[i - 1] + dp[i - 2]) % MOD;
    }
    return dp[N - 1];
};

console.log(solution(N));