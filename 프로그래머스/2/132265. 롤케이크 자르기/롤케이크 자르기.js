function solution(topping) {
  const right = new Map();
  for (const t of topping) right.set(t, (right.get(t) || 0) + 1);

  const left = new Set();     
  let rightUnique = right.size; 
  let result = 0;
  
  for(let i=0; i<topping.length-1; i++){
    const t = topping[i]
    
    left.add(t)
    right.set(t, right.get(t)-1)
    if(right.get(t) == 0){
      right.delete(t)
      rightUnique--; 
   
  }
    if(left.size === rightUnique) result ++
  }
  return result
}
