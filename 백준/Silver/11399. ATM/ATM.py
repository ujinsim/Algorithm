n = int(input())  
numbers = list(map(int, input().split()))  

numbers.sort()  #원본 변경
min_sum = 0
for i in range(n):
    min_sum += numbers[i]*(n-i)

print(min_sum)
