select substring(PRODUCT_CODE,1,2) as category, count(*) as products
from PRODUCT
group by substring(PRODUCT_CODE,1,2)
order by PRODUCT_CODE