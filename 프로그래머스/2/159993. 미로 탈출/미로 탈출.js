function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  let S, L, E;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") S = [i, j];
      if (maps[i][j] === "L") L = [i, j];
      if (maps[i][j] === "E") E = [i, j];
    }
  }

  function bfs(start, target) {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[start[0], start[1], 0]];
    visited[start[0]][start[1]] = true;

    while (queue.length) {
      const [x, y, dist] = queue.shift();

      if (maps[x][y] === target) return dist;

      for (let dir = 0; dir < 4; dir++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];

        if (
          nx >= 0 && ny >= 0 &&
          nx < n && ny < m &&
          !visited[nx][ny] &&
          maps[nx][ny] !== "X"
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }

    return -1;
  }

  const toLever = bfs(S, "L");
  const toExit = bfs(L, "E");

  if (toLever === -1 || toExit === -1) return -1;
  return toLever + toExit;
}
