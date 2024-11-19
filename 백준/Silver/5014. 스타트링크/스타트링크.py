#F : 총 층의 개수 
#S : 강호가 지금 위치한 층
#G : target 층
#U : 위로 U층을 가는 버튼 
#D : 아래로 D층을 가는 버튼 

from collections import deque

F, S, G, U, D = map(int, input().split())

def min_button_presses(F, S, G, U, D):
    visited = [False] * (F + 1)  # 각 층 방문 여부
    queue = deque([(S, 0)])  # (현재 층, 버튼 누른 횟수)
    visited[S] = True  # 현재 층 방문 처리

    while queue:
        current, presses = queue.popleft()

        if current == G:  # 목표 층 도달
            return presses

        if current + U <= F and not visited[current + U]:
            visited[current + U] = True
            queue.append((current + U, presses + 1))

        if current - D >= 1 and not visited[current - D]:
            visited[current - D] = True
            queue.append((current - D, presses + 1))

    return "use the stairs" 


print(min_button_presses(F, S, G, U, D))

