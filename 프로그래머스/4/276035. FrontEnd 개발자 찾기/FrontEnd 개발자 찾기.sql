select DISTINCT d.id, d.email, d.first_name, d.last_name
from DEVELOPERS as d, (select code from SKILLCODES where category = 'Front End') as s
where (d.skill_code & s.code) = s.code
order by d.id

-- WHERE (D.SKILL_CODE & S.CODE) = S.CODE