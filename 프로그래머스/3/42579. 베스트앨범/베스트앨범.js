function solution(genres, plays) {

 const map = new Map()
 const count = new Map()
 const result = []
 
 for(let i=0; i<genres.length; i++){
    const genre = genres[i]
    const play = plays[i]
    if(!map.has(genre)) map.set(genre,[])
     map.get(genre).push([play,i])
     
     if(!count.has(genre)) count.set(genre, 0)
     count.set(genre, count.get(genre) + play)
    
 }
    
    
 const arr = [...count.entries()].sort((a,b)=> b[1]-a[1])
 
 
 for(let i of arr){
     const [g,p] = i
     
     const sortedArr = map.get(g).sort((a,b)=> b[0]-a[0])
     
     for(let k=0; k<2; k++){
         if(sortedArr[k]){
             result.push(sortedArr[k][1])
         }
     }
 }
 

 
 // 총 합이 가장 큰거별로 두개 
    
 return result
}