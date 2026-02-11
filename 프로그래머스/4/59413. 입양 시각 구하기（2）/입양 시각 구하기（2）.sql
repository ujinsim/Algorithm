


set @hour = -1;

select (@hour := @hour+1) as hour,
        (select count(*)
        from animal_outs 
        where hour(datetime) = @hour) as count 
from ANIMAL_OUTS
where @hour < 23 