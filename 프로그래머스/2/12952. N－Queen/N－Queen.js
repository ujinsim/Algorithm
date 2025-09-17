function solution(n) {
  let result = 0;
  const pos = Array(n).fill(-1); // pos[row] = 놓은 열

  function isValid(row, col) {
    for (let r = 0; r < row; r++) {
      const c = pos[r];
   
      if (c === col || Math.abs(row - r) === Math.abs(col - c)) return false;
    }
    return true;
  }

  function dfs(row) {
    if (row === n) {       
      result += 1;
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!isValid(row, col)) continue;
      pos[row] = col;      
      dfs(row + 1);        
      pos[row] = -1;      
    }
  }

  dfs(0);
  return result;
}
