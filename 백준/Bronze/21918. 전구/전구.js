const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function BuldStateResult(bulbState, commands) {
  return commands.map((command) => {
    const commandNum = Number(command.split(" ")[0]);
    const [start, end] = command.split(" ").splice(1).map(Number);

    switch (commandNum) {
      case 1:
        bulbState[start - 1] = end;
        break;

      case 2:
        for (let i = start - 1; i < end; i++) {
          bulbState[i] = bulbState[i] === 0 ? 1 : 0;
        }
        break;

      case 3:
      case 4:
        const newState = commandNum === 3 ? 0 : 1;
        for (let i = start - 1; i < end; i++) {
          bulbState[i] = newState;
        }
        break;

      default:
        console.error(`${commandNum}`);
    }

    return bulbState;
  });
}

const buldState = input[1].split(" ").map((e) => parseInt(e, 10));
const commands = input.slice(2);

const result = BuldStateResult(buldState, commands);
console.log(result[result.length - 1].join(" "));
