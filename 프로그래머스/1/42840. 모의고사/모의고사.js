function solution(answers) {
  
  const ways = [[1, 2, 3, 4, 5],[2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] ]
  const counts = new Array(ways.length).fill(0)
  
  for(i in ways) {
        for (j in answers){
            if(answers[j] == ways[i][j%ways[i].length]) {
                counts[i] = counts[i]+1
            }
        }

  }
    
    const result = []

for(let i=0; i<counts.length; i++) {
    let max=Math.max(...counts)
    
    if(max == counts[i]){
        result.push(i+1)
    }
    
    
}
  
  return result
    
}

