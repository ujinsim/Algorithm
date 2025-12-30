with recursive t1 as (
    select id, parent_id, 1 as generation
    from ecoli_data
    where parent_id is null 
   
    union all
    
    select t2.id, t2.parent_id, generation+1 as generation
    from t1
    join ecoli_data as t2 on t1.id = t2.parent_id
)

select count(id) as count, generation
from t1
where id not in (
    select parent_id
    from t1
    where parent_id is not null
)
group by(generation)
order by (generation)
