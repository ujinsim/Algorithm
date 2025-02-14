const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function Solution(input, dicNum, queNum) {
  dicNum = Number(dicNum);
  queNum = Number(queNum);

  const dictionnary = input.slice(0, dicNum);
  const question = input.slice(dicNum, dicNum + queNum);

  const dictMap = new Map();
  dictionnary.forEach((word, idx) => {
    dictMap.set(word, idx + 1);
  });

  const result = question.map((con) => {
    const num = Number(con);
    if (!isNaN(num)) {
      // 숫자
      return dictionnary[num - 1];
    } else {
      return dictMap.get(con);
    }
  });

  return result;
}

const [dicNum, queNum] = input[0].split(" ").map(Number);
console.log(Solution(input.slice(1), dicNum, queNum).join("\n"));
