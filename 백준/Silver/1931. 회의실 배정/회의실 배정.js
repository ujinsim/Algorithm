const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const array = [];
let n = null;

rl.on("line", (line) => {
  if (n === null) {
    // 첫 번째 줄 처리
    n = parseInt(line.trim(), 10);
  } else {
    // 나머지 줄 처리
    array.push(line.trim().split(" ").map(Number));
  }

  if (array.length === n) {
    rl.close();
  }
});

rl.on("close", () => {
  const sortedArray = array.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]; // 끝나는 시간이 같다면 시작 시간을 기준으로 정렬
    }
    return a[1] - b[1]; // 끝나는 시간 기준 정렬
  });

  // 강의 선택
  let count = 0;
  let lastEndTime = 0;

  for (const [start, end] of sortedArray) {
    if (start >= lastEndTime) {
      count++;
      lastEndTime = end;
    }
  }

  console.log(count);
});

// 빨리 끝나는 순으로 해야되고
// 끝나는 순 기준으로 정렬
// 선택된 강의와 겹치면 pop( 현재 강의가 끝나는 시간보다 시작시간이 작음 )
// 선택시 count +=1
// 더 이상 선택할 수 없는 array 가 없을 때까지
