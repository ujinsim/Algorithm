const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();
function solution(input) {
  // S 가 1보다 크다면
  // S(K) = S(k-1) + 'moooo(k+2개)' + S(k-1)

  // S(3) => 56자 (25 + 25 + 6 )
  // S(2) => 25자 (10 + 10 + 5)
  // S(1) => 10자 (3 + 3 + 4)

  // N번째 나올때까지 찾는다
  // 11이면 S(2)에 있고 10 5 10 구간중에 5 구간 1번째에 있으므로 M이다
  // 예를 들어 20에 이면 5와 같다 20-10-5 , 5는 S(1)에 4중 2번째여서 o다
  // 최대한 수를 줄여서 S(1)에서 찾도록 한다
  // 예를 들어 50이면 S(3)에 존재함을 알아낸다
  // 6을빼면 42이고 반절빼면 17이기에 17번 수열과 같다 17도 2번 수열에서 -5-10 2번 수열과 같다
  const N = Number(input);
  const map = [3];

  let curr = 3;

  while (curr < N) {
    map.push(curr * 2 + (map.length + 3));
    curr = map[map.length - 1];
  }

  const s0 = ['m', 'o', 'o'];

  function recursive(num, s) {
    if (s == 0) {
      return s0[num - 1];
    }

    const prevLen = map[s - 1];
    const midLen = s + 3;

    if (num <= prevLen) {
      return recursive(num, s - 1);
    } else if (num <= midLen + prevLen) {
      if (num == prevLen + 1) {
        return 'm';
      } else {
        return 'o';
      }
    } else {
      return recursive(num - prevLen - midLen, s - 1);
    }
  }

  return recursive(N, map.length - 1);
}

console.log(solution(input));
