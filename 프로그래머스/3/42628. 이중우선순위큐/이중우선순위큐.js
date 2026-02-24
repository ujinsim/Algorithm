class MinHeap {
    constructor(){
        this.h = []
    }
    
    push(a){
        this.h.push(a)
        let cur = this.h.length -1
        
        while(cur > 0){
            let p = Math.floor((cur-1)/2)
            
            if(this.h[p][0] <= this.h[cur][0]) break
            [this.h[p], this.h[cur]] = [this.h[cur], this.h[p]] 
            cur = p
        }   
    }
    
    popMax(){
        if(this.h.length == 0) return null
        
        let maxIdx = 0
        
        for(let i=1; i<this.h.length; i++){
            if(this.h[i][0] > this.h[maxIdx][0]){
                maxIdx = i
            }
        }
        
        const maxValue = this.h[maxIdx]
        this.h.splice(maxIdx, 1)
        
        return maxValue
    }
    
    popMin(){
        if(this.h.length == 0) return null
        if(this.h.length == 1) return this.h.pop()
        
        let rv = this.h[0]
        this.h[0] = this.h.pop()
        let cur = 0
        
        while(cur*2+1 < this.h.length){
            let l = cur*2 + 1
            let r = cur*2 + 2
            let s = l
            
            if(r < this.h.length && this.h[r][0] < this.h[l][0]) s = r
            if(this.h[s][0] > this.h[cur][0]) break
            [this.h[s], this.h[cur]] = [this.h[cur], this.h[s]] 
            cur = s
            
        }
        return rv
    }
}

function solution(operations){
    const pd = new MinHeap()
    
for (let operation of operations) {
        const [oper, num] = operation.split(" ");
        const val = Number(num);
        
        if (oper === 'I') {
            pd.push([val, 0]);
        } else {
            
            if (val === -1) pd.popMin();
            else pd.popMax();
        }
    }
    
    let max,min
    
if (pd.h.length === 0) return [0, 0];

    const remainingValues = pd.h.map(item => item[0]);
    const finalMax = Math.max(...remainingValues);
    const finalMin = Math.min(...remainingValues);
    
    return [finalMax, finalMin];
}