with a as (

 select distinct(c.car_id), c.car_type, c.daily_fee
from car_rental_company_car as c
join car_rental_company_rental_history as h on c.car_id = h.car_id
where c.car_type in ('세단','SUV') and 
        h.car_id not in (select car_id
                        from car_rental_company_rental_history
                        where start_date <= '2022-11-30' and end_date >= '2022-11-01')


)
 
select f.car_id, f.car_type, round(f.fee) as fee
from (select a.car_id, a.car_type, (a.daily_fee * 30) - ((a.daily_fee * 30) * p.discount_rate * 1/100) as fee
from CAR_RENTAL_COMPANY_DISCOUNT_PLAN as p
join a on p.car_type = a.car_type
where p.duration_type = '30일 이상') as f

where f.fee >= 500000 and f.fee < 2000000

order by fee desc, f.car_type, f.car_id desc
 