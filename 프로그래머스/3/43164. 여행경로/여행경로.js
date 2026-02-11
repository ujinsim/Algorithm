function solution(tickets) {
   tickets.sort((a,b)=> {
       if(a[1] == b[1]){
           return a[0] < b[0] ? -1 : 1
       }
       return a[1] < b[1] ? -1 : 1
   })
    
   const visited = new Array(tickets.length).fill(false)
   let dist = []
   const result = []
    
   function backtrack(node, count){
    
       
       if(result.length >= 1) return
       
       if(count == tickets.length+1){
           result.push(...dist)
           return 
       }
       
       for(let i=0; i<tickets.length; i++){
           const [start,end] = tickets[i]
           
           if(start == node && !visited[i]){
               visited[i] = true
               dist.push(end)
               backtrack(end, count+1)
               dist.pop(end)
               visited[i] = false
              
           }
       }
   }
    
   dist.push("ICN")
   backtrack("ICN",1)
    
    return result
  
}