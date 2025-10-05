function solution(want, number, discount) {
  
  const want_map = new Map()
  let result = 0
  
  for(let i=0; i<want.length; i++){
    if(!want_map.has(want[i])){
      want_map.set(want[i], number[i])
    }
  }
  
  for(let i=0; i<discount.length-9; i++){
    let discount_map = new Map()
    for(let j=i; j<10+i; j++){
      const item = discount[j]
      discount_map.set(item,(discount_map.get(item)||0)+1)
      if(isMatch(want_map, discount_map)){
        result++
      }
    }
    
  }
  
  function isMatch(want_map, discount_map){
    for(let [item, qty] of want_map){
      if((discount_map.get(item) || 0 ) < qty){
        return false
      }
    }
    return true
  }
  return result
  
  
}