select ANIMAL_ID, name, date_format(DATETIME,"%Y-%m-%d") as '날짜'
from ANIMAL_INS
order by ANIMAL_ID