select o.animal_id, o.name
from ANIMAL_INS as i
join ANIMAL_OUTS as o on i.ANIMAL_ID = o.ANIMAL_ID
order by (o.datetime - i.DATETIME) desc
limit 2