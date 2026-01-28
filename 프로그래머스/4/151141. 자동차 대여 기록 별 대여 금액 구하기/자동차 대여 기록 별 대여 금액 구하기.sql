
with h as (
select car_id, history_id, start_date, end_date,
    (case 
        when timestampdiff(day,start_date, end_date)+1 >= 90 then '90일 이상'
        when timestampdiff(day,start_date, end_date)+1 >= 30 then '30일 이상'
        when timestampdiff(day, start_date, end_date) + 1 >= 7 then '7일 이상'
        else '미적용' end)
        as duration
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
)

select h.HISTORY_ID, 
        floor(c.daily_fee * (timestampdiff(day, h.start_date, h.end_date) + 1) * (100 - ifnull(p.discount_rate, 0)) / 100) as fee
from CAR_RENTAL_COMPANY_CAR as c
join h on c.car_id = h.car_id
left join CAR_RENTAL_COMPANY_DISCOUNT_PLAN as p 
     on p.car_type = c.car_type and h.duration = p.DURATION_TYPE
where c.car_type = '트럭'
order by fee desc, h.HISTORY_ID desc;
