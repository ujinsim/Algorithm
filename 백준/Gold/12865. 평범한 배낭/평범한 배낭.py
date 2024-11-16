#가치가 최대인 것을 우선으로 하고 
# 무게가 되지마자 출력

n, max_weight = map(int, input().split())
items = []

for _ in range(n):
    weight, value = map(int, input().split())
    items.append((weight, value))

dp = [0] * (max_weight + 1)

for weight, value in items:
    for w in range(max_weight, weight - 1, -1):
        dp[w] = max(dp[w], dp[w - weight] + value)

print(max(dp))

   