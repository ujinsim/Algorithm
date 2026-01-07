select year(s.sales_date),month(s.sales_date),i.gender, 
        count(distinct i.user_id) as users
from user_info as i, online_sale as s
where i.user_id = s.user_id and i.gender is not null
group by year(s.sales_date),month(s.sales_date),i.gender
order by year(s.sales_date) asc
        ,month(s.sales_date) asc 
        ,i.gender asc