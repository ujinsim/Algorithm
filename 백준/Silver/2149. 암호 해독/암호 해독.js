const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const key = input[0];
const cipher = input[1];
const n = key.length;
const rows = cipher.length / n;

const sortedKey = key
  .split("")
  .map((ch, idx) => [ch, idx])
  .sort((a, b) => a[0].localeCompare(b[0]));

const columns = [];
let pos = 0;
for (let i = 0; i < n; i++) {
  const colText = cipher.slice(pos, pos + rows);
  pos += rows;
  columns.push(colText.split(""));
}

const table = Array.from({ length: rows }, () => Array(n).fill(""));
for (let i = 0; i < n; i++) {
  const originalIndex = sortedKey[i][1];
  for (let r = 0; r < rows; r++) {
    table[r][originalIndex] = columns[i][r];
  }
}

let result = "";
for (let r = 0; r < rows; r++) {
  result += table[r].join("");
}

console.log(result);
