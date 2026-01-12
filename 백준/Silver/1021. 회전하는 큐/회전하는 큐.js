const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const [N, M] = parseInput[0].split(' ').map(Number);
  const nums = parseInput[1].split(' ').map(Number);

  const arr = Array.from({ length: N }, (v, i) => i + 1);
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    // 어디가 가까운지
    for (let k = 0; k < arr.length; k++) {
      if (n == arr[k]) {
        if (k <= arr.length - k) {
          // k가 앞쪽
          while (arr[0] !== n) {
            const v = arr.shift();
            arr.push(v);
            count += 1;
          }
          arr.shift();
        } else {
          // k가 뒷쪽
          while (arr[0] !== n) {
            const v = arr.pop();
            arr.unshift(v);
            count += 1;
          }
          arr.shift();
        }
      }
    }
  }
  return count;
}

console.log(solution(input));
