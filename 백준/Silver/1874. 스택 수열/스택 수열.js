const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const target = input.slice(1).map(Number);

const stack = [];
const result = [];
let next = 1;

for (let i = 0; i < N; i++) {
  const want = target[i];

  while (next <= N && (stack.length === 0 || stack[stack.length - 1] < want)) {
    stack.push(next++);
    result.push('+');
  }

  if (stack.length && stack[stack.length - 1] === want) {
    stack.pop();
    result.push('-');
  } else {
    console.log('NO');
    process.exit(0);
  }
}

console.log(result.join('\n'));
