function solution(d, budget) {
    d.sort((a,b)=>a-b)
    let count = 0
    
    for(i of d){
        if(budget >= i){
            budget -= i
            count ++ 
        }
        else break;
    }
    
    return count
}