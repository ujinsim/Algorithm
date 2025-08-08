const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const lines = input.split('\n');
  const T = Number(lines[0]); 
  
  let idx = 1; 
  const results = [];
  let counts = []
  
  for (let t = 0; t < T; t++) {
    const N = Number(lines[idx++]);
    const applicants = [];
    
    for (let i = 0; i < N; i++) {
      const [doc, interview] = lines[idx++].split(' ').map(Number);
      applicants.push({ doc, interview });
    }
    results.push(applicants);
  }
  
  for(let i = 0; i < results.length; i++) {
    results[i].sort((a, b) => a.doc - b.doc);
    
    let count = 1; 
    let minInterview = results[i][0].interview;
    
    for(let j = 1; j < results[i].length; j++) {
      if(results[i][j].interview < minInterview) {
        count++;
        minInterview = results[i][j].interview;
      }
    }
    
    counts.push(count);
  }
  
  counts.forEach(count => console.log(count));
}

solution(input);
