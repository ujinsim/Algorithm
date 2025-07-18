function solution(genres, plays) {
  const genreMap = new Map(); 
  const genreTotal = new Map(); 

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!genreMap.has(genre)) {
      genreMap.set(genre, []);
      genreTotal.set(genre, 0);
    }

    genreMap.get(genre).push([i, play]);
    genreTotal.set(genre, genreTotal.get(genre) + play);
  }

  const sortedGenres = [...genreTotal.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  const result = [];


  for (const genre of sortedGenres) {
    const songs = genreMap.get(genre);
    songs.sort((a, b) => {
      if (b[1] === a[1]) return a[0] - b[0]; 
      return b[1] - a[1];
    });

    result.push(...songs.slice(0, 2).map(song => song[0]));
  }

  return result
}
