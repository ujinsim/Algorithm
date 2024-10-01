n = int(input())

strR = []
for _ in range(n):
    row = list(input()) 
    strR.append(row) 

resultA = 0
resultB = 0

for row in strR:
    space = 0
    for element in row:
        if element == ".":
            space += 1
        else:
            if space > 1:
                resultA += 1
            space = 0  # 공백이 아니면 초기화
    if space > 1:  # 마지막에 연속된 공백이 있는지 확인
        resultA += 1

for col in range(n):
    space = 0
    for row in range(n):
        if strR[row][col] == ".":
            space += 1
        else:
            if space > 1:
                resultB += 1
            space = 0
    if space > 1: 
        resultB += 1

print(resultA, resultB)
