with a as (
    select CAR_ID, (timestampdiff(day, start_date,end_date) + 1) as diff
    from CAR_RENTAL_COMPANY_RENTAL_HISTORY
)

select car_id, round(avg(diff),1) as AVERAGE_DURATION
from a
group by car_id
having AVERAGE_DURATION  >= 7
order by AVERAGE_DURATION desc, car_id desc