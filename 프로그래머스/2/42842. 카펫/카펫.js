function solution(brown, yellow) {
  for (let i = 1; i * i <= yellow; i++) {
    if (yellow % i === 0) {
      const innerH = i;
      const innerW = yellow / i;

      const h = innerH + 2
      const w = innerW + 2
      
      const brownWidth = (h*w) - yellow
      if(brownWidth == brown){
          return h>w ? [h,w] : [w,h]
}
    }
  }
  return [];
}
