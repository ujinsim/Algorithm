function solution(numbers, target){
 // 모든 경우이기에 DFS
  let count = 0
  let depth = numbers.length 
  
  function dfs(sum, n){
    if(n === depth){
      if(sum == target){
        count ++
      }
      return
    }
    
    dfs(sum-numbers[n], n+1)
    dfs(sum+numbers[n], n+1)
  }
  
  dfs(0,0)
  return count 
}