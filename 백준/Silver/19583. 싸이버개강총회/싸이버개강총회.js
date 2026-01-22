const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  // 1(입장여부) -> 개강총회 시작 시간 이하에 대화한적이는지
  // 2(끝까지 존재 여부) -> 개총 끝나는 시간 이상부터 기록이 있는지 , 스트리밍 끝나자마자 남김
  // 스트리밍 끝 이후면 안됨

  //단, 00:00부터는 개강총회를 시작하기 전의 대기 시간이며,
  //개강총회 스트리밍 끝난 시간 이후로 남겨져 있는 채팅 기록은
  //다른 스트리밍 영상의 채팅 기록으로 간주한다.

  const parseInput = input.split(`\n`);
  const [S, E, Q] = parseInput[0].split(' ');
  const list = parseInput.slice(1).map(a => a.split(' '));

  const firstSet = new Set();
  const secondSet = new Set();

  for (let [time, name] of list) {
    // 00:00부터 S전까지 있으면 fistSet에 추가

    const [h, m] = time.split(':').map(Number);
    const [sh, sm] = S.split(':').map(Number);

    if (sh > h) {
      firstSet.add(name);
    } else if (sh == h) {
      if (m <= sm) {
        firstSet.add(name);
      }
    }

    // E 이상 Q 이하로 있으면 secondSet에 추가
    const [eh, em] = E.split(':').map(Number);
    const [qh, qm] = Q.split(':').map(Number);

    if (eh < h) {
      if (qh > h) {
        secondSet.add(name);
      } else if (qh == h) {
        if (qm >= m) {
          secondSet.add(name);
        }
      }
    } else if (eh == h) {
      if (em <= m) {
        if (qh > h) {
          secondSet.add(name);
        } else if (qh == h) {
          if (qm >= m) {
            secondSet.add(name);
          }
        }
      }
    }
  }

  const resultSet = new Set();

  for (let v of firstSet) {
    if (secondSet.has(v)) {
      resultSet.add(v);
    }
  }

  for (let v of secondSet) {
    if (firstSet.has(v)) {
      resultSet.add(v);
    }
  }

  return resultSet.size;
}

console.log(solution(input));
