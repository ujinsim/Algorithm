# 피보나치 DP
# https://www.acmicpc.net/problem/23316

tryNum = 0 

def fib(n):
    global tryNum 
    if n == 1 or n == 2:
        return 1

    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 1

    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
        tryNum += 1 
    
    return dp[n]

n = int(input())
print(fib(n), tryNum)  

