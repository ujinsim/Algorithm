with recursive a as (
    select id, 1 as generation
    from ecoli_data
    where parent_id is null

    union all 
    
    select b.id, a.generation + 1 as generation
    from ecoli_data as b
    join a on a.id = b.parent_id 
)

select count(id) as count, generation
from a
where id not in (select e.parent_id from ecoli_data as e where e.parent_id is not null)
group by generation