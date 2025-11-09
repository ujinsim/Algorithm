function solution(input) {
    const parseInput = input.split('\n').filter(line => line.trim().length > 0).map(Number);
    
    const nums = parseInput.slice(1);
    
    const max = Math.max(...nums);
 
    const dp = new Array(max + 1).fill(0n);
    
    if (max >= 1) dp[1] = 1n;
    if (max >= 2) dp[2] = 1n;
    if (max >= 3) dp[3] = 1n;
    if (max >= 4) dp[4] = 2n;
    if (max >= 5) dp[5] = 2n;
    
    for (let i = 6; i <= max; i++) {
        dp[i] = dp[i - 2] + dp[i - 3];
    }
    
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        result.push(dp[nums[i]].toString());
    }
    
    return result.join('\n');
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim(); 

console.log(solution(input));