select year(s.SALES_DATE) as year, month(s.SALES_DATE) as month, i.gender as gender, count(distinct i.user_id) as users
from user_info as i, online_sale as s
where i.user_id = s.user_id and i.gender is not null
group by year(s.SALES_DATE), month(s.SALES_DATE), i.gender
order by year(s.SALES_DATE), month(s.SALES_DATE), i.gender