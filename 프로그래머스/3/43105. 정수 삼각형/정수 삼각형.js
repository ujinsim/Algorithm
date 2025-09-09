function solution(triangle) {
  const n = triangle.length;
  const memo = Array.from({ length: n }, (_, i) =>
    Array(triangle[i].length).fill(undefined)
  );

  function dfs(i, j) {
    if (i === n - 1) return triangle[i][j];       
    if (memo[i][j] !== undefined) return memo[i][j];

    const left  = dfs(i + 1, j);
    const right = dfs(i + 1, j + 1);
    return (memo[i][j] = triangle[i][j] + Math.max(left, right));
  }

  return dfs(0, 0);
}
