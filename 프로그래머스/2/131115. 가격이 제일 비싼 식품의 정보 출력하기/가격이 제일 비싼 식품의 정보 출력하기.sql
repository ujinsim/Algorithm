select *
from food_product
where price = (
    select max(p.price)
    from food_product as p)