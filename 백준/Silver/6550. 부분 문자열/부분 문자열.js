const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8')
  .trim()
  .split('\n')
  .map(l => l.trim())
  .filter(Boolean); 

const result = [];

for (let i = 0; i < lines.length; i++) {
  const [s, t] = lines[i].split(/\s+/);
  if (!s || !t) continue;              

  let current = 0;

  for (let j = 0; j < t.length; j++) {
    if (current < s.length && s[current] === t[j]) {
      current++;
    }
  }

  result.push(current === s.length ? 'Yes' : 'No');
}

console.log(result.join('\n'));
