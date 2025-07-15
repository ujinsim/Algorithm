function solution(participant, completion) {
    const hash = {}
    const result = []
    
    for (i of completion) {
        hash[i] = (hash[i] || 0) + 1;
    }
    
    for (j of participant){
        if (!hash[j]) return j; // 없거나 0이면 그 사람이 미완주자
    hash[j] -= 1;
    }
    
    return result.join(" ");
}