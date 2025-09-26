function solution(want, number, discount) {
    let count = 0;
    
    const want_num = new Map()
    
    for(let i=0; i<want.length; i++){
        want_num.set(want[i], number[i])
    }
    
    for(let i=0; i<discount.length-9; i++){
        let currentWindow = new Map();
        for(let j=i; j<10+i; j++){
            const item = discount[j]
            currentWindow.set(item,(currentWindow.get(item) || 0) + 1)
            
            if (isMatch(want_num, currentWindow)){
                count ++ ;
            }
            
        }
    }
        return count
    
    function isMatch(want_num, currentWindow){
        for(let [item, qty] of want_num){
            if ((currentWindow.get(item) || 0) < qty) {
        return false;
      }
        }
        return true
        
    }

}
