# 사용자로부터 문자열 입력 받기
word = input("")

# 접미사를 저장할 리스트
suffixes = []

# 모든 접미사 구하기
for i in range(len(word)):
    suffixes.append(word[i:])

# 접미사 리스트를 사전순으로 정렬
suffixes.sort()

# 결과 출력
for suffix in suffixes:
    print(suffix)