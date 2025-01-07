const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function CrossCount(arr) {
  let count = 0;
  let cowObj = {};

  for (let i = 0; i < arr.length; i++) {
    let cowNum = arr[i].split(" ")[0];
    let state = arr[i].split(" ")[1];

    if (cowObj[cowNum] == undefined) {
      cowObj[cowNum] = state;
    } else {
      if (cowObj[cowNum] !== state) {
        count++;
        cowObj[cowNum] = state;
      }

      if (cowObj[cowNum] == state) {
        continue;
      }
    }
  }
  return count;
}

console.log(CrossCount(input.splice(1)));
