// class MinHeap {
//     constructor(){
//         this.h = []
//     }
    
//     push(a){
//         // 위로 올리고 내려보내기 
//         this.h.push(a)
//         let cur = this.h.length - 1
        
//         while(cur > 0){
//             let p = Math.floor((cur-1)/2)
//             if(this.h[cur][0] > this.h[p][0]) break
//             [this.h[p], this.h[cur]] = [this.h[cur], this.h[p]]
//             cur = p
//         }
//     }
    
//     pop(){
//         // 맨위에 빼기 
//         if(this.h.length == 0) return null
//         if(this.h.length == 1) return this.h.pop()
         
//         let rv = this.h[0]
//         this.h[0] = this.h.pop()
//         let cur = 0
        
//         while(cur * 2 + 1 < this.h.length){
//             let l = cur * 2 + 1
//             let r = cur * 2 + 2
//             let s = l
            
//             if(r < this.h.length && this.h[r][0] < this.h[l][0]) s = r
//             if(this.h[cur][0] <= this.h[s][0]) break
//             [this.h[s], this.h[cur]] = [this.h[cur], this.h[s]]
//             cur = s
//         }
//         return rv
//     }
// }

function solution(n, s, a, b, fares) {
    // 시작 -> A -> B와 ,시작 -> B -> A와 , 시작 -> A + 시작 -> B 중에 작은거 
    // 데이크 스트라 !! 
    
    const dists = Array.from({length:n+1} , ()=> new Array(n+1).fill(Infinity))
    
    for(let [k,v,c] of fares){
        dists[k][v] = Math.min(dists[k][v], c)
        dists[v][k] = Math.min(dists[v][k], c)
    }
    
    for(let i=1; i<=n; i++){
        dists[i][i] = 0
    }
    
    for(let k=1; k<=n; k++){
        for(let i=1; i<=n; i++){
            for(let j=1; j<=n; j++){
                dists[i][j] = Math.min(dists[i][j] , dists[i][k] + dists[k][j])
            }
        }
    }
    
    // 찢어지는 경우 S에서 5 -> 6 
    let candi4 = Infinity 
    
    for(let k=1; k<=n; k++){
        if(k!==s && k!== a && k!== b){
            candi4 = Math.min(candi4, dists[s][k] + dists[k][a] + dists[k][b])
        }
    }
    
    
    
    const candi1 = dists[s][a] + dists[a][b]
    const candi2 = dists[s][b] + dists[b][a]
    const candi3 = dists[s][a] + dists[s][b]
    
    return Math.min(candi1, candi2, candi3 , candi4)
}