function solution(s) {
    
    const trimmed = s.slice(2, -2);
    const sets = trimmed.split("},{");
        
    const result = sets.map((a) => a.split(",").map((num) => Number(num)))
 
                            
    const sortedResult = result.sort((a,b) => a.length - b.length)
    
    const ArrResult = new Set([])

    for(let i=0; i<sortedResult.length; i++){
       
        
        const arr = sortedResult[i];  
  for (let num of arr) {
    if (!ArrResult.has(Number(num))) { 
      ArrResult.add(Number(num));
    }
  }
    }
    
  
    return [...ArrResult]
    
}