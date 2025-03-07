const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function Tree(content) {
  const tree = {};

  for (let i = 0; i < content.length; i++) {
    const [a, b] = content[i].split(" ").map(Number);

    if (!tree[a]) tree[a] = [];
    if (!tree[b]) tree[b] = [];

    tree[a].push(b);
    tree[b].push(a);
  }
  return tree;
}

function Virous(tree) {
  let queue = [1];
  let visited = new Set();
  visited.add(1);

  while (queue.length > 0) {
    const node = Number(queue.shift());

    for (let i of tree[node] || []) {
      if (!visited.has(i)) {
        queue.push(i);
        visited.add(i);
      }
    }
  }
  return visited.size - 1;
}

const tree = Tree(input.splice(2));
console.log(Virous(tree));
