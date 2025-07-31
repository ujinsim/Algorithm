function solution(nums) {
    
    //최대를 n/2개로 두고 
    // set으로 해서 그거를 우선순위로 최대보다 작으면 2 최대보다 크면 최대
    
    const max = nums.length/2
    const k = new Set([...nums])
    const kLength =[...k].length
    
    return kLength < max ? kLength : max
}