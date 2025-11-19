function solution(genres, plays) {

 const map = new Map()
 const count = new Map()
 const result = []
 
 for(let i=0; i<genres.length; i++){
    const genre = genres[i]
    const play = plays[i]
    if(!map.has(genre)) map.set(genre,[])
     map.get(genre).push([play,i])
 }
    
 for(const [key, value] of map){
    value.sort((a,b)=> b[0]-a[0])
 }   
 
  for(let i=0; i<genres.length; i++){
    const genre = genres[i]
    const play = plays[i]
    if(!count.has(genre)) count.set(genre,0)
     count.set(genre, count.get(genre)+play)
 }
    
 for(const [key, value] of map){
     console.log(key, value)
 }
    
 
  const countArr = Array.from(count)
  countArr.sort((a,b)=> b[1]-a[1])
    
  for(let i=0; i<countArr.length; i++){
      const genre = countArr[i][0]
      const sortedCounts = map.get(genre)
      
      for(let j=0; j < Math.min(sortedCounts.length, 2); j++){
          result.push(sortedCounts[j][1])
      }
  }
    return result
}


