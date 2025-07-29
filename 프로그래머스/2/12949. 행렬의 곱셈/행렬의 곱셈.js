function solution(arr1, arr2) {
    
    const result = []
    
  for(let i=0; i<arr1.length; i++){
     const sum = []
      for(let j=0; j<arr2[1].length; j++){
           let value = 0
          for(let l=0; l<arr2.length; l++){
              value+=arr1[i][l]*arr2[l][j]
          }
                sum.push(value)
      }
result.push(sum)
  }
   
   return result
}
