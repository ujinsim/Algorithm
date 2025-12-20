const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');

function solution(input) {
  const lines = input.trim().split('\n');
  if (lines.length === 0) return "";

  const contents = lines.slice(1).map(line => line.split(' '));

  let structure = [];
  let questions = [];

  for (let i = 0; i < contents.length; i++) {
    if (contents[i].length === 1) {
      structure = contents.slice(0, i);
      questions = contents.slice(i + 1).map(v => v[0]);
      break;
    }
  }

  const tree = new Map();
  for (const [parent, child, type] of structure) {
    if (!tree.has(parent)) {
      tree.set(parent, []);
    }
    tree.get(parent).push({ name: child, isFolder: type === '1' });
  }

  const result = [];

  for (const q of questions) {
    const route = q.split('/');
    const targetFolder = route[route.length - 1];

    let fileSet = new Set();
    let totalCount = 0;

    function find(folderName) {
      const children = tree.get(folderName);
      if (!children) return;

      for (const item of children) {
        if (item.isFolder) {
          find(item.name);
        } else {
          fileSet.add(item.name);
          totalCount++;
        }
      }
    }

    find(targetFolder);
    result.push(`${fileSet.size} ${totalCount}`);
  }

  return result.join('\n');
}

process.stdout.write(solution(input) + '\n');