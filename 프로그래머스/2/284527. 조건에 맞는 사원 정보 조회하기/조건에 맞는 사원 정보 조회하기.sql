select k.score, k.emp_no, e.emp_name, e.position, e.email
from HR_EMPLOYEES as e, (select g.emp_no, sum(score) as 'score'
from HR_EMPLOYEES as e, HR_GRADE as g
where g.emp_no = e.emp_no
group by g.emp_no) as k
where k.emp_no = e.emp_no
order by score desc
limit 1

