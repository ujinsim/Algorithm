function solution(m, n, puddles) {
   
    const MOD = 1000000007;
    const arr = Array.from({length: n}, () => new Array(m).fill(0));

    const isPuddle = new Set();
    for (const [x, y] of puddles) {
        isPuddle.add(`${y - 1},${x - 1}`);
    }

    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < m; j++) { 
            
            if (isPuddle.has(`${i},${j}`)) {
                continue; 
            }

            if (i === 0 && j === 0) {
                arr[i][j] = 1;
                continue;
            }

            const up = (i > 0) ? arr[i - 1][j] : 0;
            const left = (j > 0) ? arr[i][j - 1] : 0;

            arr[i][j] = (up + left) % MOD;
        }
    }
    
    return arr[n - 1][m - 1];
}