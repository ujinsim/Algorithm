const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = Number(input);

  const s0 = ['m', 'o', 'o'];

  // S 가 1보다 크다면
  // S(K) = S(k-1) + 'moooo(k+2개)' + S(k-1)

  // S(3) => 56자 (25 + 25 + 6 )
  // S(2) => 25자 (10 + 10 + 5)
  // S(1) => 10자 (3 + 3 + 4)

  let map = [3];
  let S = 0;

  while (N > map[S]) {
    const next = map[S] * 2 + (S + 4);
    S += 1;
    map.push(next);
  }

  function division(num, s) {
    if (s == 0) {
      return s0[num - 1];
    }

    const part1 = map[s - 1];
    const mid = s + 3;

    if (num <= part1) {
      return division(num, s - 1);
    } else if (part1 < num && num <= part1 + mid) {
      if (part1 + 1 == num) {
        return 'm';
      } else {
        return 'o';
      }
    } else {
      return division(num - (part1 + mid), s - 1);
    }
  }

  return division(N, S);
}

console.log(solution(input));
