function solution(today, terms, privacies) {
  const [ty, tm, td] = today.split('.').map(Number);

  const termMap = new Map();
  for (const t of terms) {
    const [name, months] = t.split(' ');
    termMap.set(name, Number(months));
  }

  function addMonths(y, m, d, plusM) {
    let ny = y;
    let nm = m + plusM;
    let nd = d;

    ny += Math.floor((nm - 1) / 12);
    nm = ((nm - 1) % 12) + 1;

    return [ny, nm, nd];
  }

  function minusOneDay(y, m, d) {
    let ny = y, nm = m, nd = d - 1;
    if (nd === 0) {
      nd = 28;
      nm = m - 1;
      if (nm === 0) {
        nm = 12;
        ny = y - 1;
      }
    }
    return [ny, nm, nd];
  }

  // today > expire 인지 비교 (today가 더 크면 만료)
  function isAfter(y1, m1, d1, y2, m2, d2) {
    if (y1 !== y2) return y1 > y2;
    if (m1 !== m2) return m1 > m2;
    return d1 > d2;
  }

  const result = [];

  for (let i = 0; i < privacies.length; i++) {
    const [date, kind] = privacies[i].split(' ');
    const [y, m, d] = date.split('.').map(Number);
    const months = termMap.get(kind);

    let [ey, em, ed] = addMonths(y, m, d, months);
    [ey, em, ed] = minusOneDay(ey, em, ed);

    if (isAfter(ty, tm, td, ey, em, ed)) {
      result.push(i + 1);
    }
  }

  return result;
}


