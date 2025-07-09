function solution(dirs) {
  const moves = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0]
  };

  const visited = new Set();
  let x = 0;
  let y = 0;

  for (let dir of dirs) {
    const [dx, dy] = moves[dir];
    const nx = x + dx;
    const ny = y + dy;

    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    const path = `${x},${y}->${nx},${ny}`;
    const reversePath = `${nx},${ny}->${x},${y}`;

    visited.add(path);
    visited.add(reversePath);

    x = nx;
    y = ny;
  }

  return visited.size / 2; 
}
