const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');

function solution(input) {
  let result = [];
  
  const divGroups = input.match(/<div title=".*?">.*?<\/div>/g);
  
  if (divGroups) {
    for (let i = 0; i < divGroups.length; i++) {
      const titleMatch = divGroups[i].match(/title="([^"]*)"/);
      const title = titleMatch[1];
      result.push(`title : ${title}`);
      
      const pGroups = divGroups[i].match(/<p>(.*?)<\/p>/g);
      
      if (pGroups) {
        for (let j = 0; j < pGroups.length; j++) {
          const content = pGroups[j]
            .replace(/<[^>]*>/g, "")
            .replace(/\s{2,}/g, " ")
            .trim();
          
          result.push(content);
        }
      }
    }
  }
  
  return result.join("\n");
}

console.log(solution(input));