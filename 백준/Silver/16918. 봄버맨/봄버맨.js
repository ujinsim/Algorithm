const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split('\n');
  const [r, c, n] = parseInput[0].split(' ').map(Number);
  const arr = parseInput.slice(1).map(a => a.split(''));

  if (n === 1) return arr.map(a => a.join('')).join('\n');

  if (n % 2 === 0) {
    const full = Array.from({ length: r }, () => new Array(c).fill('O'));
    return full.map(a => a.join('')).join('\n');
  }

  const explode = (inputBoard) => {
    const newBoard = Array.from({ length: r }, () => new Array(c).fill('O'));
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (inputBoard[i][j] === 'O') {
          newBoard[i][j] = '.';
          for (let k = 0; k < 4; k++) {
            const nx = i + dx[k];
            const ny = j + dy[k];
            if (nx >= 0 && nx < r && ny >= 0 && ny < c) {
              newBoard[nx][ny] = '.';
            }
          }
        }
      }
    }
    return newBoard;
  };

  const state3 = explode(arr);

  if (n % 4 === 3) {
    return state3.map(a => a.join('')).join('\n');
  }

  if (n % 4 === 1) {
    const state5 = explode(state3);
    return state5.map(a => a.join('')).join('\n');
  }
}

console.log(solution(input));