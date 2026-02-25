function solution(number, k) {
    const stack = []
    
    let count = 0
    
    for(let i=0; i<number.length; i++){
        let cur = number[i]
        
        while(stack[stack.length-1] < cur && count < k && stack.length > 0){
            stack.pop()
            count+=1
        }
        stack.push(cur)
    }
    
    // k가 number보다 크다면 ? 
    
    // count가 안제거 됐다면? 뒤에서 슬라이스 해주기 
    // 23121 인데 4개 제거 넣어야 count가 늘어나니까 
    // 9999999 이러면 
    // 제거가 안되니까 제거안된거만큼 뒤에서 제거해주기 
    

    
    return stack.slice(0, number.length - k).join("");
    
}
