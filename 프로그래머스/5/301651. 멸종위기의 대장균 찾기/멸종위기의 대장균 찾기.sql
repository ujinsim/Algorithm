with recursive a as(
    select id, parent_id, 1 as generation
    from ecoli_data
    where parent_id is null 
    
    union all
    
    select b.id, b.parent_id, generation + 1 as generation
    from a 
    join ecoli_data as b on b.parent_id = a.id
)

select count(*) as count, generation
from a 
where id not in (select parent_id from a where parent_id is not null)
group by generation 
order by generation