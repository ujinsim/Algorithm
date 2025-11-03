const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution() {

    const N = Number(input[0]); 
    const arr = input.slice(1).map(line => line.split(' ').map(Number));
    const dp = Array.from({length: N}, () => Array(3).fill(0));

    dp[0][0] = arr[0][0]; 
    dp[0][1] = arr[0][1]; 
    dp[0][2] = arr[0][2]; 
    for (let i = 1; i < N; i++) {
        dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
        dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][0]) + arr[i][2];
    }
    console.log(Math.min(...dp[N - 1]));
}

solution();