with recursive a as (
    select id, parent_id, 1 as generation
    from ECOLI_DATA
    where parent_id is null
    
    union all 
    
    select b.id, b.parent_id, a.generation+1 as generation
    from ECOLI_DATA as b
    join a on a.id = b.parent_id
)

select count(*) as count, generation 
from a
where id not in (select distinct(b.parent_id) from a as b where b.parent_id is not null)
group by generation
order by generation
