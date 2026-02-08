function solution(m, n, board) {
    // 1. 초기 세팅: 문자열 배열을 2차원 배열로 변환
    let map = board.map((row) => row.split(""));
    let totalCount = 0;

    const dx = [0, 1, 1];
    const dy = [1, 0, 1];

    while (true) {
        let isSame = new Set(); 

        // 2. 2x2 블록 찾기
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const value = map[i][j];
                if (!value) continue; // 이미 터진 곳은 패스

                let same = true;
                for (let k = 0; k < 3; k++) {
                    if (value !== map[i + dx[k]][j + dy[k]]) {
                        same = false;
                        break;
                    }
                }

                if (same) {
                    // 터뜨릴 좌표들을 문자열 형태로 Set에 저장 (중복 방지)
                    isSame.add(`${i},${j}`);
                    isSame.add(`${i},${j + 1}`);
                    isSame.add(`${i + 1},${j}`);
                    isSame.add(`${i + 1},${j + 1}`);
                }
            }
        }

        if (isSame.size === 0) break;

        for (let pos of isSame) {
            const [x, y] = pos.split(",").map(Number);
            if (map[x][y] !== null) {
                map[x][y] = null;
                totalCount += 1;
            }
        }

        for (let j = 0; j < n; j++) {
            const isNotNullNum = []
            
            for(let i=0; i<m; i++){
                if(map[i][j]!==null){
                    isNotNullNum.push(map[i][j])
                }
            }
            
            const nullCount = m - isNotNullNum.length 
            const nextArr = Array(nullCount).fill(null).concat(isNotNullNum)
            
            for(let i=0; i<m; i++){
                map[i][j] = nextArr[i]
            }

        }
    }

    return totalCount;
}