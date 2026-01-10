select d.dept_id, d.DEPT_NAME_EN, round(avg(e.sal),0) as 'avg_sal'
from HR_DEPARTMENT as d, HR_EMPLOYEES as e
where d.dept_id = e.dept_id 
group by d.dept_id, d.DEPT_NAME_EN
order by avg_sal desc