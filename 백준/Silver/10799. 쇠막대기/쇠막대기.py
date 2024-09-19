brackets = input()

def countCutBars(brackets):
    stack = []
    total_pieces = 0
    
    for i in range(len(brackets)):
        if brackets[i] == '(':  # 시작
            stack.append('(')
        else:  # ')'인 경우
            if brackets[i-1] == '(':  # 레이저일 경우
                stack.pop()  # 레이저 직전의 '(' 제거
                total_pieces += len(stack)  # 현재 스택에 쌓인 쇠막대기 수만큼 조각이 생김
            else:  # 쇠막대기의 끝일 경우
                stack.pop()  # 쇠막대기 하나 끝나서 pop
                total_pieces += 1  # 끝난 쇠막대기의 조각 
    
    return total_pieces

print(countCutBars(brackets))
