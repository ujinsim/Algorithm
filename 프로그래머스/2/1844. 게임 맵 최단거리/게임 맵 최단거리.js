function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  
  function bfs(x, y) {
    const queue = [];
    queue.push([x, y]);

    while (queue.length) {
      const [curX, curY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = curX + dx[i];
        const ny = curY + dy[i];

        if (nx >= 0 && ny >= 0 && nx < m && ny < n) {
          if (maps[ny][nx] === 1) {
            maps[ny][nx] = maps[curY][curX] + 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
  
  bfs(0, 0);

  return maps[n-1][m-1] === 1 ? -1 : maps[n-1][m-1];
}
