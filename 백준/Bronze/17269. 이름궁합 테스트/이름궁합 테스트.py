import math

# 알파벳 횟수 맵
maps = {
    'A': 3, 'B': 2, 'C': 1, 'D': 2, 'E': 4, 'F': 3, 'G': 1, 'H': 3, 'I': 1, 
    'J': 1, 'K': 3, 'L': 1, 'M': 3, 'N': 2, 'O': 1, 'P': 2, 'Q': 2, 'R': 2, 
    'S': 1, 'T': 2, 'U': 1, 'V': 1, 'W': 1, 'X': 2, 'Y': 2, 'Z': 1
}

numbers = list(map(int, input().split()))
numA = numbers[0]
numB = numbers[1]

names = list(map(str, input().split()))
nameA = names[0]
nameB = names[1]

merge = []

leng = min(numA, numB)
diff = abs(numA - numB)

for i in range(leng):
    merge.append(nameA[i])
    merge.append(nameB[i])

if diff > 0:
    if numA > numB:
        merge.extend(nameA[leng:])
    else:
        merge.extend(nameB[leng:])


trans = [maps[char] for char in merge]


while len(trans) > 2:
    trans = [(trans[i] + trans[i + 1]) % 10 for i in range(len(trans) - 1)]


if(trans[0] == 0):
    result = trans[1]
else :
    result = ''.join(map(str, trans)) 

print(str(result)+'%')