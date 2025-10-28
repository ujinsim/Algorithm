function solution(arr){
    const newArr = [arr[0]]
    
    for(let i=1; i<arr.length; i++){
        if(newArr[newArr.length-1] !== arr[i]){
            newArr.push(arr[i])
        }
    }
    
    return newArr
}