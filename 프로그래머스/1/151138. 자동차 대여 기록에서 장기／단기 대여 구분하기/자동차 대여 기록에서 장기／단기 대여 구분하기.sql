select HISTORY_ID, CAR_ID, date_format(START_DATE, '%Y-%m-%d') as start_date,
        date_format(end_date, '%Y-%m-%d') as end_date,
        (case 
            when TIMESTAMPDIFF(day,start_date,end_date) + 1 >= 30 then '장기 대여'
            else '단기 대여'
         end
        ) as rent_type
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where month(START_DATE) = 9 && year(START_DATE) = 2022
order by HISTORY_ID desc