select id,
    case
    when size_of_colony <= 100 then 'LOW'
    when size_of_colony <= 1000 then 'MEDIUM'
    else 'HIGH' 
    end as SIZE
from ecoli_data

# 개체의 크기가 100 이하라면 'LOW', 
# 100 초과 1000 이하라면 'MEDIUM', 
# 1000 초과라면 'HIGH' 라고 분류합니다. 