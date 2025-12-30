const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const parseInput = input.split(`\n`);
  const results = [];

  for (let i = 1; i < parseInput.length; i += 3) {
    const commands = parseInput[i];
    const n = Number(parseInput[i+1])
    const arrString = parseInput[i + 2];
    const arr = JSON.parse(arrString);

    let head = 0;
    let tail = arr.length;
    let isR = false;
    let isError = false;

    for (let j = 0; j < commands.length; j++) {
      const command = commands[j];

      if (command == 'R') {
        isR = !isR;
      } else if (command == 'D') {
        if (head >= tail) {
          isError = true;
          break;
        }

        if (isR) {
          tail--;
        } else {
          head++;
        }
      }
    }

    if (isError) {
      results.push('error');
    } else {
      const slicedArr = arr.slice(head, tail);

      if (isR) {
        slicedArr.reverse();
      }

      results.push(JSON.stringify(slicedArr));
    }
  }

  return results.join('\n');
}

console.log(solution(input));
