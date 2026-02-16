function solution(n, info) {
    let maxDiff = 0;
    let ryanBest = [-1];
    const lionWin = info.map(v => v + 1); 

    function backtrack(idx, arrowsLeft, ryanArr) {
        if(idx == 11 || arrowsLeft == 0){
            const lionList = [...ryanArr]
            lionList[10] += arrowsLeft
            
            let lionScore = 0
            let apeachScore = 0
            
            for(let i=0; i<10; i++){
                const score = 10 - i
                if (info[i] === 0 && lionList[i] === 0) continue;
                if (info[i] >= lionList[i]) apeachScore += score;
                else lionScore += score;
            }
            
            const diff = lionScore - apeachScore
            
            if(diff > 0){
                // 라이언형 승!
                if(diff > maxDiff){
                    maxDiff = diff
                    ryanBest = lionList
                }
                else if (diff == maxDiff){
                    for(let i=10; i>=0; i--){
                        if(lionList[i] > ryanBest[i]){
                            ryanBest = lionList
                            break
                        }
                        else if (lionList[i] < ryanBest[i]) break
                    }
                }
            }
            return
        }
        
            if(arrowsLeft - lionWin[idx] >= 0){
                ryanArr[idx] = lionWin[idx]
                backtrack(idx+1,arrowsLeft - lionWin[idx], ryanArr )
                ryanArr[idx] = 0
            }

        backtrack(idx+1, arrowsLeft, ryanArr)
    }

    backtrack(0, n, new Array(11).fill(0));
    return ryanBest;
}