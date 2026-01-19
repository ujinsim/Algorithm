select max.year, (max.max_size - ecoli_data.size_of_colony) as 'YEAR_DEV' , ecoli_data.id
from ecoli_data , (select year(DIFFERENTIATION_DATE) as 'year', max(size_of_colony) as 'max_size'
from ecoli_data 
group by year(DIFFERENTIATION_DATE)) max
where max.year = year(DIFFERENTIATION_DATE)
order by max.year asc , YEAR_DEV asc

