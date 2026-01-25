function solution(N, number) {
    if (N === number) return 1;
    
    const sets = Array.from({ length: 9 }, () => new Set());

    for (let i = 1; i <= 8; i++) {
        sets[i].add(Number(String(N).repeat(i)));

        for (let j = 1; j < i; j++) {
            for (const a of sets[j]) {
                for (const b of sets[i - j]) {
                    sets[i].add(a + b);
                    sets[i].add(a - b);
                    sets[i].add(a * b);
                    if (b !== 0) sets[i].add(Math.floor(a / b));
                }
            }
        }

        if (sets[i].has(number)) return i;
    }

    return -1;
}