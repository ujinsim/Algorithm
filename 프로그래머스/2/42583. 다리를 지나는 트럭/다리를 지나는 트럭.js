function solution(bridge_length, weight, truck_weights) {
    let seconds = 0;
    let goingT = []; 
    let totalWeight = 0;

    while (truck_weights.length > 0 || goingT.length > 0) {
        seconds++;

        if (goingT.length > 0 && goingT[0].time === bridge_length) {
            totalWeight -= goingT.shift().weight;
        }
    goingT.forEach(truck => truck.time++);

        if (
            truck_weights.length > 0 &&
            totalWeight + truck_weights[0] <= weight &&
            goingT.length < bridge_length
        ) {
            const nextWeight = truck_weights.shift();
            goingT.push({ weight: nextWeight, time: 1 });
            totalWeight += nextWeight;
        }
    }

    return seconds;
}
