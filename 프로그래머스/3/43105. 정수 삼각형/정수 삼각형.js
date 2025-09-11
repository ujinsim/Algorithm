function solution(triangle) {
  const n = triangle.length;
    
  for(let i=n-1; i>=0; i--){
      for(let j=0; j<i; j++){
          triangle[i-1][j] = Math.max(triangle[i][j], triangle[i][j+1]) + triangle[i-1][j]
      }
  }
    return Number(triangle[0].join())
  
}
