select count(*) as 'FISH_COUNT', f.fish_name as 'FISH_NAME'
from FISH_NAME_INFO as f, FISH_INFO as i
where f.fish_type = i.fish_type
group by f.fish_name
order by count(*) desc

