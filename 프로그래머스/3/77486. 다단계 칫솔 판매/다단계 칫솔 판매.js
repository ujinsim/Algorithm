function solution(enroll, referral, seller, amount) {
  const parent = {};
  const revenue = {};

  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i];
    revenue[enroll[i]] = 0; 
  }

  // 수익 분배
  for (let i = 0; i < seller.length; i++) {
    let curr = seller[i];
    let money = amount[i] * 100;

    while (curr !== '-' && money > 0) {
      const give = Math.floor(money * 0.1); // 10% 위로
      const keep = money - give;           // 자신이 갖는 돈

      revenue[curr] += keep;

      curr = parent[curr]; // 추천인으로 이동
      money = give;
    }
  }


  return enroll.map(name => revenue[name]);
}
