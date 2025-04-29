function solution(s){
    let answer;
    let stack = [];
    for (let i=0; i<s.length; i++) {
        if(s[i]== ')'&& stack[stack.length-1]=='('){
            stack.pop()
        }
       
       else if (s[i] == '(' || s[i]==')') {
           stack.push(s[i])
       }
    }
    if(stack.length == 0) {
        answer = true;
    }
    else 
        answer = false ;
        
    

    return answer;
}