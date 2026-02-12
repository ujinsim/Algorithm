select count(*) as fish_count, max(length) as max_length, FISH_TYPE
from (
    select fish_type, time, id  , (case 
        when length <= 10 then 10
        when length is null then 10
        else length end 
    ) as length
    from FISH_INFO
) f
group by FISH_TYPE
having avg(length) >= 33
order by FISH_TYPE