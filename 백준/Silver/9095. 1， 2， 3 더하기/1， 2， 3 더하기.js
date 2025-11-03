const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution() {
    const N = Number(input[0]);
    const nums = input.slice(1).map(Number);
    const maxTarget = Math.max(...nums);
    const dp = new Array(maxTarget + 1).fill(0);

    dp[1] = 1;
    
    if (maxTarget >= 2) {
        dp[2] = 2;
    }
    
    if (maxTarget >= 3) {
        dp[3] = 4;
    }

    for (let i = 4; i <= maxTarget; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    
    const results = [];
    for (let i = 0; i < N; i++) {
        results.push(dp[nums[i]]); 
    }
    

    console.log(results.join('\n'));
}

solution();