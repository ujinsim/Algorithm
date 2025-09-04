function solution(n)
{
    let value = n
    let count = 0
    
    while(value !== 1){
        if(value % 2 !== 0){
            value -= 1
            count ++; 
        }
        else{
            value = value/2
        }
    }

    return count+1;
}
// 1 2 4 8 16 32 64 128 256 
// 제곱근이 있는지 알아보기?
// 4 -> 제곱근 1 + 1점프
// 6 -> 1,2 3 6
// 2500 , 1250 , 625 , 624 , 312 , 156 , 78, 39 , 38, 19, 18, 9,8,4
// 4 , 1
// 3, 2 