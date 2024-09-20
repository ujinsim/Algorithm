
n = int(input())
result = []

aLank = {
    1: 5000000,
    2: 3000000,
    3: 2000000,
    4: 500000,
    5: 300000,
    6: 100000
}

bLank = {
    1: 5120000,
    2: 2560000,
    4: 1280000,
    8: 640000,
    16: 320000
}

# 랭크에 따른 점수 반환 함수
def get_points(rank, typ):
    if typ == 'a':
        num = 22
        lank = aLank
    else:
        num = 32
        lank = bLank

    if rank < num:
        keys = sorted(lank.keys())
        for key in keys:
            if rank <= 0:
                break
            rank -= key
            if rank <= 0:
                return lank[key] 
    return 0 


for i in range(n):
    array = list(map(int, input("").split()))
    result.append(get_points(array[0], 'a') + get_points(array[1], 'b') )

# 결과 출력
for score in result:
    print(score)
