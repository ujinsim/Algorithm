function solution(s) {
  const arr = s.split("");
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const a = arr.shift();
    arr.push(a);
    if (isCorrect(arr)) {
      count += 1;
    }
  }

  function isCorrect(a) {
    const stack = [];

    for (let i = 0; i < a.length; i++) {
      if (a[i] === "[" || a[i] === "(" || a[i] === "{") {
        stack.push(a[i]);
      } else {
        const top = stack[stack.length - 1];
        if (
          (a[i] === ")" && top === "(") ||
          (a[i] === "]" && top === "[") ||
          (a[i] === "}" && top === "{")
        ) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  return count;
}
