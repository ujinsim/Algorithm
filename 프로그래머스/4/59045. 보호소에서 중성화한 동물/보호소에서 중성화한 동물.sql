# 오기전 intact 후 ㄴNeutered Male Spayed Female
select i.animal_id, i.animal_type, i.name
from ANIMAL_INS as i
join ANIMAL_OUTS as o on i.animal_id = o.animal_id
where i.SEX_UPON_INTAKE like '%Intact%' and 
        ( o.SEX_UPON_OUTCOME = 'Neutered Male' or 
         o.SEX_UPON_OUTCOME = 'Spayed Female')