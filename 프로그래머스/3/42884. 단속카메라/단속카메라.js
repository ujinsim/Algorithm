function solution(routes) {

    //모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 
    // 최소 몇 대 카메라 설치 ?
    // 끝 부분을 늘려서 최소의 영역 알아보기 
    
    
    routes.sort((a,b)=> a[1]-b[1])
    
    let camera = -Infinity
    let count = 0
    
    for(let [start,end] of routes){
        if(start > camera){
        camera = end
        count ++
        }
    }

    
    return count
    
}