from collections import defaultdict, deque

N, M, V = map(int, input().split())
graph = defaultdict(list)

for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

for key in graph:
    graph[key].sort()

def dfs(graph, start, visited):
    visited[start] = True
    print(start, end=" ")

    for neighbor in graph[start]:
        if not visited[neighbor]:
            dfs(graph, neighbor, visited)

def bfs(graph, start):
    queue = deque([start])
    visited = [False] * (N + 1)
    visited[start] = True

    while queue:
        current = queue.popleft()
        print(current, end=" ")

        for neighbor in graph[current]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append(neighbor)

visited_dfs = [False] * (N + 1)

dfs(graph, V, visited_dfs)
print()

bfs(graph, V)
print()
