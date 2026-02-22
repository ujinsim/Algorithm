select year(s.sales_date), month(s.sales_date), count(distinct(s.user_id)) as PURCHASED_USERS,
        round((count(distinct s.user_id )/(select count(*) from  user_info as i where year(i.joined) = '2021')),1) as PUCHASED_RATIO 
from user_info as i
join online_sale as s on i.user_id = s.user_id 
where year(i.joined) = '2021'
group by year(s.sales_date), month(s.sales_date)
order by year(s.sales_date), month(s.sales_date)