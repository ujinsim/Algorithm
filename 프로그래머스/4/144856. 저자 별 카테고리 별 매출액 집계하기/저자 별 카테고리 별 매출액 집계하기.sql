select a.author_id, a.author_name, b.category, (sum(s.sales * b.price)) as 'total_sales'
from book as b, author as a, book_sales as s
where b.book_id = s.book_id and b.author_id = a.author_id 
        and date_format(s.sales_date, "%Y-%m") = '2022-01'
group by a.author_id, b.category
order by b.author_id asc, b.category desc