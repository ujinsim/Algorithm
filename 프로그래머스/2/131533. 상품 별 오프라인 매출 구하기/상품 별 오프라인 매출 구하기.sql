select product_code, sum(price*sales_amount) as SALES
from product as p, offline_sale as o
where p.product_id = o.product_id
group by p.product_code
order by sales desc, p.product_code asc