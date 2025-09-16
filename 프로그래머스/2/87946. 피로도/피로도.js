function solution(k, dungeons) {
  const n = dungeons.length;
  const visited = Array(n).fill(false);

  let answer = 0;

  function dfs(curK, count) {
    answer = Math.max(answer, count);

    for (let i = 0; i < n; i++) {
      const [need, cost] = dungeons[i];
      if (!visited[i] && curK >= need) {
        visited[i] = true;
        dfs(curK - cost, count + 1);
        visited[i] = false; 
      }
    }
  }
  dfs(k, 0);
  return answer;
}
