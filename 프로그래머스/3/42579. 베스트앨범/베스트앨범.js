function solution(genres, plays) {
    const genresCount = new Map()
    const cbg = new Map()
    const n = genres.length
    const result = []
    
    for(let i=0; i<n; i++){
        let genre = genres[i]
        let play = plays[i]
        
        if(!genresCount.has(genre)) genresCount.set(genre,0)
        genresCount.set(genre,genresCount.get(genre) + play)
        
        if(!cbg.has(genre)) cbg.set(genre,[])
        cbg.get(genre).push([play,i])
    }
    
    const sg = [...genresCount].sort((a,b)=> b[1]-a[1])
    
    for(let i of sg){
        const gen = i[0]
        
       const counts = cbg.get(gen).sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0]; // 1. 재생 횟수 내림차순 (큰 게 위로)
        }
        return a[1] - b[1];     // 2. 재생 횟수 같으면 인덱스 오름차순 (작은 게 위로)
    });
        
        for(let i=0; i<2; i++){
            if(counts[i]){
            result.push(counts[i][1])
            }
        }
        
    }
    
    
    return result
}