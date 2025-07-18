function solution(id_list, report, k) {
    const result = []
    const reportList = {}
    
    // {frodo : [muzi, apeach ]} 이런식으로 작성하고 
    // 배열 길이가 k 넘으면 무지 어피치 result ++ 
    // result 는 { [muzi,0] , [frodo,0]}
    
    for(i of id_list){
        result.push([i, 0])
    }
    
    for(i of report){
        const [from, to] = i.split(" ")
       if (!reportList[to]) {
    reportList[to] = new Set();
    }
    reportList[to].add(from);
    }
    
   for (const [reportedUser, reporters] of Object.entries(reportList)) {
  if (reporters.size >= k) {
    for (const reporter of reporters) {
      const index = id_list.indexOf(reporter);
      result[index][1] += 1;
    }
  }
}

    
    
    return result.map((a)=>a[1])
}