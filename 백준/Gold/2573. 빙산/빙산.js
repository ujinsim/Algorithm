const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split('\n');
  const [N, M] = parseInput[0].split(' ').map(Number);
  let map = parseInput.slice(1).map(a => a.split(' ').map(Number));

  let currentYear = 0;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  let icebergs = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] > 0) icebergs.push({ r: i, c: j });
    }
  }

  function bfs(startR, startC, visited) {
    const queue = [[startR, startC]];
    let head = 0;
    visited[startR][startC] = true;

    while (queue.length > head) {
      const [x, y] = queue[head++];
      for (let d = 0; d < 4; d++) {
        const nx = x + dx[d];
        const ny = y + dy[d];
        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          map[nx][ny] > 0 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }

  while (true) {
    let dungCount = 0;
    const visited = Array.from({ length: N }, () => new Array(M).fill(false));

    for (const { r, c } of icebergs) {
      if (!visited[r][c] && map[r][c] > 0) {
        dungCount++;
        bfs(r, c, visited);
      }
    }

    if (dungCount >= 2) return currentYear;
    if (dungCount === 0) return 0;

    let meltInfo = [];
    for (const { r, c } of icebergs) {
      let seaCount = 0;
      for (let d = 0; d < 4; d++) {
        const nr = r + dx[d];
        const nc = c + dy[d];
        if (nr >= 0 && nr < N && nc >= 0 && nc < M && map[nr][nc] === 0) {
          seaCount++;
        }
      }
      meltInfo.push({ r, c, melt: seaCount });
    }

    let nextIcebergs = [];
    for (const { r, c, melt } of meltInfo) {
      map[r][c] = Math.max(0, map[r][c] - melt);
      if (map[r][c] > 0) {
        nextIcebergs.push({ r, c });
      }
    }

    icebergs = nextIcebergs;
    currentYear++;
  }
}

console.log(solution(input));
