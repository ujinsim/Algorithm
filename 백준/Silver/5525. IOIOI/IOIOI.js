const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

function solution(input) {
  const parsedInput = input.trim().split('\n');
  const n = Number(parsedInput[0]);
  const m = Number(parsedInput[1]);
  const p = parsedInput[2];

  const P1 = "IOI";
  const PS = "OI";
  const PN = P1 + PS.repeat(n - 1);

  let result = 0;

  for (let i = 0; i <= p.length - PN.length; i++) {
    let currentNum = 0;
    let ok = true;

    for (let j = 0; j < PN.length; j++) {
      const current = PN[currentNum];
      if (p[i + j] === current) {
        currentNum++;
      } else {
        ok = false;
        break;
      }
    }

    if (ok && currentNum === PN.length) {
      result += 1;
    }
  }

  console.log(result);
}

solution(input);
