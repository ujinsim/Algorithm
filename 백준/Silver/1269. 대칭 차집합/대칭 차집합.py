
a_count, b_count = map(int, input().split())
A = set(map(int, input().split()))
B = set(map(int, input().split()))

# A - B 차집합
A_minus_B = A - B

# B - A 차집합
B_minus_A = B - A

# 차집합 원소 개수 합
result = len(A_minus_B) + len(B_minus_A)
print(result)
