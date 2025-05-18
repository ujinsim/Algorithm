select b.book_id, a.author_name, DATE_FORMAT(b.PUBLISHED_DATE, '%Y-%m-%d') AS PUBLISHED_DATE
from book b, author a
where b.author_id = a.author_id AND b.category = '경제'
order by b.published_date