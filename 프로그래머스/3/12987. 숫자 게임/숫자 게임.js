function solution(A, B) {
    let score = 0;
    
    A.sort((a, b) => b-a);
    B.sort((a, b) => b-a);
    
    let aIdx = 0; 
    let bIdx = 0; 
    
    while(aIdx < A.length){
        
        if(B[bIdx] <= A[aIdx]){
            aIdx++
        }
        else {
            aIdx++
            bIdx++
            score++
        }
    }
    
    return score;
}