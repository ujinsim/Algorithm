function solution(n, m, x, y, r, c, k) {
  const dx = [1, 0, 0, -1]; 
  const dy = [0, -1, 1, 0];
  const dirs = ['d', 'l', 'r', 'u']; 

  let answer = '';
  let found = false;

  function dfs(cx, cy, route, count) {
    if (found) return; 

    const dist = Math.abs(r - cx) + Math.abs(c - cy);
    const remain = k - count;

    if (dist > remain) return;

    if ((dist % 2) !== (remain % 2)) return;

    if (count === k) {
      if (cx === r && cy === c) {
        answer = route;
        found = true;
      }
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx >= 1 && nx <= n && ny >= 1 && ny <= m) {
        dfs(nx, ny, route + dirs[i], count + 1);
        if (found) return; 
      }
    }
  }

  dfs(x, y, '', 0);

  return found ? answer : 'impossible';
}
