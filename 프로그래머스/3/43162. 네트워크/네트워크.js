function solution(n, computers) {
    const isVisited = new Array(n).fill(0);
    let result = 0;

    for (let i = 0; i < n; i++) {
        if (isVisited[i] === 0) {  // 방문 안 했으면 새로운 네트워크 시작
            const stack = [i];
            isVisited[i] = 1;
            result++;
            while (stack.length > 0) {
                const current = stack.pop();
                const connections = computers[current];
                for (let j = 0; j < connections.length; j++) {
                    if (isVisited[j] === 0 && connections[j] === 1) {
                        stack.push(j);
                        isVisited[j] = 1;
                    }
                }
            }
            
        }
    }
    return result;
}
