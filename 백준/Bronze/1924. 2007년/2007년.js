const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();


const solution = (input) => {
 
    const dayArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const [month, day] = input.split(" ").map(Number);
    let totalDays = 0; 
    
    const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    for (let i = 1; i < month; i++) {
        totalDays += monthDays[i];
    }
    
    totalDays += day;


    const dayArrCorrected = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    
  
    return dayArrCorrected[(totalDays - 1) % 7];
};

console.log(solution(input));