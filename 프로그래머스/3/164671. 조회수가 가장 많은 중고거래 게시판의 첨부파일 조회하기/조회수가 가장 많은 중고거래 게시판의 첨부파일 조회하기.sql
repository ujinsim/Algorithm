select concat('/home/grep/src/',b.board_id,'/',f.file_id,f.file_name,f.file_ext) as FILE_PATH
from USED_GOODS_BOARD as b
join USED_GOODS_FILE as f on f.board_id = b.board_id 
where b.views = (select max(views) from USED_GOODS_BOARD limit 1 )
order by f.file_id desc