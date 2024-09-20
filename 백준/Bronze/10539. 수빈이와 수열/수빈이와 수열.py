#자기 배열 인덱스까지 더해서 나누기 자기 인덱스 
#반대로 하면 위 곱하기 자기 인덱스 아래 빼기 자기 앞에 요소들


n = int(input(""))

array = list(map(int, input("").split()))

result = [] 
minus = 0  # 이전 항까지의 합을 저장
for i in range(n):
        value = array[i] * (i + 1) - minus
    
        minus += value  
        result.append(value)  


for i in result:
    print(i, end=' ')



