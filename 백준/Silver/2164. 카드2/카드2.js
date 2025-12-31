const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();


function solution(input){
    const cards = Array.from({length:input}, (_,idx)=> idx+1)
    let front = 0

    while(cards.length - front > 1){
        //버리기
        front +=1
        
        //보내기
        
        cards.push(cards[front])
        front+=1
    }

    return cards[front]
}



console.log(solution(input))