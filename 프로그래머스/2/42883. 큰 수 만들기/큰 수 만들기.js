function solution(number, k) {
    const stack = []
    let count = 0
    
    // 앞에 나련보다 작은수 있으면 count만 큼 ㄲㅈ세요 -> 순서 유지를 위해 스택 맨뒤만 
    // 만약에 9876이여서 하나도 안꺼졌다면 count만큼 slice해주깅 ㅋ
    
    for(let i=0; i<number.length; i++){
        let cur = number[i]
        
        while(stack.length > 0 && stack[stack.length-1] < cur && count < k){
            stack.pop()
            count ++
        }
        
        stack.push(cur)
    }
    
    
    return stack.slice(0,number.length-k).join("")
    
}
