function solution(clothes) {
   const map = new Map()
   let answer = 1
   for(let i=0; i<clothes.length; i++){
       const [cloth, kind] = clothes[i]
       if(!map.has(kind)) map.set(kind,1)
       else {map.set(kind, map.get(kind)+1)}
   }
    
  for (const count of map.values()) {
      answer *= (count + 1);
  }
    
  return answer - 1;
}

