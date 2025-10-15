function solution(input){
  const arr = new Array(10).fill(0)
  let result = 0
  
  for(let i of input){
    console.log(i)
    arr[i] = 1
  }
  
  for(let i=0; i<10; i++){
    if(arr[i] == 0){
      result += i
    }
  }
  return result
  
}
