select *
from (select (case
       when skill_code & (select sum(code) from skillcodes where category='Front End' ) and 
            skill_code & (select code from skillcodes where name='Python') then 'A'
        
        when skill_code & (select code from skillcodes where name='C#') then 'B'
        when skill_code & (select sum(code) from skillcodes where category='Front End') then 'C'
        end
       ) as GRADE, ID, EMAIL
from developers 
order by grade,id) as g
where grade is not null