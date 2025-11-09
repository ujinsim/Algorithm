function solution(input) {
  const parseInput = input.split(`\n`);
  const result = [];
  const n = Number(parseInput[0]);
  const inputs = parseInput.slice(1).map(a => a.split(" ").map(Number));
  const nx = [1,-1,0,0];
  const ny = [0,0,1,-1];

  function Cabbage(M, N, cabbageCoords) {
    let count = 0;
    const arr = Array.from({length: M}, () => new Array(N).fill(0));
    const visited = Array.from({length: M}, () => new Array(N).fill(false));

    for(let i=0; i<cabbageCoords.length; i++){
      const [x,y] = cabbageCoords[i];
      arr[x][y] = 1;
    }

    function dfs(x,y){
      visited[x][y] = true;
      for(let i=0; i<4; i++){
        const dx = nx[i] + x;
        const dy = ny[i] + y;
        if(dx >=0 && dx < M && dy >= 0 && dy < N && !visited[dx][dy] && arr[dx][dy] === 1){
          dfs(dx,dy);
        }
      }
    }

    for(let i=0; i<cabbageCoords.length; i++){
      const [x,y] = cabbageCoords[i];
      if(!visited[x][y]){
        count++;
        dfs(x,y);
      }
    }
    return count;
  }

  let currentIndex = 0;

  while(currentIndex < inputs.length){
    const currentLine = inputs[currentIndex];
    if (currentLine.length === 3) {
      const [M, N, K] = currentLine;
      const cabbageCoords = inputs.slice(currentIndex + 1, currentIndex + 1 + K);
      result.push(Cabbage(M,N,cabbageCoords));
      currentIndex += K + 1;
    } else {
      currentIndex++;
    }
  }

  return result.join("\n");
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
console.log(solution(input));
