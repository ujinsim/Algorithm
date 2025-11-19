function solution(s){
   const stack = []
   
   for(let i=0; i<s.length; i++){
       if(s[i] == "("){
           stack.push(s[i])
       }
       if(s[i] == ")"){
           if(stack[stack.length-1] == "("){
               stack.pop()
           }
           else{
               stack.push(")")
           }
       }
   }
   return stack.length > 0 ? false : true
}