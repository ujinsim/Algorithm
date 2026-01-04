select mcdp_cd as "진료과코드",count(pt_no) as "5월예약건수"
from appointment
where date_format(apnt_ymd, "%Y-%m") = '2022-05'
group by mcdp_cd
order by 5월예약건수 asc, 진료과코드 asc