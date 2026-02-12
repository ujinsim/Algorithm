select animal_id, name
from ANIMAL_OUTS
where animal_id not in (select animal_id from ANIMAL_INS)