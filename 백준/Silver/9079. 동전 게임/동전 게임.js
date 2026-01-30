const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function flip(v) {
  return v == 'H' ? 'T' : 'H';
}

function bfs(matrix) {
  const queue = [[matrix, 0]];
  const visited = new Set();
  visited.add(matrix.flat().join(''));

  while (queue.length) {
    const [cur, count] = queue.shift();
    const flat = cur.flat();

    if (flat.every(a => a == 'H') || flat.every(a => a == 'T')) {
      return count;
    }

    for (let i = 0; i < 8; i++) {
      let next = cur.map(row => [...row]);

      if (i < 3) {
        for (let j = 0; j < 3; j++) {
          next[i][j] = flip(next[i][j]);
        }
      } else if (i < 6) {
        for (let j = 0; j < 3; j++) {
          next[j][i - 3] = flip(next[j][i - 3]);
        }
      } else if (i == 6) {
        // 00 11 22
        for (let j = 0; j < 3; j++) {
          next[j][j] = flip(next[j][j]);
        }
      } else {
        // 2,0 11 0,2
        for (let j = 0; j < 3; j++) {
          next[2 - j][j] = flip(next[2 - j][j]);
        }
      }

      const str = next.flat().join('');

      if (!visited.has(str)) {
        visited.add(str);
        queue.push([next, count + 1]);
      }
    }
  }

  return -1;
}

function solution(input) {
  const lines = input.trim().split('\n');
  const T = Number(lines[0]);
  const data = lines.slice(1);
  const results = [];

  for (let i = 0; i < T; i++) {
    const matrix = data.slice(i * 3, i * 3 + 3).map(line => line.split(' '));
    results.push(bfs(matrix));
  }

  return results.join('\n');
}

console.log(solution(input));
