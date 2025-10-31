const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const result = []; 

for (let line of input) {
    if (line === '0') break; 
    
    const parts = line.split(" ").map(Number);
    const K = parts[0]; 
    const S = parts.slice(1); 
    
    const combination = []; 
    const currentTestCaseResult = []; 

 
    function backtrack(start, count) {

        if (count === 6) {
            currentTestCaseResult.push(combination.join(" "));
            return;
        }
        
        
        for (let i = start; i < K; i++) {
            combination.push(S[i]);
            backtrack(i + 1, count + 1);
            combination.pop();
        }
    }
    
    backtrack(0, 0);

    result.push(currentTestCaseResult.join('\n'));
}


console.log(result.join('\n\n'));