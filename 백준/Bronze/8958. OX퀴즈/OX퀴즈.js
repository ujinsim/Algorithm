function solution(input) {
    const parseInput = input.split('\n').filter(line => line.length > 0);
    const osxStrings = parseInput.slice(1);
    const results = [];

    function calculateScore(osxString) {
        let totalScore = 0;
        let currentStreak = 0;
        
        for (let i = 0; i < osxString.length; i++) {
            const char = osxString[i];
            
            if (char === 'O') {
                currentStreak += 1;
                totalScore += currentStreak;
            } else if (char === 'X') {
                currentStreak = 0;
            }
        }
        
        results.push(totalScore);
    }

    for (const osxString of osxStrings) {
        calculateScore(osxString);
    }

    return results.join('\n');
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim(); 

console.log(solution(input));