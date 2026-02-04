const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const nums = parseInput.slice(1)[0].split(' ').map(Number);

  //     돌을 한번 건너갈 때마다 쓸 수 있는 힘은 최대 K이다.
  // 가장 왼쪽 돌에서 출발하여 가장 오른쪽에 있는 돌로 건너갈 수 있는 모든 경우 중 K의 최솟값을 구해보자.

  // 다 돌아보면서 저 값이 최소로 나오면 끝

  let low = 0;
  let high = (Math.max(...nums) - Math.min(...nums) + 1) * (N - 1);

  // 1 4 1 3 1
  // 1 2 3 4 5

  // 1 -> 3 -> 5 이렇게 하면 2나옴 ㄷ

  // 최대를 어케찾지 (가장 큰 요소 - 가장 작은 요소 + 1 ) x 길이 - 1

  let result = 0;

  function canCross(K) {
    const visited = new Array(N + 1).fill(false);
    visited[0] = true;
    let queue = [];

    queue.push([0]);

    while (queue.length) {
      const [cur] = queue.shift();

      for (let i = cur + 1; i < N; i++) {
        if (!visited[i]) {
          const calResult = (i - cur) * (1 + Math.abs(nums[i] - nums[cur]));
          if (calResult <= K) {
            visited[i] = true;
            queue.push([i]);
          }
        }
      }
    }

    return visited[N - 1] ? true : false;
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let sum = 0;

    // 건널 수 있는 것중에서 최솟값

    // 안된거임
    if (!canCross(mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
      result = mid;
    }
  }

  return result;
}

console.log(solution(input));
