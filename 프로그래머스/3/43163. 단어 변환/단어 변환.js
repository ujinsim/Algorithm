function solution(begin, target, words) {
    let visited = new Array(words.length).fill(false);
    let queue = [begin];
    let count = 0;

    while (queue.length) {
        let size = queue.length; 

        for (let i = 0; i < size; i++) {
            let word = queue.shift();

            if (word === target) return count;

            for (let j = 0; j < words.length; j++) {
                if (!visited[j] && isOneLetterDiff(word, words[j])) {
                    visited[j] = true;
                    queue.push(words[j]);
                }
            }
        }

        count++; 
    }

    return 0;
}

function isOneLetterDiff(a, b) {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) diff++;
    }
    return diff === 1;
}
