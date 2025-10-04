function solution(n, stations, w) {
  let answer = 0;
  let pos = 1;                
  let i = 0;                 
  const cover = 2 * w + 1;    

  while (pos <= n) {
    if (i < stations.length && pos >= stations[i] - w && pos <= stations[i] + w) {
      pos = stations[i] + w + 1;
      i++;
    } else {
      answer++;
      pos += cover;
    }
  }
  return answer;
}


console.log(solution(11,[4,11],1))