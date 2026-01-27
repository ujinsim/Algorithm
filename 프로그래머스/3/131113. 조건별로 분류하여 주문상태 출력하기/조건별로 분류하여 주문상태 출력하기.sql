select ORDER_ID, PRODUCT_ID, date_format(OUT_DATE, "%Y-%m-%d") as out_date,
        (case 
            when date_format(OUT_DATE, "%Y-%m-%d") < '2022-05-02' then '출고완료'
            when date_format(OUT_DATE, "%Y-%m-%d") >= '2022-05-02' then '출고대기'
            else '출고미정' end
        )  출고여부
from FOOD_ORDER