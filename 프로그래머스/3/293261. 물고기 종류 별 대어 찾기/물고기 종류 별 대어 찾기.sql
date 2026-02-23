with a as(select fi.id, fni.fish_name, fi.length , rank() over (partition by fi.fish_type order by fi.length desc) as rk
from fish_info as fi
join fish_name_info as fni on fni.fish_type = fi.fish_type
where fi.length is not null)


select id, fish_name, length
from a
where rk = 1
order by id 