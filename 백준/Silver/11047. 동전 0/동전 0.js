const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, won] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

let money = won;
let result = 0;

for (let i = n - 1; i >= 0; i--) {
  if (coins[i] <= money) {
    result += Math.floor(money / coins[i]);
    money %= coins[i];
  }
}

console.log(result);
