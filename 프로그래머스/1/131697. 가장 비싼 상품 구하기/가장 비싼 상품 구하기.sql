select price as max_price
from product 
where price = (select max(p.price) from product as p)