select concat('/home/grep/src/',board_id,'/',file_id,file_name, file_ext) as file_path
from USED_GOODS_FILE
where board_id in (select board_id
from USED_GOODS_BOARD
where views = (select max(VIEWS)
from USED_GOODS_BOARD
limit 1              )
)
order by file_id desc