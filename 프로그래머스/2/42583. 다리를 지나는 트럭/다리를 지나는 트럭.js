function solution(bridge_length, weight, truck_weights) {
    const truck = new Array(bridge_length).fill(0)
    let count = 0
    let current_weight = 0
    let currentCount = 0
    
    while(truck_weights.length > 0 || current_weight > 0){
      count ++
      current_weight -= truck.shift();
    
      const next_truck_weight = truck_weights[0];
      
      if(truck_weights.length > 0 && current_weight + next_truck_weight <= weight && currentCount + 1 <= bridge_length){
        const value = truck_weights.shift()
        truck.push(value)
        current_weight += value
      }
      else if(current_weight > 0){
        truck.push(0)
      }
      else {
        break;
      }
    }
  
  return count
}