select hour(datetime) as 'hour', count(*) as 'count'
from ANIMAL_OUTS
where hour(datetime) >= 9 and hour(datetime) < 20
group by hour(datetime)
order by hour asc
