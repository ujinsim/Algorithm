select p.pt_name, p.pt_no, p.gend_cd, p.age, ifnull(p.tlno,'NONE') as TLNO
from patient as p
where p.age <= 12 and p.gend_cd = "w"
order by p.age desc, p.pt_name asc