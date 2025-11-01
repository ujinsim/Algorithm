function solution(tickets) {
    const targetCount = tickets.length + 1;
    const ticketsMap = new Map();
    
    for(let i = 0; i < tickets.length; i++) {
        const [start, end] = tickets[i];
        if(!ticketsMap.has(start)) ticketsMap.set(start, []);
        ticketsMap.get(start).push({ destination: end, index: i, used: false });
    }
    

    for(const destinations of ticketsMap.values()){
    
        destinations.sort((a, b) => a.destination.localeCompare(b.destination));
    }
    
    const queue = [
        ["ICN", ["ICN"], new Set()]
    ];

    while(queue.length){
        const [current, path, usedTickets] = queue.shift();
        
       
        if(path.length === targetCount) {
            return path;
        }
        
        const possibleDestinations = ticketsMap.get(current) || [];
        
        for(let i = 0; i < possibleDestinations.length; i++){
            const ticket = possibleDestinations[i];
            
            if(!usedTickets.has(ticket.index)){
                
              
                const newUsedTickets = new Set(usedTickets);
                newUsedTickets.add(ticket.index);
                
    
                const newPath = [...path, ticket.destination];
                
           
                queue.push([ticket.destination, newPath, newUsedTickets]);
               
            }
        }
    }
    

    return [];
}