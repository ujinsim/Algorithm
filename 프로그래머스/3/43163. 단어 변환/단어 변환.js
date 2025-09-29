function solution(begin, target, words) {
 const queue = [[begin,0]]
 let result = 0
 const isVisited = new Set([begin])
    
 // words에 없으면 return 0 
 // target과 같으면 반환 
     
 // begin을 받고 한글자만 차이나는지 검사하고, 방문했는지 확인하고 bfs돌리기
 if(!words.includes(target)){
     return result
 }
    
function isDifferCon(k,v){
    let count = 0
    for(let i=0; i<k.length; i++){
        if(k[i] !== v[i]){
            count ++
        }
    }
    return count === 1
}

 while(queue.length > 0){
   const [value,steps] = queue.shift()
   if(value == target){
       return steps
}  
     
   for(let i=0; i<words.length; i++){
       const nextWord = words[i];
       if(!isVisited.has(nextWord) &&isDifferCon(nextWord, value)){

           isVisited.add(nextWord)
           queue.push([words[i],steps+1])
           
       }
   }
 }
 return 0
}
