function solution(priorities, location) {
    const queue = priorities.map((priority, index) => {
        return { priority, index };
    });
  
    let count = 0
    
    const result = []
    while(queue.length !==0){
      
      const current = queue.shift()
      const highValue = queue.some(doc=> doc.priority > current.priority)
      
      if(highValue){
        queue.push(current)
      }
      else{
        count ++
        
        if(current.index === location){
          return count 
        }
      }
      
      
    }
  return 
}

console.log(solution([2, 1, 3, 2],2))