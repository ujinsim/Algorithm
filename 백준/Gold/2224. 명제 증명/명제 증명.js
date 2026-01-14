const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const nodes = parseInput.slice(1).map(a => a.split(' => '));

  const dists = Array.from({ length: 52 }, () => Array(52).fill(false));
  for (let i = 0; i < 52; i++) dists[i][i] = true;

  function charToIdx(char) {
    const code = char.charCodeAt(0);

    if (code <= 90) {
      return code - 65;
    } else {
      return code - 71;
    }
  }

  function idxToChar(idx) {
    if (idx <= 25) {
      return String.fromCharCode(idx + 65);
    } else {
      return String.fromCharCode(idx + 71);
    }
  }

  for (let i = 0; i < nodes.length; i++) {
    const [one, two] = nodes[i];
    if (one === two) continue;
    dists[charToIdx(one)][charToIdx(two)] = true;
  }

  for (let k = 0; k < 52; k++) {
    for (let i = 0; i < 52; i++) {
      for (let j = 0; j < 52; j++) {
        if (dists[i][k] && dists[k][j]) {
          dists[i][j] = true;
        }
      }
    }
  }

  const result = [];

  for (let i = 0; i < 52; i++) {
    for (let j = 0; j < 52; j++) {
      if (i !== j && dists[i][j] === true) {
        result.push(`${idxToChar(i)} => ${idxToChar(j)}`);
      }
    }
  }

  return result.length + `\n` + result.join('\n');
}

console.log(solution(input));
