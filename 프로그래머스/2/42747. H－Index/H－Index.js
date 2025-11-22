function solution(citations) {
    let i = citations.length; 

  
    while(i >= 0){ 
        let count = 0;

        for(let k = 0; k < citations.length; k++){
            if(citations[k] >= i){
                count += 1;
               
                if(count >= i){
                    return i;
                }
            }

          
        }

        i -= 1; 
    }
    return 0;
}