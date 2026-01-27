select u.user_id, u.nickname, concat(u.city,' ', u.STREET_ADDRESS1,' ', u.STREET_ADDRESS2) as 전체주소,
        concat(substr(u.tlno, 1,3), '-', substr(u.tlno, 4,4),'-', substr(u.tlno, 8,4)) as 전화번호
from USED_GOODS_BOARD as b
join USED_GOODS_USER as u on b.writer_id = u.user_id
group by u.user_id
having count(*) >= 3
order by u.user_id desc