select d.history_id, round((d.diff_day * d.daily_fee) * (1- ifnull(p.discount_rate,0) / 100),0) as fee
from (select c.car_type, c.car_id, c.daily_fee, h.history_id, (case
        when timestampdiff(day, h.start_date, h.end_date) +1 >= 90 then '90일 이상'
        when timestampdiff(day, h.start_date, h.end_date) +1 >= 30 then '30일 이상'
        when timestampdiff(day, h.start_date, h.end_date) +1 >= 7 then '7일 이상'
        else null end ) as duration_type,
        (timestampdiff(day, h.start_date, h.end_date) +1) as diff_day
from CAR_RENTAL_COMPANY_CAR as c
join CAR_RENTAL_COMPANY_RENTAL_HISTORY as h on h.car_id = c.car_id
where c.car_type = '트럭') as d
left join CAR_RENTAL_COMPANY_DISCOUNT_PLAN as p on d.duration_type = p.duration_type
and d.car_type = p.car_type 

order by fee desc, d.history_id desc