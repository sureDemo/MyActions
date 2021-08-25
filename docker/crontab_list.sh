# 每3天的23:50分清理一次日志
50 23 */3 * * rm -rf /scripts/logs/*.log

##############短期活动##############
#极速版红包
40 0,8 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
#jd_health
13 1,7,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
#jd_health_collect
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
#jd_market_lottery
4 10,19 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
#jd_jintie
10 0 * * * node /scripts/jd_jintie.js >> /scripts/logs/jd_jintie.log 2>&1
#jd_super_redrain
1 0-23/1 * * * node /scripts/jd_super_redrain.js >> /scripts/logs/jd_super_redrain.log 2>&1
#jd_half_redrain
30 20-23/1 * * * node /scripts/jd_half_redrain.js >> /scripts/logs/jd_half_redrain.log 2>&1
#jd_daily_lottery
13 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
#jd_beauty
1 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
#jd_live_redrain
0,30 0-23/1 * * * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1
#女装盲盒 活动时间：2021-05-1到2021-05-31
35 1,22 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
#金榜创造营
40 9,21 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
#5g超级盲盒
0 */4 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
#京喜牧场
20 0-23/3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
#东东电竞经理
47 10 * * * node /scripts/jd_djjl.js >> /scripts/logs/jd_djjl.log 2>&1
#食力街跑酷达人
0 0 * * * node /scripts/jd_msj.js >> /scripts/logs/jd_msj.log 2>&1
#天天优惠大乐透
25 6 * * * node /scripts/jd_DrawEntrance.js >> /scripts/logs/jd_DrawEntrance.log 2>&1
#国创
25 8 * * * node /scripts/jd_superBrand.js >> /scripts/logs/jd_superBrand.log 2>&1
#pk
33 10 * * * node /scripts/jd_ddopk.js >> /scripts/logs/jd_ddopk.log 2>&1
#QQ星
20 6,12,18 * * * node /scripts/jd_qqxing.js >> /scripts/logs/jd_qqxing.log 2>&1
#众筹许愿池
20 12 * * * node /scripts/jd_wishingPool.js >> /scripts/logs/jd_wishingPool.log 2>&1
#汪汪乐园
30 2,20 * * * node /scripts/jd_joy_park.js >> /scripts/logs/jd_joy_park.log 2>&1
#新签到
10 0,18 * * * node /scripts/jd_NewSign.js >> /scripts/logs/jd_NewSign.log 2>&1
#送豆得豆
30 0,12 * * * node /scripts/jd_sendBeans.js >> /scripts/logs/jd_sendBeans.log 2>&1
# 翻翻乐(7.15-8.15)
20 * * * * node /scripts/jd_flipcards.js >> /scripts/logs/jd_flipcards.log 2>&1
# 京喜财富岛提现
0 0,12 * * * node /scripts/jd_cfdtx.js >> /scripts/logs/jd_cfdtx.log 2>&1
# 跳跳乐瓜分京豆
1 0,11,21 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1
# 摇钱树助力
0-59/30 * * * * node /scripts/jd_moneyTree_help.js >> /scripts/logs/jd_moneyTree_help.log 2>&1
# MMdou
21 9 * * * node /scripts/jd_MMdou.js >> /scripts/logs/jd_MMdou.log 2>&1
# jd_summer_movement
12 0,6-23/2 * * * node /scripts/jd_summer_movements.js >> /scripts/logs/jd_summer_movements.log 2>&1
# jd_summer_movement_help
14/41 7-14 * * * node /scripts/jd_summer_movement_help.js >> /scripts/logs/jd_summer_movement_help.log 2>&1
##############长期活动##############
# 签到
0 0,18 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 东东超市兑换奖品
0,30 0 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
0 0 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 摇钱树
0 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
5 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
# 京东种豆得豆
0  */6 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
# 京东全民开红包
1 1 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 进店领豆
10 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 京东天天加速
8 */3 * * * node /scripts/jd_speed.js >> /scripts/logs/jd_speed.log 2>&1
# 东东超市
11 */6 * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
55 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
0 10 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京东排行榜
11 9 * * * node /scripts/jd_rankingList.js >> /scripts/logs/jd_rankingList.log 2>&1
# 天天提鹅
18 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 金融养猪
12 * * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 点点券
#20 0,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
# 京喜工厂
20 * * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
# 京喜工厂开团
20 9,13,16 * * * node /scripts/jd_dreamFactory_tuan.js >> /scripts/logs/jd_dreamFactory_tuan.log 2>&1
# 东东小窝
16 6,23 * * * node /scripts/jd_small_home.js >> /scripts/logs/jd_small_home.log 2>&1
# 东东工厂
36 */4 * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
# 十元街
36 0-23/4 * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
# 京东快递签到
23 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 京东汽车(签到满500赛点可兑换500京豆)
0 0 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
# 领京豆额外奖励(每日可获得3京豆)
33 0-23/4 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 京东直播(每日18豆)
10-20/5 12 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
# 微信小程序京东赚赚
30 0,1 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 京东汽车旅程赛点兑换金豆
0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
# 导到所有互助码
47 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 口袋书店
7 8,12,18 * * * node /scripts/jd_bookshop.js >> /scripts/logs/jd_bookshop.log 2>&1
# 签到领现金
27 7,15 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
# 闪购盲盒
27 8 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
# 京东秒秒币
10 7 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 京喜财富岛
10 * * * *  node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1
# 京喜财富岛提现
0 0 * * *  node /scripts/jx_cfdtx.js >> /scripts/logs/jx_cfdtx.log 2>&1
# 京东极速版
48 0,12,18 * * *  node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 京东抽奖机
22 0,12,18 * * *  node /scripts/jd_lotteryMachine.js >> /scripts/logs/jd_lotteryMachine.log 2>&1
# 宠汪汪
15 */2 * * * node /scripts/zx_joy.js >> /scripts/logs/zx_joy.log 2>&1
# 宠汪汪偷狗粮
10 0-21/3 * * * node /scripts/zx_joy_steal.js >> /scripts/logs/zx_joy_steal.log 2>&1
# 宠汪汪兑换
0 0,8,12,16 * * * node /scripts/zx_joy_reward_20.js >> /scripts/logs/zx_joy_reward_20.log 2>&1
0 0,8,12,16 * * * node /scripts/zx_joy_reward_500.js >> /scripts/logs/zx_joy_reward_500.log 2>&1
# 京东摇一摇
0 1,17 * * * node /scripts/jd_shake.js >> /scripts/logs/jd_shake.log 2>&1
# 保价
#0 12 */3 * * node /scripts/jd_priceProtect.js >> /scripts/logs/jd_priceProtect.log 2>&1
#京喜签到
20 5 * * * node /scripts/jx_sign.js >> /scripts/logs/jx_sign.log 2>&1
# 手机狂欢城(8.9-8.28)
0 0,12,18,21 * * * node /scripts/zx_carnivalcity.js >> /scripts/logs/zx_carnivalcity.log 2>&1
# 手机狂欢城助力(8.9-8.28)
10 0,8 * * * node /scripts/zx_carnivalcity_help.js >> /scripts/logs/zx_carnivalcity_help.log 2>&1
# 荣耀换新季
0 1 * * * node /scripts/zx_ryhxj.js >> /scripts/logs/zx_ryhxj.log 2>&1
# 来电好物季
10 1 * * * node /scripts/zx_ldhwj.js >> /scripts/logs/zx_ldhwj.log 2>&1
#清楚购物车
55 5,17 * * * node /scripts/jd_cleancart.js >> /scripts/logs/jd_cleancart.log 2>&1
#金机奖投票
33 4,7 8-20 8 * node /scripts/zx_golden_machine.js >> /scripts/logs/zx_golden_machine.log 2>&1
#晓龙
18 9,19 13-25 8 * node /scripts/zx_gua_xiaolong.js >> /scripts/logs/zx_gua_xiaolong.log 2>&1
#京东到家果园
10 0,3,8,11,17 * * * node /scripts/zx_jddj_fruit.js >> /scripts/logs/zx_jddj_fruit.log 2>&1
#京东到家鲜豆任务
0 0 */1 * * node /scripts/zx_jddj_bean.js >> /scripts/logs/zx_jddj_bean.log 2>&1
#京东到家收集水车水滴
*/5 * * * * node /scripts/zx_jddj_fruit_collectWater.js >> /scripts/logs/zx_jddj_fruit_collectWater.log 2>&1
#京东到家收集庄园水滴
*/5 * * * * node /scripts/zx_jddj_getPoints.js >> /scripts/logs/zx_jddj_getPoints.log 2>&1
#京东到家庄园浇水
15 0 * * * node /scripts/zx_jddj_plantBeans.js >> /scripts/logs/zx_jddj_plantBeans.log 2>&1

##############默认注释活动##############
# 京东试用（默认注释，请配合取关脚本使用）
#10 0 * * *  node /scripts/jd_try.js >> /scripts/logs/jd_try.log 2>&1
# 删除优惠券(默认注释，如需要自己开启，如有误删，已删除的券可以在回收站中还原，慎用)
#20 9 * * 6 node /scripts/jd_delCoupon.js >> /scripts/logs/jd_delCoupon.log 2>&1
# 京东家庭号(暂不知最佳cron)
# */20 * * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
# 监控crazyJoy分红
# 10 7 * * * node /scripts/jd_crazy_joy_bonus.js >> /scripts/logs/jd_crazy_joy_bonus.log 2>&1
# jd_cash_exchange
# 0,1,2 0 * * * node /scripts/jd_cash_exchange.js >> /scripts/logs/jd_cash_exchange.log 2>&1
# 京喜农场
#0 9,12,18 * * * node /scripts/jd_jxnc.js >> /scripts/logs/jd_jxnc.log 2>&1