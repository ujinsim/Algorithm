function solution(id_list, report, k) {
  const report_map = new Map() //신고한 id 
  const report_count = new Map()
  const reported_names = new Set()
  const result = []
  
  for(let i=0; i<report.length; i++){
    const [reporter, reported] = report[i].split(" ")
    if(!report_map.has(reporter)) report_map.set(reporter, new Set())
    report_map.get(reporter).add(reported) 
  }
  
  for(let [reporter] of report_map){
    for(const value of report_map.get(reporter)){
      report_count.set(value, ((report_count.get(value)) || 0) +1)
    }
  }
  
  for(const [value, qty] of report_count){
    if(qty >=k ){
      reported_names.add(value)
    }
  }
  
  for(let i=0; i<id_list.length; i++){
    const name= id_list[i]
    const setNames = report_map.get(name)
    let count = 0
    if(setNames){
    for(const name of reported_names){
      if(setNames.has(name)){
        count++
      }
    }
    }
    result.push(count)
    
  }
  
  
  return result
}

