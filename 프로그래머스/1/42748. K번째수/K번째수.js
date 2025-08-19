function solution(array, commands) {
    const result = []
    
    for(c of commands){
        const value = array.slice(c[0]-1, c[1])
        
        const sortedValue = value.sort((a,b)=>a-b)
        result.push(sortedValue[c[2]-1])
    }
    
    return result
}