select car_id, 
    case 
        when car_id in (select car_id 
                        from car_rental_company_rental_history
                       where '2022-10-16' between start_date and end_date) then '대여중'
                       else '대여 가능'
                       end as availability
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
group by car_id
order by car_id desc