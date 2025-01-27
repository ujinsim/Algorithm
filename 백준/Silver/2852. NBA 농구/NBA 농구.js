const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const goals = input.slice(1).map((line) => {
  const [team, time] = line.split(" ");
  const [minutes, seconds] = time.split(":").map(Number);
  return {
    team: parseInt(team),
    time: minutes * 60 + seconds,
  };
});

const TOTAL_GAME_TIME = 48 * 60;

function calculateLeadTimes(N, goals) {
  let team1Lead = 0;
  let team2Lead = 0;
  let lastTime = 0;
  let currentLeader = 0;
  let score1 = 0;
  let score2 = 0;

  goals.sort((a, b) => a.time - b.time);

  goals.forEach((goal) => {
    if (currentLeader === 1) {
      team1Lead += goal.time - lastTime;
    } else if (currentLeader === 2) {
      team2Lead += goal.time - lastTime;
    }

    if (goal.team === 1) {
      score1++;
    } else {
      score2++;
    }

    if (score1 > score2) {
      currentLeader = 1;
    } else if (score2 > score1) {
      currentLeader = 2;
    } else {
      currentLeader = 0;
    }

    lastTime = goal.time;
  });

  if (currentLeader === 1) {
    team1Lead += TOTAL_GAME_TIME - lastTime;
  } else if (currentLeader === 2) {
    team2Lead += TOTAL_GAME_TIME - lastTime;
  }

  return [team1Lead, team2Lead];
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

const [team1Lead, team2Lead] = calculateLeadTimes(N, goals);
console.log(formatTime(team1Lead));
console.log(formatTime(team2Lead));
