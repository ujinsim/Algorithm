function solution(priorities, location) {
    let queue = priorities.map((priority, index) => {
        return { priority, index }; 
    });

    let count = 0;

    while (queue.length) {
        const current = queue.shift(); 

   
        const hasHigher = queue.some(job => job.priority > current.priority);

        if (hasHigher) {
            queue.push(current); 
        } else {
            count++; 

            if (current.index === location) {
                return count; 
            }
        }
    }
}
