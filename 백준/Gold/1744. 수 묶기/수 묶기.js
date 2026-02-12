const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const nums = parseInput.slice(1).map(Number);

  // 1보다 큰거 / 아닌걸로 그룹화
  // 각각 곱해줌

  // 작은 그룹은
  // 1이면 더하는게 나음
  // 0은 음수랑은 곱하는게 나음 ( 1은 무조건 더하기 )
  // 둘 다 음수면 닥치고 곱하셈

  nums.sort((a, b) => a - b);

  const left = [];
  const right = [];
  let idDivide = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 1) {
      left.push(...nums.slice(0, i));
      right.push(...nums.slice(i).reverse());
      idDivide = i;
      break;
    }
  }

  if (idDivide === -1) {
    left.push(...nums);
  }

  // 묶뗘보자~
  let result = 0;
  let leftIdx = 0;
  let rightIdx = 0;

  while (rightIdx < right.length) {
    if (rightIdx + 1 <= right.length - 1) {
      result += right[rightIdx + 1] * right[rightIdx];
      rightIdx += 2;
    } else {
      result += right[rightIdx];
      rightIdx++;
    }
  }

  while (leftIdx < left.length) {
    if (
      leftIdx + 1 <= left.length - 1 &&
      left[leftIdx + 1] !== 1 &&
      left[leftIdx] !== 1
    ) {
      result += left[leftIdx + 1] * left[leftIdx];
      leftIdx += 2;
    } else {
      result += left[leftIdx];
      leftIdx++;
    }
  }

  return result;
}

console.log(solution(input));
