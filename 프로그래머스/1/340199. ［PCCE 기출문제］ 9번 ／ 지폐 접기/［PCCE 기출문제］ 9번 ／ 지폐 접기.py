def solution(wallet, bill):
    answer = 0

    # bill의 작은 값과 큰 값 설정
    billMin = min(bill)
    billMax = max(bill)
    
    # wallet의 작은 값과 큰 값 설정
    walletMin = min(wallet)
    walletMax = max(wallet)

    # bill의 작은 값이 wallet의 작은 값보다 크거나
    # bill의 큰 값이 wallet의 큰 값보다 큰 동안 반복합니다.
    while billMin > walletMin or billMax > walletMax:
        # bill의 가로가 더 크면 가로를 접고, 그렇지 않으면 세로를 접습니다.
        if billMax == bill[0]:
            bill[0] //= 2  # 가로를 반으로 접음
        else:
            bill[1] //= 2  # 세로를 반으로 접음
        
        # 접은 후 다시 최소값, 최대값을 갱신합니다.
        billMin = min(bill)
        billMax = max(bill)
        
        answer += 1  # 접은 횟수 증가
    
    return answer
