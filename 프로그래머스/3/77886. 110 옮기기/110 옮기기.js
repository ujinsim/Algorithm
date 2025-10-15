function solution(s) {
  return s.map(rearrange);
}

function rearrange(str) {
  const stack = [];
  let count110 = 0;

  for (const ch of str) {
    stack.push(ch);
    const L = stack.length;
    if (L >= 3 && stack[L - 3] === '1' && stack[L - 2] === '1' && stack[L - 1] === '0') {
      stack.length -= 3; 
      count110++;
    }
  }

  const base = stack.join('');
  const insert = '110'.repeat(count110);

  const idx = base.lastIndexOf('0');

  if (idx === -1) {
    return insert + base;
  } else {
    return base.slice(0, idx + 1) + insert + base.slice(idx + 1);
  }
}
