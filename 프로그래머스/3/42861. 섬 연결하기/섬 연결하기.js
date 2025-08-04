function solution(n, costs) {
    const existArrs = [0];
    let cost = 0;

    function nextValue(candidates) {
        if (candidates.length === 0) return null;
        let min = candidates[0];
        for (const i of candidates) {
            if (i[2] < min[2]) {
                min = i;
            }
        }
        return min;
    }

    while (existArrs.length < n) {
        const candidates = [];

        for (let i = 0; i < costs.length; i++) {
            const [a, b, c] = costs[i];

            if (
                (existArrs.includes(a) && !existArrs.includes(b)) ||
                (existArrs.includes(b) && !existArrs.includes(a))
            ) {
                candidates.push([a, b, c]);
            }
        }

        const next = nextValue(candidates);

        if (next) {
            cost += next[2];
            if (!existArrs.includes(next[0])) existArrs.push(next[0]);
            if (!existArrs.includes(next[1])) existArrs.push(next[1]);
        }
    }

    return cost;
}
