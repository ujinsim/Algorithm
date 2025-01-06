function countCrossings(observations) {
  let cowPositions = {};
  let crossingCount = 0;

  for (let observation of observations) {
    let [cow, position] = observation.split(" ").map(Number);

    if (cowPositions[cow] !== undefined && cowPositions[cow] !== position) {
      crossingCount++;
    }
    cowPositions[cow] = position;
  }

  return crossingCount;
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const observations = input.slice(1);

console.log(countCrossings(observations));
