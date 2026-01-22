select p.product_id, p.product_name, sum(o.amount)*p.price as total_sales
from FOOD_PRODUCT as p
join FOOD_ORDER as o on p.product_id = o.product_id
where date_format(o.PRODUCE_DATE, "%Y-%m") = '2022-05'
group by p.product_id
order by total_sales desc, p.product_id asc

