#17389

n = int(input())
scores = str(input())


bonus = 0
score = 0

for i in range(n):
    if(scores[i] == "O"):
        score += (i + 1) + bonus
        bonus += 1
    if(scores[i] == "X"):
        bonus = 0

print(score)
    