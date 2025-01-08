const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function Match(cash, stock_prices) {
  function bnpStrategy(cash, prices) {
    let stocks = 0;
    for (let price of prices) {
      if (cash >= price) {
        const toBuy = Math.floor(cash / price);
        stocks += toBuy;
        cash -= toBuy * price;
      }
    }
    return cash + stocks * prices[prices.length - 1];
  }

  function timingStrategy(cash, prices) {
    let stocks = 0;
    let upDays = 0;
    let downDays = 0;

    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        upDays++;
        downDays = 0;
        if (upDays >= 3 && stocks > 0) {
          cash += stocks * prices[i];
          stocks = 0;
        }
      } else if (prices[i] < prices[i - 1]) {
        downDays++;
        upDays = 0;
        if (downDays >= 3 && cash >= prices[i]) {
          const toBuy = Math.floor(cash / prices[i]);
          stocks += toBuy;
          cash -= toBuy * prices[i];
        }
      } else {
        upDays = 0;
        downDays = 0;
      }
    }

    return cash + stocks * prices[prices.length - 1];
  }

  const bnp = bnpStrategy(cash, stock_prices);
  const timing = timingStrategy(cash, stock_prices);
  return { bnp, timing };
}

function result(cash, stock_prices) {
  const { bnp, timing } = Match(cash, stock_prices);
  if (bnp > timing) {
    return "BNP";
  } else if (bnp < timing) {
    return "TIMING";
  } else {
    return "SAMESAME";
  }
}

const cash = +input[0];
const stock_prices = input[1].split(" ").map(Number);

console.log(result(cash, stock_prices));
