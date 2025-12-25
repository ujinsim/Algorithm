select count(*) as FISH_COUNT
from fish_info as fi, fish_name_info as fni
where fi.fish_type = fni.fish_type and (fish_name = 'BASS' or fish_name = 'SNAPPER')