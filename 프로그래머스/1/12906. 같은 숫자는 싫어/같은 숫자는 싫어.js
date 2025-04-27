function solution(arr)
{
    var answer = [];
    var number; 
     for (let i = 0; i < arr.length; i++) {
        if(number!==arr[i]){
            answer.push(arr[i])
            number = arr[i];
        }
        
        
        
}
    
    return answer;
}