function solution(N, stages) {
  const arr1 = new Array(N).fill(0);
  const arr2 = new Array(N).fill(0);

  for (let i = 0; i < stages.length; i++) {
    const num = stages[i];
    if (num <= N) {
      arr1[num - 1] += 1;
    }
  }

  for (let j = 0; j < N; j++) {
    for (let i = 0; i < stages.length; i++) {
      if (stages[i] >= j + 1) {
        arr2[j] += 1;
      }
    }
  }

  const result = [];

  for (let k = 0; k < N; k++) {
    const fail = arr2[k] === 0 ? 0 : arr1[k] / arr2[k];
    result.push([k + 1, fail]);
  }

  result.sort((a, b) => {
    if (b[1] === a[1]) return a[0] - b[0];
    return b[1] - a[1];
  });

  return result.map(r => r[0]);
}
