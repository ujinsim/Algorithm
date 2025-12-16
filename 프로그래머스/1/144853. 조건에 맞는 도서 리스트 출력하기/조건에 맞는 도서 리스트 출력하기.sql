select b.book_id, date_format(b.published_date, "%Y-%m-%d") as publiched_date
from book as b
where date_format(b.published_date, "%Y") = '2021' and b.category = '인문' 