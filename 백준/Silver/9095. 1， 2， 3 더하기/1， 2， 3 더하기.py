#1,2,3 더하기
#4 -> 1,1,1,1(1) 1,1,2(3) 1,3(2)  2+2 (7)
# dp[3] + dp[2] + dp[1]

#1 -> 1 (1) 
#2 -> 1,1 ,2  (2)
#3 -> 1,1,1  3,1 ,2 2, 1 3  (4)
#4 -> 3,1 1,3 2,2 -> 
#종류 *1 -> 1 종류 n 개수 k -> 종류-1 * k

n = int(input())
nums = [int(input()) for _ in range(n)] 

for N in nums:
    dp = [0] * (N + 1)

    for i in range(1, N + 1):
        if i == 1:
            dp[i] = 1
        elif i == 2:
            dp[i] = 2
        elif i == 3:
            dp[i] = 4
        else:
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]

    print(dp[N])

    

# 