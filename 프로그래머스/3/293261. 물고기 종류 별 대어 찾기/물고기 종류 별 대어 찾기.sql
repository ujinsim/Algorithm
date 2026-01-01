select i.id, n.fish_name, i.length
from fish_info i , fish_name_info n
where i.fish_type = n.fish_type and (i.fish_type, i.length) in (
    select fish_type, max(length)
    from fish_info
    group by fish_type
)
order by id 
