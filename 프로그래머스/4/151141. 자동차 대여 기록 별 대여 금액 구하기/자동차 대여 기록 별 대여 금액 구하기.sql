with a as(
select h.history_id, c.daily_fee, c.car_id, c.car_type,
    (case
        when timestampdiff(day, h.start_date, h.end_date) + 1 >= 90 then '90일 이상'
     when timestampdiff(day, h.start_date, h.end_date) + 1 >= 30 then '30일 이상'
     when timestampdiff(day, h.start_date, h.end_date) + 1 >= 7 then '7일 이상'
     else null end
    ) as duration_type, 
    (timestampdiff(day, h.start_date, h.end_date) + 1) as diff
from CAR_RENTAL_COMPANY_CAR as c
join CAR_RENTAL_COMPANY_RENTAL_HISTORY as h on h.car_id = c.car_id and 
    c.car_type = '트럭'
)


select history_id , round((diff * daily_fee) - ((diff * daily_fee) * (1/100) * ifnull(discount_rate,0)),0) as fee
from a
left join CAR_RENTAL_COMPANY_DISCOUNT_PLAN as p on a.duration_type = p.duration_type and a.car_type = p.car_type
order by fee desc, history_id desc

# // 트럭인거 뽑기 
# // duration _ type 뽑기 , diff day 뽑기 


# // 마지막 테이블이랑 조인해서 결과 뽑기 