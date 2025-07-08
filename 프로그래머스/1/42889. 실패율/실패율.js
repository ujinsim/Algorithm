function solution(N, stages) {
  const arr1 = new Array(N).fill(0);
  const arr2 = new Array(N).fill(0);
    const result = []

  for (let i = 0; i < stages.length; i++) {
    const num = stages[i];
    if (num <= N) {
      arr1[num - 1] += 1;
    }
  }

  for (let j = 0; j < N; j++) {
    for (let i = 0; i < stages.length; i++) {
      if (stages[i] >= j + 1) {
        arr2[j] += 1;
          
      }
      
    }
        result.push([j+1,arr1[j]/arr2[j]])
  }
    
    result.sort((a,b) => b[1]-a[1])
    

return result.map((a)=> a[0])
}
