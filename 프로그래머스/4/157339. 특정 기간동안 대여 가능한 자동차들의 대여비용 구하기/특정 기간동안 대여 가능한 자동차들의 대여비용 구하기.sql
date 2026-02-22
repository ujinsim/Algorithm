select distinct(h.car_id), c.car_type, round((c.daily_fee * 30) - ((c.daily_fee * 30) * (1/100)*p.discount_rate),0)  as fee
from CAR_RENTAL_COMPANY_CAR as c
join CAR_RENTAL_COMPANY_RENTAL_HISTORY as h on h.car_id = c.car_id
join CAR_RENTAL_COMPANY_DISCOUNT_PLAN as p on p.car_type = c.car_type and p.duration_type = '30일 이상'
where c.car_type in ('세단', 'SUV') 
      AND C.CAR_ID NOT IN (
        SELECT CAR_ID
        FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
        WHERE START_DATE <= '2022-11-30' AND END_DATE >= '2022-11-01'
    ) and
        (c.daily_fee * 30) - ((c.daily_fee * 30) * (1/100)*p.discount_rate) >= 500000
        and (c.daily_fee * 30) - ((c.daily_fee * 30) * (1/100)*p.discount_rate) < 2000000

order by fee desc, c.car_type, h.car_id desc


 # 테이블에서 자동차 종류가 '세단' 또는 'SUV' 인 자동차 중 
 # 2022년 11월 1일부터 2022년 11월 30일까지 대여 가능하고 
 # 30일간의 대여 금액이 50만원 이상 200만원 미만인 자동차