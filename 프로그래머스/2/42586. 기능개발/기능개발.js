function solution(progresses, speeds) {
    let answer = [];

    while (progresses.length) {
        progresses = progresses.map((p, i) => p + speeds[i]);
        let count = 0
        console.log( progresses)
        while(progresses[0]>=100) {
            progresses.shift()
            speeds.shift()
            count++;
        }
        if(count != 0){
            answer.push(count)
        }
    }

    return answer;
}
