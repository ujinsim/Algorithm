function solution(s){
   // '(' 이면 넣기 
    
    // ')' 이면 짝있는지 찾기 없으면 false 
    
    const stack = []
    
    for(let i=0; i<s.length; i++){
        const v = s[i]
        
        if(v == '('){
            stack.push('(')
        }
        
        if(v == ')'){
            if(stack.length > 0){
                stack.pop()
            }
            else {
                return false
            }
        }
    }
    
    return stack.length == 0 ? true : false
}