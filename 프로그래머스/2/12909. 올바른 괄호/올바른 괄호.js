function solution(s){
    // "(" 이거면 넣기 or 스택 마지막이 ")" 이거면 요걸 pop해줌
    // ")"이거인데 스택 요소 없으면 false
    
    
    const stack = []
    
    for(let i=0; i<s.length; i++){
        let value = s[i]
        
        if(value == "("){
            stack.push(value)
        }
        if(value == ")" && stack.length === 0){
            return false
        }
        
        if(value == ")" && stack[stack.length-1] == "("){
            stack.pop()
        }
    }
    
    return stack.length > 0 ? false : true
}