function solution(n) {
    
    const numarr = String(n).split("").map(Number)
    
    
    
    return Number(numarr.sort((a,b)=> b-a).join(""))
}