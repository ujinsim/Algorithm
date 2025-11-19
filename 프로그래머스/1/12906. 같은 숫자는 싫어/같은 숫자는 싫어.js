function solution(arr){
 const stack = []
 stack.push(arr[0])
 
 for(let i=1; i<arr.length; i++){
     const value = stack[stack.length-1]
     if(arr[i] !== value){
         stack.push(arr[i])
     }
 }
 return stack
}