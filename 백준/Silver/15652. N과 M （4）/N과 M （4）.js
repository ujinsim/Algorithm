const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const [n, m] = input.split(" ").map(Number);

function solution(n, m) {
  const dist = [];
  const result = [];

  function dfs(start, depth) {
    if (depth === m) {
      result.push(dist.join(" "));
      return;
    }

    for (let i = start; i <= n; i++) {
      dist.push(i);
      dfs(i, depth + 1); 
      dist.pop();
    }
  }

  dfs(1, 0);
  return result.join("\n");
}

console.log(solution(n, m));
