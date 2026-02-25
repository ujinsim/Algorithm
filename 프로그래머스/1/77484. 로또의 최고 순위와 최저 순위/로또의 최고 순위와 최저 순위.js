function solution(lottos, win_nums) {
    // 최고는 0이 다 맞는다 ( 남은 숫자 안으로 )
    // 최저는 0이 다 틀린다 
    
    const lottoSet = new Set(win_nums)
    
    let correctCount = 0
    let zeroCount = 0
    
    for(let i of lottos){
        if(lottoSet.has(i)){
            correctCount+=1
        }
        if(i == 0){
            zeroCount +=1
        }
    }
    
    let max = correctCount + zeroCount
    let min = correctCount
    
    function getRank(n){
        if(n == 6){
            return 1
        }
        
        if(n== 5){
            return 2
        }
        
        if(n==4){
            return 3
        }
        
        if(n==3){
            return 4
        }
        
        if(n==2){
            return 5
        }
        
        else {
            return 6
        }
    }
    
    
    return [getRank(max), getRank(min)]
}