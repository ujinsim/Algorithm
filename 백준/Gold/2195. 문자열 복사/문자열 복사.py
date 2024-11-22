def min_copy_operations(S, P):
    n, m = len(S), len(P)
    i = 0  
    copy_count = 0

    while i < m:
        max_len = 0  
        
        for l in range(1, m - i + 1):  
            if P[i:i + l] in S:
                max_len = l
            else:
                break 
        
        if max_len == 0:
            break 

        copy_count += 1  
        i += max_len   

    return copy_count

S = input().strip()
P = input().strip()

print(min_copy_operations(S, P))
