function solution(k, tangerine) {
    const counts = {};
    let result = 0
    const results =[]

    for (let i of tangerine) {
        if (!counts[i]) {
            counts[i] = 1;
        } else {
            counts[i] += 1;
        }
    }
    
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    
   for (const [, cnt] of sorted) {
        k -= cnt;
        result += 1;
        if (k <= 0) return result; 
}
    
    return result;
}
