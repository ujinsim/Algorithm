const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number).sort((a, b) => a - b);

const dist = [];
const result = [];
const visited = new Array(N).fill(false);

function backtrack(depth) {
    if (depth === M) {
        result.push(dist.join(" "));
        return;
    }
    
    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dist.push(nums[i]);
            backtrack(depth + 1); 
            dist.pop();
            visited[i] = false;
        }
    }
}

backtrack(0);

console.log(result.join('\n'));