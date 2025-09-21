const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

function solution(input) {
  const lines = input.split('\n').map(l => l.trim());
  const [n, m] = lines[0].split(' ').map(Number);
  let [x, y, d] = lines[1].split(' ').map(Number);
  const arr = lines.slice(2).map(line => line.split(' ').map(Number));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const inRange = (i, j) => i >= 0 && i < n && j >= 0 && j < m;

  let count = 0;

  function dfs(cx, cy, cd) {
    if (arr[cx][cy] === 0) {
      arr[cx][cy] = 2;
      count++;
    }

    for (let i = 0; i < 4; i++) {
      cd = (cd + 3) % 4; 
      const nx = cx + dx[cd];
      const ny = cy + dy[cd];
      if (inRange(nx, ny) && arr[nx][ny] === 0) {
        return dfs(nx, ny, cd);
      }
    }

    const backDir = (cd + 2) % 4;
    const bx = cx + dx[backDir];
    const by = cy + dy[backDir];
    if (!inRange(bx, by) || arr[bx][by] === 1) {
      return;
    } else {
      return dfs(bx, by, cd); 
    }
  }

  dfs(x, y, d);
  return count;
}

console.log(solution(input).toString());
