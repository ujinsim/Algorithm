function solution(user_id, banned_id) {
    
    const dist = []
    const isVisited = new Set()
    const result = new Set();
    
    function isMatch(user, banned) {
    if (user.length !== banned.length) return false;
    
    const regex = new RegExp('^' + banned.replace(/\*/g, '.') + '$');
    return regex.test(user);
    }
    
    function backtrack(banner){
        
        if(dist.length == banned_id.length){
            
            result.add([...dist].sort((a, b) => a - b).join(','));
            return 
        }
        
        for(let i=0; i<user_id.length; i++){
            if(isMatch(user_id[i],banned_id[banner]) && banner < banned_id.length && !isVisited.has(i)){
                isVisited.add(i)
                dist.push(i)
                backtrack(banner+1)
                dist.pop()
                isVisited.delete(i)
            }
        }
    }
    
    backtrack(0, 0)
    
    return [...result].length
    
    
}