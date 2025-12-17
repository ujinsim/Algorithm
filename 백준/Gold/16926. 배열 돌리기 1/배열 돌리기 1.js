const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

function solution(input) {
  const lines = input.split('\n');
  if (lines.length === 0) return;

  const [n, m, r] = lines[0].split(" ").map(Number);
  const nums = lines.slice(1).map(line => line.trim().split(/\s+/).map(Number));

  const layers = Math.min(n, m) / 2;

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  for (let s = 0; s < r; s++) {
    for (let j = 0; j < layers; j++) {
      let x = j;
      let y = j;
      let preValue = nums[x][y];
      let dirIdx = 0;

      while (dirIdx < 4) {
        const nx = x + dx[dirIdx];
        const ny = y + dy[dirIdx];

        if (nx >= j && nx < n - j && ny >= j && ny < m - j) {
          const temp = nums[nx][ny];
          nums[nx][ny] = preValue;
          preValue = temp;
          
          x = nx;
          y = ny;
        } else {
          dirIdx++;
        }
      }
    }
  }

  let output = "";
  for (let i = 0; i < n; i++) {
    output += nums[i].join(" ") + "\n";
  }
  process.stdout.write(output);
}

solution(input);