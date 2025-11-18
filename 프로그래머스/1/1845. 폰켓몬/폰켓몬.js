function solution(nums) {
    const n = nums.length
    const set = new Set()
    
    for(let i=0; i<nums.length; i++){
        set.add(nums[i])
    }
    
    
    if(set.size <= n/2){
        return set.size
    }
    else {
        return n/2
    }
    
    
}