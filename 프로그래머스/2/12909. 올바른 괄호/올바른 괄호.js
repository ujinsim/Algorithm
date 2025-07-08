function solution(s){
   const stack = []
   
   for(let i=0; i<s.length; i++) {
       if(s[i] =="("){
           stack.push(s[i])
       }
       else {
           if(stack.length > 0 ) {
               stack.pop()
           }
           else {
               return false
           }
       }
   }
    return stack.length>0 ? false : true
}