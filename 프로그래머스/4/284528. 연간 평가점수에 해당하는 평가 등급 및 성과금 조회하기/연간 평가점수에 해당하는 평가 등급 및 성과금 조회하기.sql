select emp_no, emp_name, grade, (
    case 
        when grade = 'S' then sal*(1/5)
        when grade = 'A' then sal*(15/100)
        when grade = 'B' then sal*(1/10)
    else 0 end ) as bonus
from (select emp_no, emp_name, (
    case 
    when score >= 96 then 'S'
    when score >= 90 then 'A'
    when score >= 80 then 'B' 
    else 'C' end ) as grade, sal
from (select g.EMP_NO, e.EMP_NAME, avg(score) as score, e.sal
from HR_EMPLOYEES as e, HR_GRADE as g
where e.emp_no = g.emp_no
group by g.EMP_NO) as e ) as g