function solution(prices) {
  const result = [];

  for (let i = 0; i < prices.length; i++) {
    let seconds = 0;

    for (let j = i + 1; j < prices.length; j++) {
      seconds++;
      if (prices[j] < prices[i]) {
        break;
      }
    }
    result.push(seconds);
  }

  return result;
}
