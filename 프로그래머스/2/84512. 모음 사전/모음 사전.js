function solution(word) {
    const words = ['A','E','I','O','U']
    
    // 중복가능 조합 
    const dic = []
    
    let dist = []
    
    function backtrack(depth){
        if(dist.length == depth){
            return dic.push(dist.join(""))
        }
        
        for(let i=0; i<5; i++){
            dist.push(words[i])
            backtrack(depth)
            dist.pop()
        }
    }
    
    
    for(let i=1; i<=5; i++){
        backtrack(i)
    }
    
    const sortedDic = dic.sort()
    
    for(let i=0; i<sortedDic.length; i++){
        if(word == sortedDic[i]){
            return i+1
        }
    }
}