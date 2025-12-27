select e.id, ifnull(ec.cnt,0) as child_count
from ecoli_data as e
left join  (select parent_id, count(parent_id) as cnt
     from ecoli_data
     where parent_id is not null
     group by parent_id ) as ec
on e.id = ec.parent_id
order by e.id asc




#대장균 개체의 ID(ID)와 자식의 수(CHILD_COUNT)를 출력하는 SQL 문을 작성해주세요. 
#자식이 없다면 자식의 수는 0으로 출력해주세요. 이때 결과는 개체의 ID 에 대해 오름차순 정렬해주세요.