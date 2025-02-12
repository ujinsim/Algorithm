const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const StackState = (commands) => {
  const stack = [];
  const result = []; // 출력을 모아둘 배열

  for (const command of commands) {
    const [com, numStr] = command.split(" ");
    const num = Number(numStr);

    switch (com) {
      case "push":
        stack.push(num);
        break;

      case "pop":
        result.push(stack.length === 0 ? -1 : stack.pop());
        break;

      case "size":
        result.push(stack.length);
        break;

      case "empty":
        result.push(stack.length === 0 ? 1 : 0);
        break;

      case "top":
        result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
        break;
    }
  }

  console.log(result.join("\n"));
};

StackState(input.slice(1));
