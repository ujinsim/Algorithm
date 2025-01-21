const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function Result(r, c, clouds) {
  const resultArr = [];

  for (let i = 0; i < r; i++) {
    const row = clouds[i].split("");
    let cCount = -1;

    const resultRow = row.map((char) => {
      if (char === "c") {
        cCount = 0;
        return 0;
      } else {
        if (cCount === -1) {
          return -1;
        } else {
          cCount++;
          return cCount;
        }
      }
    });

    resultArr.push(resultRow);
  }

  return resultArr;
}

const [r, c] = input[0].split(" ").map(Number);
const clouds = input.slice(1);

const result = Result(r, c, clouds);
result.forEach((row) => console.log(row.join(" ")));
