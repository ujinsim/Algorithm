const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function Result(num) {
  let queue = Array.from({ length: num }, (_, i) => i + 1);
  let index = 0;

  while (queue.length - index > 1) {
    index++;
    queue.push(queue[index]);
    index++;
  }

  return queue[index];
}

console.log(Result(Number(input)));
