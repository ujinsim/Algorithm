select ANIMAL_TYPE, ifnull(NAME,'No name') as name, SEX_UPON_INTAKE
from ANIMAL_INS
order by ANIMAL_ID