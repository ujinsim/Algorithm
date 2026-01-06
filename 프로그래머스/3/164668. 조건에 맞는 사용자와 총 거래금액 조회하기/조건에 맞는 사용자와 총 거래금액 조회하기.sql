select u.user_id, u.nickname,sum(b.price) as 'total_sales'
from USED_GOODS_BOARD as b, USED_GOODS_USER as u
where b.writer_id = u.user_id and b.status = 'done'
group by u.user_id, u.nickname
having sum(b.price) >= 700000
order by total_sales asc