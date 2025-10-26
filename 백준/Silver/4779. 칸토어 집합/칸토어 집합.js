const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function cutter(chars, start, size) {
  if (size === 1) return;

  const third = size / 3;

  for (let i = start + third; i < start + 2 * third; i++) {
    chars[i] = ' ';
  }

  cutter(chars, start, third);
  cutter(chars, start + 2 * third, third);
}

for (let i = 0; i < input.length; i++) {
  const N = input[i];
  const length = 3 ** N;
  const chars = Array.from('-'.repeat(length));
  cutter(chars, 0, length);
  console.log(chars.join(''));
}
