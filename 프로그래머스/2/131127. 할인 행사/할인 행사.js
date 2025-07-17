function solution(want, number, discount) {
  const wantIndex = new Map();
  const target = new Array(want.length).fill(0);
  let result = 0;

  want.forEach((item, idx) => wantIndex.set(item, idx));


  for (let i = 0; i < 10; i++) {
    const idx = wantIndex.get(discount[i]);
    if (idx !== undefined) target[idx]++;
  }

  const isMatch = () => target.every((cnt, i) => cnt === number[i]);
  if (isMatch()) result++;


  for (let i = 10; i < discount.length; i++) {
    const out = wantIndex.get(discount[i - 10]);
    if (out !== undefined) target[out]--;
    
    const inn = wantIndex.get(discount[i]);
    if (inn !== undefined) target[inn]++;
    
    if (isMatch()) result++;
  }

  return result;
}
