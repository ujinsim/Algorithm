const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input){
    const parseInput = input.split(`\n`)
    const [R,C,T] = parseInput[0].split(" ").map(Number)
    let map = parseInput.slice(1).map((a)=> a.split(" ").map(Number))

    let time = 0

    // t분만큼 퍼뜨리고 밀깅 

    let dx = [1,0,-1,0]
    let dy = [0,1,0,-1]

    let bx = [0,1,0,-1]
    let by = [1,0,-1,0]

    let tx = [0,-1,0,1]
    let ty = [1,0,-1,0]

    let oneX = -1,oneY,twoX,twoY

    for(let i=0; i<R; i++){
        for(let j=0; j<C;j ++){
            if(map[i][j] == -1){
                if(oneX == -1){
                    oneX = i
                    oneY = j
                }
                else {
                    twoX = i
                    twoY = j
                }
            }
        }
    }


    while(time < T){
        time ++

    let queue = []

    for(let i=0; i<R; i++){
        for(let j=0; j<C;j ++){

            if(map[i][j] > 0){
                queue.push([i,j])
            }
        }
    }

    const newArr = map.map((a)=> [...a])

    while(queue.length){
        const [x,y] = queue.shift()
        let spreadAmount = Math.floor(map[x][y] / 5);
        let count = 0

        for(let i=0; i<4; i++){
            const nx = dx[i] + x
            const ny = dy[i] + y

            if(nx >=0 && nx<R && ny>=0 && ny < C && !(nx == oneX && ny == oneY) && !(nx == twoX && ny == twoY) ){
                newArr[nx][ny] += spreadAmount
                count ++
            }
        }
        newArr[x][y] -= spreadAmount * count
    }


    let oxx = oneX
    let oyy = oneY
    let oIdx = 0

    let nextOValue = 0

    while(oIdx < 4){
        const nx = oxx + tx[oIdx]
        const ny = oyy + ty[oIdx]

        if(nx>=0 && nx<=oneX && ny>=0 && ny<C ){

            if(newArr[nx][ny] === -1){
                break
            }
            const dist = newArr[nx][ny]
            newArr[nx][ny] = nextOValue
            nextOValue = dist
            oxx = nx
            oyy = ny
        }
        else {
            oIdx ++
        }
    }


    let txx = twoX
    let tyy = twoY
    let tIdx = 0

    let nextTValue = 0

    while(tIdx < 4){
        const nx = txx + bx[tIdx]
        const ny = tyy + by[tIdx]

        if(nx>=twoX && nx<R && ny>=0 && ny<C ){

            if(newArr[nx][ny] === -1){
                break
            }
            
            const dist = newArr[nx][ny]
            newArr[nx][ny] = nextTValue
            nextTValue = dist
            txx = nx
            tyy = ny
        }
        else {
            tIdx ++
        }
    }

    map = newArr.map((a)=> [...a])

}

    let count = 0

    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            if(map[i][j] !== -1){
            count += map[i][j]
            }
        }
    }

    return count
}


console.log(solution(input))