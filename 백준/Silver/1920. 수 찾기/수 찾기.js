const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(a => a.split(' ').map(Number));

const target = input[1];
const value = input[3];
const map = new Map();
const result = [];

for (let i = 0; i < target.length; i++) {
  map.set(target[i]);
}

for (let i = 0; i < value.length; i++) {
  result.push(map.has(value[i]) ? 1 : 0);
}

console.log(result.join('\n'));
