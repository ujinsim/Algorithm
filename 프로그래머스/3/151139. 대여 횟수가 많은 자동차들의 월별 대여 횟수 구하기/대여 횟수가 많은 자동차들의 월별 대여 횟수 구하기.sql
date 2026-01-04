select month(start_date), car_id, count(*) as records
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where car_id in (select car_id
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where date_format(start_date,"%Y-%m") >= '2022-08' and 
      date_format(start_date,"%Y-%m") < '2022-11'
group by car_id
having count(*) >= 5)
and date_format(start_date,"%Y-%m") >= '2022-08' and 
      date_format(start_date,"%Y-%m") < '2022-11'
group by month(start_date), car_id

order by month(start_date) asc, car_id desc
