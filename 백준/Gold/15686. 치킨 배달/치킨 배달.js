const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

function solution(input) {
  const parseInput = input.trim().split(`\n`);
  const [n, m] = parseInput[0].split(" ").map(Number);
  const map = parseInput.slice(1, n + 1).map((a) => a.split(" ").map(Number));

  const chickens = [];
  const houses = [];
  let minDist = Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1) houses.push([i, j]);
      if (map[i][j] === 2) chickens.push([i, j]);
    }
  }

  function getDistance(selected) {
    let cityDist = 0;
    for (const [hx, hy] of houses) {
      let minH = Infinity;
      for (const idx of selected) {
        const [cx, cy] = chickens[idx];
        const dist = Math.abs(hx - cx) + Math.abs(hy - cy);
        minH = Math.min(minH, dist);
      }
      cityDist += minH;
    }
    return cityDist;
  }

  function backtrack(start, arr) {
    if (arr.length === m) {
      minDist = Math.min(minDist, getDistance(arr));
      return;
    }

    for (let i = start; i < chickens.length; i++) {
      arr.push(i);
      backtrack(i + 1, arr);
      arr.pop();
    }
  }

  backtrack(0, []);
  return minDist;
}

console.log(solution(input));