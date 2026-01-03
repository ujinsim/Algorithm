select i.ingredient_type , sum(f.total_order) as total_order
from first_half as f, icecream_info as i
where f.flavor = i.flavor
group by i.ingredient_type 