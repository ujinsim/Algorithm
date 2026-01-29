select a.APNT_NO, p.PT_NAME, a.pt_no, a.mcdp_cd, d.dr_name, a.APNT_YMD
from APPOINTMENT as a
join PATIENT as p on p.PT_NO = a.PT_NO 
join DOCTOR as d on d.DR_ID = a.MDDR_ID
where a.APNT_YMD LIKE '2022-04-13%' and a.APNT_CNCL_YMD is null and a.mcdp_cd = 'cs'
order by a.APNT_YMD 