function solution(s) {
  let convertCount = 0;
  let zeroCount = 0;
  let value = s.split(''); 

  while (value.length !== 1) {
    const filtered = value.filter(ch => ch !== '0');
    zeroCount += value.length - filtered.length;

    value = filtered.length.toString(2).split(''); 
    convertCount++;
  }

  return [convertCount, zeroCount];
}
