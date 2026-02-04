const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split('\n');
  const T = Number(parseInput[0]);

  let currentLine = 1;

  const results = [];

  for (let i = 0; i < T; i++) {
    const n = Number(parseInput[currentLine]);

    const rowCount = Math.ceil(n / 10);

    const medians = [];
    const sortedList = [];

    const nums = parseInput
      .slice(currentLine + 1, currentLine + 1 + rowCount)
      .join(' ')
      .split(/\s+/)
      .filter(v => v !== '')
      .map(Number);

    for (let j = 0; j < n; j++) {
      const val = nums[j];

      let low = 0;
      let high = sortedList.length;

      while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (sortedList[mid] < val) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }

      sortedList.splice(low, 0, val);

      if ((j + 1) % 2 !== 0) {
        medians.push(sortedList[Math.floor(j / 2)]);
      }
    }

    console.log(medians.length);
    let output = '';
    for (let k = 0; k < medians.length; k++) {
      output += medians[k] + ' ';
      if ((k + 1) % 10 === 0 || k === medians.length - 1) {
        console.log(output.trim());
        output = '';
      }
    }

    currentLine += rowCount + 1;
  }

  return results;
}

solution(input);
