select b.book_id, a.author_name, date_format(b.published_date, "%Y-%m-%d") as PUBLISHED_DATE
from book as b
join author as a on a.author_id = b.author_id 
where b.category = '경제'
order by PUBLISHED_DATE asc