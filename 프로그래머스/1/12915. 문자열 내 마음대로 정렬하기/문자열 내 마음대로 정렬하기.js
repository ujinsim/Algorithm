function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b); //  전체 단어 사전순
    }
    return a[n].localeCompare(b[n]); 
  });
}
