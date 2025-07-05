function solution(numbers) {
  const arrset = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      arrset.push(sum);
    }
  }

  const result = [...new Set(arrset)];
  result.sort((a, b) => a - b);

  return result;
}
