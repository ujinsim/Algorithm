select QUARTER	, count(*) as ECOLI_COUNT
from (select CONCAT(QUARTER(date_format(DIFFERENTIATION_DATE, '%Y-%m-%d')),'Q') as QUARTER, id
from ECOLI_DATA) as data
group by quarter
order by QUARTER