const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

class MinHeap {
  constructor() {
    this.h = [];
  }

  push(a) {
    this.h.push(a);
    let curr = this.h.length - 1;
    while (curr > 0) {
      let p = Math.floor((curr - 1) / 2);
      if (this.h[p][0] <= this.h[curr][0]) break;
      [this.h[p], this.h[curr]] = [this.h[curr], this.h[p]];
      curr = p;
    }
  }

  pop() {
    if (this.h.length == 0) return null;
    if (this.h.length == 1) return this.h.pop();

    const rv = this.h[0];
    this.h[0] = this.h.pop();
    let curr = 0;

    while (curr * 2 + 1 < this.h.length) {
      let l = curr * 2 + 1;
      let r = curr * 2 + 2;
      let s = l;

      if (r < this.h.length && this.h[r][0] < this.h[l][0]) s = r;
      if (this.h[curr][0] <= this.h[s][0]) break;
      [this.h[s], this.h[curr]] = [this.h[curr], this.h[s]];
      curr = s;
    }
    return rv;
  }
}

function solution(input) {
  const parseInput = input.split(`\n`);
  const N = Number(parseInput[0]);
  const [A, B, C] = parseInput[1].split(' ').map(Number);
  const M = Number(parseInput[1]);
  const nums = parseInput.slice(3).map(a => a.split(' ').map(Number));
  const graph = new Map();

  for (let i = 0; i < nums.length; i++) {
    const [n, v, c] = nums[i];

    if (!graph.has(n)) graph.set(n, []);
    graph.get(n).push([v, c]);

    if (!graph.has(v)) graph.set(v, []);
    graph.get(v).push([n, c]);
  }

  // A위치에서 각 거리 구하기
  // B위치에서 각 거리 구하기
  // C 위치에서 각 거리 구하기
  // 거리를 비교해서 각 가장 작은 거리중 가장 큰 거리를 가지고 있는 것의 노드번호를 뽑자

  function dist(node) {
    const distArr = new Array(N + 1).fill(Infinity);
    distArr[node] = 0;

    const pd = new MinHeap();
    pd.push([0, node]);

    while (pd.h.length > 0) {
      const [c, n] = pd.pop();

      if (distArr[n] < c) continue;

      const neighbors = graph.get(n) || [];
      for (let i = 0; i < neighbors.length; i++) {
        const [nextNode, nextCount] = neighbors[i];

        if (distArr[nextNode] > nextCount + c) {
          distArr[nextNode] = nextCount + c;
          pd.push([distArr[nextNode], nextNode]);
        }
      }
    }

    return distArr;
  }

  const resultADist = dist(A);
  const resultBDist = dist(B);
  const resultCDist = dist(C);

  let maxResult = 0;
  let resultIdx = [];

  for (let i = 1; i < N; i++) {
    const value = Math.min(resultADist[i], resultBDist[i], resultCDist[i]);
    if (value > maxResult) {
      maxResult = value;
      resultIdx = [i];
    } else if (value == maxResult) {
      resultIdx.push(i);
    }
  }

  return Math.min(...resultIdx);
}

console.log(solution(input));
