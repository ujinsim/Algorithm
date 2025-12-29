const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split('\n');
  const [r, c, n] = parseInput[0].split(' ').map(Number);
  const arr = parseInput.slice(1).map(a => a.split(''));

  if (n === 1) return arr.map(a => a.join('')).join('\n');

  if (n % 2 == 0) {
    return Array.from({ length: r }, () => new Array(c).fill('O'))
      .map(a => a.join(''))
      .join('\n');
  }

  const nx = [1, -1, 0, 0];
  const ny = [0, 0, 1, -1];

  function boom(arr) {
    const fillArr = Array.from({ length: r }, () => new Array(c).fill('O'));
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (arr[i][j] == 'O') {
          fillArr[i][j] = '.';
          for (let k = 0; k < 4; k++) {
            const dx = i + nx[k];
            const dy = j + ny[k];
            if (dx >= 0 && dx < r && dy >= 0 && dy < c) {
              fillArr[dx][dy] = '.';
            }
          }
        }
      }
    }
    return fillArr;
  }

  if (n % 4 == 3) {
    return boom(arr)
      .map(a => a.join(''))
      .join('\n');
  }

  if (n % 4 == 1) {
    // 7
    return boom(boom(arr))
      .map(a => a.join(''))
      .join('\n');
  }
}

console.log(solution(input));
