function solution(record) {
  const result = [];
  const uidName = {};

  for (const i of record) {
    const splitString = i.split(" ");
    const firstWord = splitString[0];
    const uid = splitString[1];
    const NickName = splitString[2];

    switch (firstWord) {
      case "Enter":
        result.push({ uid, action: "들어왔습니다." });
        uidName[uid] = NickName;
        break;

      case "Leave":
        result.push({ uid, action: "나갔습니다." });
        break;

      case "Change":
        uidName[uid] = NickName;
        break;
    }
  }

  return result.map(({ uid, action }) => `${uidName[uid]}님이 ${action}`);
}
