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
        for (let j = 0; j < a.length; j++) {
            if (a[j] === "[" || a[j] === "(" || a[j] === "{") {
                stack.push(a[j]);
            } else {
                const top = stack[stack.length - 1];
                if (a[j] === ")" && top === "(") stack.pop();
                else if (a[j] === "]" && top === "[") stack.pop();
                else if (a[j] === "}" && top === "{") stack.pop();
                else return false; 
            }
        }
        return stack.length === 0;
    }

    return count;
}
