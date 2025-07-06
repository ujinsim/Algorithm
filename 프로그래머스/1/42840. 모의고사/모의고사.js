function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const ways = [one, two, three];

  const count = {};

  for (let way = 0; way < ways.length; way++) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === ways[way][i % ways[way].length]) {
        if (count[way]) count[way] += 1;
        else count[way] = 1;
      }
    }
  }

  const max = Math.max(...Object.values(count));

  const result = [];
  for (let [key, value] of Object.entries(count)) {
    if (value === max) {
      result.push(Number(key) + 1);
    }
  }

  return result.sort((a, b) => a - b); 
}
