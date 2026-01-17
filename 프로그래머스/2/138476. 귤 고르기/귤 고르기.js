function solution(k, tangerine) {
    
    const map = new Map()
    
    for(let i=0; i<tangerine.length; i++){
        const t= tangerine[i]
        if(!map.has(t)) map.set(t,1)
        else{
            map.set(t,Number(map.get(t))+1)
        }
    }
    const arr = []
    
    for(let [k,v] of map){
        arr.push([k,v])
    }
    
    let result = 0
    arr.sort((a,b)=> b[1]-a[1])
    
    while(k>0){
        const [i,num] = arr[result]
        k-=num
        result+=1
    }
    
    return result
}

// 각 번호별 개수를 정해서 큰 수로 정렬을 하고 k개가 빠질때까지 result를 더한다 