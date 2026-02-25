function solution(queue1, queue2) {
    let leftSum = queue1.reduce((a, b) => a + b, 0);
    const totalSum = leftSum + queue2.reduce((a, b) => a + b, 0);
    
    if (totalSum % 2 !== 0) return -1;
    const targetSum = totalSum / 2;

    const combined = [...queue1, ...queue2];
    let left = 0;
    let right = queue1.length;
    let count = 0;
    
    const maxMove = queue1.length * 4; 

    while (count <= maxMove) {
        if (leftSum === targetSum) {
            return count; 
        }
        
        if (leftSum > targetSum) {
            leftSum -= combined[left % combined.length];
            left++;
        } else {
            leftSum += combined[right % combined.length];
            right++;
        }
        count++;
    }

    return -1;
}