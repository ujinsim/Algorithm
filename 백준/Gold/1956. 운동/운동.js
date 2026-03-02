const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [V, E] = parseInput[0].split(' ').map(Number);
  const nums = parseInput.slice(1).map(a => a.split(' ').map(Number));

  // 1->3 3->1 이게 가장 직은거 플로이드 우 ㅓ셜 단뱡향
  // 플로이드 워셜은 작은거있으면 업댓해줘야됭

  const dists = Array.from({ length: V + 1 }, () =>
    new Array(V + 1).fill(Infinity)
  );

  for (let [n, v, c] of nums) {
    dists[n][v] = Math.min(dists[n][v], c);
  }

  for (let i = 1; i <= V; i++) {
    dists[i][i] = 0;
  }

  for (let k = 1; k <= V; k++) {
    for (let i = 1; i <= V; i++) {
      for (let j = 1; j <= V; j++) {
        dists[i][j] = Math.min(dists[i][k] + dists[k][j], dists[i][j]);
      }
    }
  }

  let result = Infinity;

  for (let i = 1; i <= V; i++) {
    for (let j = 1; j <= V; j++) {
      if (i !== j) {
        result = Math.min(result, dists[i][j] + dists[j][i]);
      }
    }
  }

  return result == Infinity ? -1 : result;
}

console.log(solution(input));
