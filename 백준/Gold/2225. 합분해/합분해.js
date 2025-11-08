const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

function solution(input) {
    const N = parseInt(input[0]);
    const K = parseInt(input[1]);
    const MOD = 1000000000;
    
    const dp = Array.from({ length: K + 1 }, () => new Array(N + 1).fill(0));

    for (let j = 0; j <= N; j++) {
        dp[1][j] = 1;
    }

    for (let i = 0; i <= K; i++) {
        dp[i][0] = 1;
    }

    for (let i = 2; i <= K; i++) { 
        for (let j = 1; j <= N; j++) { 
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
        }
    }

    console.log(dp[K][N]);
}

solution(input);