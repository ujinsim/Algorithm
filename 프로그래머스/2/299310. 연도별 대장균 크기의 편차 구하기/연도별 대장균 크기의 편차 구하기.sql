select max_data.year, (max_data.size-e.size_of_colony) as year_dev,
    e.id
from ecoli_data e,  
    (select year(differentiation_date) as 'year',
    max(size_of_colony) as 'size'
    from ecoli_data
    group by year(differentiation_date)) max_data
where year(differentiation_date) = max_data.year
order by max_data.year asc, (max_data.size-e.size_of_colony) asc


