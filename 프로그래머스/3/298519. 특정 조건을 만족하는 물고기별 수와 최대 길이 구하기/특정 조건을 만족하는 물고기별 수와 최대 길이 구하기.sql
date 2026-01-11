with fish_length_changer as (
    select id, fish_type,
         case when length <= 10 then 10
         else length
         end as length, date_format(time,"%Y-%m-%d") as time
    from fish_info
)

select count(*) as fish_count, MAX(length) AS max_length,
         fish_type
from fish_length_changer
group by fish_type
having avg(length) >= 33
order by fish_type
