function solution(n, words) {
  const dic = new Set();
  let lastWord = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const turn = i % n + 1;
    const round = Math.floor(i / n) + 1;

    // 단어가 2글자 미만이거나
    if (word.length < 2) {
      return [turn, round];
    }

    // 중복 단어이거나
    if (dic.has(word)) {
      return [turn, round];
    }

    // 끝말잇기가 안 이어졌거나
    if (i > 0 && lastWord[lastWord.length - 1] !== word[0]) {
      return [turn, round];
    }

    dic.add(word);
    lastWord = word;
  }

  return [0, 0];
}
