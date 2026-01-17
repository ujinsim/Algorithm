class MinHeap {
  constructor() {
    this.h = [];
  }

  push(v) {
    this.h.push(v);
    let curr = this.h.length - 1;

    while (curr > 0) {
      let p = Math.floor((curr - 1) / 2);
      if (this.h[p][0] < this.h[curr][0]) break;
      [this.h[p], this.h[curr]] = [this.h[curr], this.h[p]];
      curr = p;
    }
  }

  pop() {
    if (this.h.length === 0) return null;
    if (this.h.length === 1) return this.h.pop();

    const rv = this.h[0];
    this.h[0] = this.h.pop();
    let curr = 0;

    while (curr * 2 + 1 < this.h.length) {
      let l = curr * 2 + 1;
      let r = curr * 2 + 2;
      let s = l;

      if (r < this.h.length && this.h[r][0] < this.h[l][0]) s = r;
      if (this.h[curr][0] < this.h[s][0]) break;
      [this.h[s], this.h[curr]] = [this.h[curr], this.h[s]];
      curr = s;
    }
    return rv;
  }
}

function solution(n, edge) {
    const map = new Map()
    
    for(let i=0; i<edge.length; i++){
        const [a,b] = edge[i]
        
        if(!map.has(a)) map.set(a,[])
        map.get(a).push([b,1])
        
        if(!map.has(b)) map.set(b,[])
        map.get(b).push([a,1])
    }
    
    let pd = new MinHeap()
    pd.push([0,1]) // count node
    
    const dists = new Array(n+1).fill(Infinity)
    dists[1] = 0
    
    while(pd.h.length>0){
        const [count,node] = pd.pop()
        if(dists[node] < count) continue
        
        const neighbors = map.get(node) || []
        
        for(let [neighbor, nextCount] of neighbors){
            if(dists[neighbor] > nextCount +count){
                dists[neighbor] = nextCount +count
                pd.push([nextCount +count, neighbor])
            }
        }
    }
    
    const max = Math.max(...dists.slice(1))
    let result = 0
    
    for(let i=1; i<dists.length; i++){
        if(max == dists[i]){
            result+=1
        }
    }
    
    return result

}