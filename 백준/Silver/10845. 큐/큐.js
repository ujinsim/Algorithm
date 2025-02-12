const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const queueState = (commands) => {
  const queue = [];
  const result = [];

  for (const command of commands) {
    const [com, numStr] = command.split(" ");
    const num = Number(numStr);

    switch (com) {
      case "push":
        queue.push(num);

        break;

      case "pop":
        result.push(queue.length === 0 ? -1 : queue.shift());

        break;

      case "size":
        result.push(queue.length);

        break;

      case "empty":
        result.push(queue.length === 0 ? 1 : 0);

        break;

      case "front":
        result.push(queue.length === 0 ? -1 : queue[0]);

        break;
      case "back":
        result.push(queue.length === 0 ? -1 : queue[queue.length - 1]);

        break;
    }
  }

  console.log(result.join("\n"));
};

queueState(input.slice(1));
