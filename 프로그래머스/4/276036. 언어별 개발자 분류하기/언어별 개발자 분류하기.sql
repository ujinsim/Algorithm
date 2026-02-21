select grade, id, email
from (select 
(case
 when (skill_code & (select sum(code) from skillcodes where category = 'Front End')) and 
      (skill_code & (select code from skillcodes where name = 'Python')) then 'A'
 when skill_code & (select code from skillcodes where name = 'C#') then 'B'
 when (skill_code & (select sum(code) from skillcodes where category = 'Front End')) then 'C'
end ) as grade, id, email
from DEVELOPERS
) as d
where d.grade is not null
order by grade, id