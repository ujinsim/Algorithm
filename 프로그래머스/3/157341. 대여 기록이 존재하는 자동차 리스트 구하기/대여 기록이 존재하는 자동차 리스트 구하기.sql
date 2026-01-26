select distinct c.car_id
from CAR_RENTAL_COMPANY_RENTAL_HISTORY as r, CAR_RENTAL_COMPANY_CAR as c
where r.car_id = c.car_id and month(r.start_date) = 10 and c.car_type = '세단'
order by c.car_id desc