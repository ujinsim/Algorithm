select 
    c.car_id, 
    c.car_type, 
    round(c.daily_fee * 30 * (1 - p.discount_rate / 100)) as fee
from car_rental_company_car as c
join car_rental_company_discount_plan as p 
    on c.car_type = p.car_type and p.duration_type = '30일 이상'
where c.car_type in ('세단', 'SUV')
  and c.car_id not in (
      -- 2022년 11월 한 달 동안 대여 중인 기록이 있는 차량 xxxx
      select car_id
      from car_rental_company_rental_history
      where start_date <= '2022-11-30' and end_date >= '2022-11-01'
  )
group by c.car_id
having fee >= 500000 and fee < 2000000
order by fee desc, c.car_type asc, c.car_id desc;