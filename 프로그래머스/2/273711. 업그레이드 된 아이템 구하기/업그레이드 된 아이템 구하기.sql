# 아이템의 희귀도가 'RARE'인 아이템들의 모든 다음 업그레이드 아이템의 아이템 ID(ITEM_ID), 아이템 명(ITEM_NAME), 아이템의 희귀도(RARITY)를 출력하는 SQL 문을 작성해 주세요. 이때 결과는 아이템 ID를 기준으로 내림차순 정렬주세요.

select item_id, item_name, rarity
from item_info
where item_id in (select t.item_id
from item_info as i, item_tree as t
where i.rarity = 'RARE' and t.parent_item_id = i.item_id)
order by item_id desc

