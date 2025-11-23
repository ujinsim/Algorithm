function solution(numbers, target){

    let result = 0
    
    function dfs(count, current){
        
        if(count === numbers.length && target == current){
            result +=1
            return
        }
        if(numbers[count]){
            dfs(count+1, current+numbers[count])
            dfs(count+1, current-numbers[count])
        }
    }
    
    
    dfs(0,0)
    
    return result

    
}