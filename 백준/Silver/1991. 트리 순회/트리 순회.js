const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function Preprocessing(count, treeData) {
  let tree = {};
  for (let i = 0; i < count; i++) {
    const [root, left, right] = treeData[i].split(" ");
    tree[root] = [left === "." ? null : left, right === "." ? null : right];
  }
  return tree;
}

function Preorder(tree, node) {
  if (node === null) return "";
  return node + Preorder(tree, tree[node][0]) + Preorder(tree, tree[node][1]);
}

function Inorder(tree, node) {
  if (node === null) return "";
  return Inorder(tree, tree[node][0]) + node + Inorder(tree, tree[node][1]);
}

function Postorder(tree, node) {
  if (node === null) return "";
  return Postorder(tree, tree[node][0]) + Postorder(tree, tree[node][1]) + node;
}

const n = parseInt(input[0]);
const tree = Preprocessing(n, input.slice(1));

console.log(Preorder(tree, "A"));
console.log(Inorder(tree, "A"));
console.log(Postorder(tree, "A"));
