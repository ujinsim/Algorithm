function solution(begin, target, words){
  //가장 짧은 변환 과정
  let n = words.length
  let result = 0
  
  if(!words.includes(target)){
    return result
  }
  
  const visited = new Set([begin])
  const queue = [[begin,0]]
  
  function differWords(s,v){
    let differ = 0
    
    for(let i=0; i<s.length; i++){
      if(s[i] != v[i]){
        differ +=1
      }
    }
    return differ
  }
  

    while(queue.length > 0){
      const [value,count] = queue.shift()
      
      if(value === target){
        return count
      }
      for(let i=0; i<n; i++){
      const next = words[i]
      if(!visited[i] && differWords(value,next) === 1){
         visited[i] = true
         queue.push([next, count+1])
         }
    }
      
    }
  return 0
  

  

}