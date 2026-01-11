const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const lines = input.trim().split('\n');
  let cursor = 0;
  const wheels = [];
  for (let i = 0; i < 4; i++)
    wheels.push(lines[cursor++].split('').map(Number));

  const k = Number(lines[cursor++]);
  const orders = [];
  for (let i = 0; i < k; i++)
    orders.push(lines[cursor++].split(' ').map(Number));

  for (const [target, dir] of orders) {
    const wheelIdx = target - 1;
    const rotateDirs = new Array(4).fill(0);
    rotateDirs[wheelIdx] = dir;

    for (let i = wheelIdx; i > 0; i--) {
      if (wheels[i][6] !== wheels[i - 1][2]) {
        rotateDirs[i - 1] = -rotateDirs[i];
      } else {
        break;
      }
    }

    for (let i = wheelIdx; i < 3; i++) {
      if (wheels[i][2] !== wheels[i + 1][6]) {
        rotateDirs[i + 1] = -rotateDirs[i];
      } else {
        break;
      }
    }

    for (let i = 0; i < 4; i++) {
      if (rotateDirs[i] === 1) {
        wheels[i].unshift(wheels[i].pop());
      } else if (rotateDirs[i] === -1) {
        wheels[i].push(wheels[i].shift());
      }
    }
  }

  let score = 0;
  if (wheels[0][0] === 1) score += 1;
  if (wheels[1][0] === 1) score += 2;
  if (wheels[2][0] === 1) score += 4;
  if (wheels[3][0] === 1) score += 8;

  return score;
}

console.log(solution(input));
