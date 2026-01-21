select FIRST_HALF.flavor
from (select flavor, sum(total_order) as sum
from JULY
group by flavor) as july_sum, FIRST_HALF
where FIRST_HALF.flavor = july_sum.flavor
order by (FIRST_HALF.total_order + july_sum.sum) desc
limit 3

