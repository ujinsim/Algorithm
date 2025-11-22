function solution(array, commands) {
  const result = []
    
  for(let i=0; i<commands.length; i++){
      const [I,J,K] = commands[i]
      const value = []
      for(let j=I-1; j<J; j++){
         value.push(array[j])
      }
      result.push(value.sort((a,b)=> a-b)[K-1])
  }
    return result
}