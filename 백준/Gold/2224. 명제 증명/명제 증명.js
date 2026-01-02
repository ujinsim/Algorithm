const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const lines = input.split('\n');
  const n = parseInt(lines[0]);
  const edges = [];

  for (let i = 1; i <= n; i++) {
    const [from, to] = lines[i].split('=>').map(s => s.trim());
    edges.push([from, to]);
  }

  const dist = Array.from({ length: 52 }, () => Array(52).fill(false));
  for (let i = 0; i < 52; i++) dist[i][i] = true;

  function getIdx(char) {
    const code = char.charCodeAt(0);
    if (code <= 90) return code - 65;
    return code - 71;
  }
  function getChar(num) {
    if (num < 26) {
      return String.fromCharCode(num + 65);
    } else {
      return String.fromCharCode(num + 71);
    }
  }

  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];

    const x = getIdx(from);
    const y = getIdx(to);
    if (from === to) continue;
    dist[x][y] = true;
  }

  for (let k = 0; k < 52; k++) {
    for (let i = 0; i < 52; i++) {
      for (let j = 0; j < 52; j++) {
        if (dist[i][k] && dist[k][j]) dist[i][j] = true;
      }
    }
  }

  const result = [];

  for (let i = 0; i < 52; i++) {
    for (let j = 0; j < 52; j++) {
      if (i !== j && dist[i][j] === true) {
        result.push([`${getChar(i)} => ${getChar(j)}`]);
      }
    }
  }

  return result.length + `\n` + result.join('\n');
}

console.log(solution(input));
