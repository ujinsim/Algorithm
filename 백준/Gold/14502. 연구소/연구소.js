const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, M] = parseInput[0].split(' ').map(Number);
  const map = parseInput.slice(1).map(a => a.split(' ').map(Number));

  //0은 빈 칸, 1은 벽, 2는 바이러스
  //연구소의 지도가 주어졌을 때 얻을 수 있는 안전 영역 크기의 최댓값을 구하는 프로그램을 작성하시오.

  //  - 벽 3개 세우기 (아무데나..?) 벽은 1 , 0중에서 세우기 (조합!!)

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const emptys = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] == '0') {
        emptys.push([i, j]);
      }
    }
  }

  const walls = [];
  const visitedWalls = new Array(emptys.length + 1).fill(false);
  const dist = [];

  function backtrack(start, depth) {
    if (depth == 3) {
      walls.push(dist.join(' ').split(' ').map(Number));
      return;
    }

    for (let i = start; i < emptys.length; i++) {
      if (!visitedWalls[i]) {
        dist.push(i);
        backtrack(i + 1, depth + 1);
        dist.pop();
      }
    }
  }

  backtrack(0, 0);


  let result = 0;

  for (let i = 0; i < walls.length; i++) {
    const currMap = map.map(v => [...v]);

    for (let j = 0; j < 3; j++) {
      const [wx, wy] = emptys[walls[i][j]];
      currMap[wx][wy] = 1;
    }

    const queue = [];
    let head = 0;

    for (let n = 0; n < N; n++) {
      for (let m = 0; m < M; m++) {
        if (currMap[n][m] == 2) {
          queue.push([n, m]);
        }
      }
    }

    while (queue.length > head) {
      const [x, y] = queue[head++];

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && currMap[nx][ny] == 0) {
          currMap[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }

    let count = 0;

    for (let n = 0; n < N; n++) {
      for (let m = 0; m < M; m++) {
        if (currMap[n][m] == 0) {
          count++;
        }
      }
    }

    if (result < count) {
      result = count;
    }
  }

  return result;
}

console.log(solution(input));
