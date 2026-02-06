const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const lines = input.split('\n');
  const [N, M] = lines[0].split(' ').map(Number);
  const map = lines.slice(1).map(line => line.split(' ').map(Number));

  const polyomino = [
    [
      [1, 1],
      [1, 1],
    ],
    [[1, 1, 1, 1]],
    [[1], [1], [1], [1]],
    [
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [0, 1],
    ],
    [
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 1, 1],
      [1, 1, 0],
    ],
    [
      [1, 0],
      [1, 1],
      [0, 1],
    ],
    [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
    [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    [
      [1, 1, 1],
      [1, 0, 0],
    ],
    [
      [1, 1],
      [0, 1],
      [0, 1],
    ],
    [
      [0, 0, 1],
      [1, 1, 1],
    ],
    [
      [1, 0, 0],
      [1, 1, 1],
    ],
    [
      [1, 1],
      [1, 0],
      [1, 0],
    ],
    [
      [0, 1],
      [0, 1],
      [1, 1],
    ],
    [
      [1, 1, 1],
      [0, 0, 1],
    ],
  ];

  let max = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (const block of polyomino) {
        const rowLen = block.length;
        const colLen = block[0].length;

        if (i + rowLen <= N && j + colLen <= M) {
          let sum = 0;
          for (let r = 0; r < rowLen; r++) {
            for (let c = 0; c < colLen; c++) {
              if (block[r][c] === 1) {
                sum += map[i + r][j + c];
              }
            }
          }
          if (sum > max) max = sum;
        }
      }
    }
  }

  return max;
}

console.log(solution(input));
