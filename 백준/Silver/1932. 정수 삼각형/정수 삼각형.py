n = int(input())
d = []

for i in range(n):
    d.append(list(map(int, input().split())))

dp = [[0] * (i + 1) for i in range(n)]
dp[0][0] = d[0][0]

for i in range(1, n):
    for j in range(i + 1):
        if j == 0:
            dp[i][j] = dp[i - 1][j] + d[i][j]
        elif j == i:
            dp[i][j] = dp[i - 1][j - 1] + d[i][j]
        else:
            dp[i][j] = max(dp[i - 1][j - 1], dp[i - 1][j]) + d[i][j]

print(max(dp[n - 1]))
