#1부터 시작하기
#자기 배열 인덱스까지 더해서 나누기 자기 인덱스 
#반대로 하면 위 곱하기 자기 인덱스 아래 빼기 자기 앞에 요소들


n = int(input(""))

array = list(map(int, input("").split()))

result = [] 
result.append(array[0])

for i in range(1,n):
        value = array[i] * (i + 1) - sum(result)
        result.append(value)  


for i in result:
    print(i, end=' ')