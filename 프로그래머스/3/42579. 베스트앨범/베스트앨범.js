function solution(genres, plays) {
  const genres_map = new Map();
  const count_by_genres = new Map();
  const result = [];

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    genres_map.set(genre, (genres_map.get(genre) || 0) + play);

    if (!count_by_genres.has(genre)) count_by_genres.set(genre, []);
    count_by_genres.get(genre).push([i, play]);
  }

  const sorted = new Map([...genres_map.entries()].sort((a, b) => b[1] - a[1]));

  const sorted_genre_count = new Map(
    [...count_by_genres.entries()].map(([genre, arr]) => [
      genre,
      [...arr].sort((a, b) => (b[1] - a[1]) || (a[0] - b[0])),
    ])
  );

  for (const [genre] of sorted) {
    const list = sorted_genre_count.get(genre);
    for (let i = 0; i < Math.min(2, list.length); i++) {
      result.push(list[i][0]);
    }
  }
  return result;
}
