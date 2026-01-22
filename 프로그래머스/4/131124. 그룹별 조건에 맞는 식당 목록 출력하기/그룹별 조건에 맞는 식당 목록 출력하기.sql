select p.MEMBER_NAME, r.REVIEW_TEXT, date_format(r.REVIEW_DATE, '%Y-%m-%d') as REVIEW_DATE
from REST_REVIEW as r
join MEMBER_PROFILE as p on p.MEMBER_ID = r.MEMBER_ID
where r.MEMBER_ID in (select r.MEMBER_ID
from MEMBER_PROFILE as p
join REST_REVIEW as r on p.MEMBER_ID = r.MEMBER_ID
group by r.MEMBER_ID
having count(*) = (select count(*) as count
from MEMBER_PROFILE as p
join REST_REVIEW as r on p.MEMBER_ID = r.MEMBER_ID
group by r.MEMBER_ID
order by count desc
limit 1))



order by REVIEW_DATE asc, REVIEW_TEXT asc