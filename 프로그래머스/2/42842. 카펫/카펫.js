function solution(brown, yellow) {
  for (let i = 1; i * i <= yellow; i++) {
    if (yellow % i === 0) {
      const innerH = i;
      const innerW = yellow / i;

      const H = innerH + 2; 
      const W = innerW + 2; 

      const brownNeeded = 2 * (W + H) - 4;
      if (brownNeeded === brown) {
        return [W, H];
      }
    }
  }
  return [];
}
