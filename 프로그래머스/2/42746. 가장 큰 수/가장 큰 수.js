function solution(numbers) {
  const sortedNums = numbers
    .map(String)
    .sort((a, b) => {
      if (a + b > b + a) return -1; 
      else if (a + b < b + a) return 1; 
      else return 0; 
    });

  const result = sortedNums.join("");

  return result[0] === "0" ? "0" : result;
}
