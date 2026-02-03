const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().trim();

//나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값을 구하는 프로그램을 작성하시오.

function solution(input) {
  // 딱 잘랐을때 M미터 나오면 성공!

  const parseInput = input.split(`\n`);
  const [N, M] = parseInput[0].split(' ').map(Number);
  const woods = parseInput[1].split(' ').map(Number);

  let lo = 0;
  let hi = Math.max(...woods);

  let result = 0;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let sum = 0;

    for (let i = 0; i < woods.length; i++) {
      const wood = woods[i];

      if (wood > mid) {
        sum += wood - mid;
      }
    }

    if (sum >= M) {
      result = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return result;
}

console.log(solution(input));
