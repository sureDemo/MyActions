/*
v5.6
京东到家果园任务脚本,支持qx,loon,shadowrocket,surge,nodejs
兼容京东jdCookie.js
手机设备在boxjs里填写cookie
boxjs订阅地址:https://gitee.com/passerby-b/javascript/raw/master/JD/passerby-b.boxjs.json

[task_local]
10 0,3,8,11,17 * * * https://raw.githubusercontent.com/passerby-b/JDDJ/main/jddj_fruit.js

[Script]
cron "10 0,3,8,11,17 * * *" script-path=https://raw.githubusercontent.com/passerby-b/JDDJ/main/jddj_fruit.js,tag=京东到家果园任务

*/

let isNotify = true; //是否通知,仅限nodejs
let ckPath = './jdCookie.js'; //ck路径,环境变量:JDDJ_CKPATH

const $ = new API("jddj_fruit");
try {
    //https://ghproxy.com/https://raw.githubusercontent.com/passerby-b/Script/master/jddj_fruit_code.js
    // $.http.get({ url: 'https://raw.githubusercontents.com/passerby-b/Script/master/jddj_fruit_code.js' }).then(response => {
    //     if (!!response.body) eval(response.body);
    // });
    eval(function(p, a, c, k, e, r) {
        e = function(c) { return (c < 62 ? '' : e(parseInt(c / 62))) + ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) };
        if ('0'.replace(0, e) == 0) {
            while (c--) r[e(c)] = k[c];
            k = [function(e) { return r[e] || e }];
            e = function() { return '([47adfhj-lpqsu-wyzA-WYZ]|[1-4]\\w)' };
            c = 1
        };
        while (c--)
            if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }('f 1m=\'\',d=\'\',1x=\'\';f M=\'30.\'+w.A(w.2r()*(35-2s)+2s);f N=\'114.\'+w.A(w.2r()*(35-2s)+2s);f 1O=w.A(w.2r()*(1500-1k)+1k);f 1D=[],1E=\'\';1F=0,21=0,23=\'\',1G=\'\',2t=\'\';!(C()=>{7(1D.1n==0){7($.1y.1W){7(2G.1y.36)2H=2G.1y.36;delete 2I.cache[2H];f 2u=2I(2H);1s(f 25 in 2u)7(!!2u[25])1D.2v(2u[25])}B{f 1P=$.2w(\'#jddj_cookies\');7(!!1P){7(1P.26(\',\')<0)1D.2v(1P);B 1D=1P.1X(\',\')}}}7(1D.1n==0){j.k(\'\\r\\n请先填写27\');1i}7(!$.1y.1W)2h=$.2w(\'#jddj_isNotify\');B 1E=2I(\'./2i\');f 38=1D.1n>w.39(3a)?w.39(3a):1D.1n;1s(f i=0;i<38;i++){j.k(\'\\r\\n★★★★★开始执行第\'+(i+1)+\'个账号,共\'+1D.1n+\'个账号★★★★★\');1m=1D[i];7(!1m)2J;1F=0,21=0;1m=1m.2x(/ /g,\'\').2x(/\\n/g,\'\');1m=p 3b(1m);7(!1m){j.k(\'京东ck转到家ck失败!\');2J}f D=p 3d();7(D!=0){$.1E(\'第\'+(i+1)+\'个账号27过期\',\'请访问\\3e://28.m.F.E/28/2K.2L\\n抓取27\',{1Y:\'H://28.m.F.E/28/2K.2L\'});7($.1y.1W&&\'\'+2h+\'\'==\'I\'){p 1E.2i(\'第\'+(i+1)+\'个账号27过期\',\'请访问\\3e://28.m.F.E/28/2K.2L\\n抓取27\')}2J}p $.1t(1k);p 2M(0);p $.1t(1k);f O=p 2N();p $.1t(1k);p 3f();p $.1t(1k);p 3g(O);p $.1t(1k);p 3h();p $.1t(1k);p 3i();p $.1t(1k);1G=\'\';O=p 2N();7(O&&O.l&&O.l.1H){1s(f J=0;J<O.l.1H.1n;J++){f 1I=O.l.1H[J];7(1I.1J==\'23eee1c043c01bc\'){23+=\'@\'+1I.uniqueId+\',\';1G=\',助力\'+1I.finishNum+\'/\'+1I.totalNum+\',助力你的好友:\';7(1I.2O&&1I.2O.1n>0){1I.2O.3j(a=>{1G+=a.3k+\',\'});1G=1G.3l(0,1G.1n-1)}3m}}}p 2M(2);p $.1t(1k)}j.k(\'京东到家果园互助码:/3n \'+23);7((s z().getUTCHours()+8)%24<8){$.1E(\'京东到家果园互助码:\',\'\',23);7($.1y.1W){1E.2i(\'京东到家果园互助码:\',\'/3n \'+23)}}7($.1y.1W)p 1E.2i(\'京东到家果园信息\',2t);7(!2G.1y.SCF_NAMESPACE)$.write(23,\'2P\');B j.k("◆◆◆云函数无法内部助力!◆◆◆")})().1o(C(e)=>{j.k(\'\',\'❌失败! 原因:\'+e+\'!\',\'\');7($.1y.1W&&\'\'+2h+\'\'==\'I\'){1E.2i(\'京东到家果园\',\'❌失败! 原因:\'+e+\'!\')}}).3o(()=>{$.done()});C 1p 3d(){1i s 1z(C y=>{1u{f 1q=w.A(s z());f v=U(\'H://K.F.E/V?W=2y&R=5.0.0&Y=3p&3q=2y&Z=8.10.5&3r=8.10.1&12=13&S=mine%2FgetUserAccountInfo&isForbiddenDialog=2z&17=2z&isNeedDealLogin=2z&q=%7B%2Q%22%3A\'+1O+\'%2C%22fromSource%22%3A%225%22%7D&afsImg=&29=\'+M+\'&2a=\'+N+\'&M=\'+M+\'&N=\'+N+\'&2b=\'+1O+\'&18=\'+d+\'&T=\'+d+\'&19=1a&3s=&1e=\'+d+1q+\'&channelCode=\',\'\');f D=1;p $.L.1b(v).P(u=>{f 4=1f.1g(u.q);D=4.D;7(4.D==0){1u{1x=4.l.userInfo.userBaseInfo.3k;j.k("●●●"+1x+"●●●")}1o(G){1x=\'昵称获取失败\'}}B 1x=\'昵称获取失败\'});y(D)}1o(G){j.k(\'\\n【个人信息】:\'+G);y(1)}})}C 1p 2N(){1i s 1z(C y=>{1u{f 1q=w.A(s z());f v=U(\'H://K.F.E/V?Q=\'+1q+\'&1Z=1v/list\',\'S=1v%3t&17=I&q=%7B%1A%22%3A%3u%22%2C%1B%22%3A4%7D&M=\'+M+\'&N=\'+N+\'&29=\'+M+\'&2a=\'+N+\'&2b=\'+1O+\'&W=rn&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+1q+\'&18=\'+d+\'&T=\'+d+\'&Q=\'+1q+\'&1Z=1v%3t\');v.1Y+=\'&\'+v.q;$.L.1b(v).P(u=>{f 4=1f.1g(u.q);y(4)})}1o(G){j.k(\'\\n【任务列表】:\'+G);y({})}})}C 1p 3i(){1i s 1z(C y=>{1u{f 1q=w.A(s z());f v=U(\'H://K.F.E/V?Q=\'+1q+\'&1Z=20/watering\',\'S=20%3v&17=I&3w=3x&q=%7B%22waterTime%22%1K%7D&M=\'+M+\'&N=\'+N+\'&29=\'+M+\'&2a=\'+N+\'&2b=1381&W=rn&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+1q+\'&18=\'+d+\'&T=\'+d+\'&Q=\'+1q+\'&1Z=20%3v\');f 2S=1,2T=0;do{2T++;j.k(\'\\n**********开始执行第\'+2T+\'次浇水**********\');p $.L.3y(v).P(u=>{f 4=1f.1g(u.q);j.k(\'\\n【浇水】:\'+4.h);2S=4.D;7(4.D==0)21++});p $.1t(1k)}while(2S==0);y()}1o(G){j.k(\'\\n【浇水】:\'+G);y()}})}C 1p 3z(){1i s 1z(C y=>{1u{f v=U(\'H://K.F.E/V?Q=\'+w.A(s z())+\'&S=signin%2FuserSigninNew&17=I&q=%7B%22channel%22%3A%22daojiaguoyuan%22%2C%2Q%22%3A\'+1O+\'%2C%3B%22%3A\'+N+\'%2C%3C%22%3A\'+M+\'%2C%22ifCic%22%3A0%7D&W=1w&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+\'&18=\'+d+\'&T=\'+d,\'\');$.L.1b(v).P(u=>{f 4=1f.1g(u.q);j.k(\'\\n【到家签到】:\'+4.h);y()})}1o(G){j.k(\'\\n【到家签到领水滴】:\'+G);y()}})}C 1p 3f(){1i s 1z(C y=>{1u{f 2c;f v=U(\'H://K.F.E/V?Q=\'+w.A(s z())+\'&S=20%2FgetWaterBottleInfo&17=I&q=%7B%7D&W=1w&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+w.A(s z())+\'&18=\'+d+\'&T=\'+d,\'\');p $.L.1b(v).P(u=>{1L 4=1f.1g(u.q);7(4.D==0){2c=4.l.2c;j.k(\'\\n【收玻璃瓶水滴】:水瓶中有:\'+4.l.yesterdayAccumulate+\'水滴\')}B{j.k(\'\\n【收玻璃瓶水滴】:水瓶信息错误\')}});7(2c==0){v=U(\'H://K.F.E/V?Q=\'+w.A(s z())+\'&S=20%2FreceiveWaterBottle&17=I&q=%7B%7D&W=1w&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+w.A(s z())+\'&18=\'+d+\'&T=\'+d,\'\');p $.L.1b(v).P(u=>{1L 4=1f.1g(u.q);7(4.D==0){j.k(\'\\n【收玻璃瓶水滴】:水瓶收取成功\')}B{j.k(\'\\n【收玻璃瓶水滴】:水瓶收取错误\')}})}B 7(2c==1){j.k(\'\\n【收玻璃瓶水滴】:水瓶已经收取过\')}B 7(2c==-2){j.k(\'\\n【收玻璃瓶水滴】:收取时间未到\')}B{j.k(\'\\n【收玻璃瓶水滴】:水瓶状态错误或暂不可收取:\')}y()}1o(G){j.k(\'\\n【收玻璃瓶水滴】:\'+G);y()}})}C 1p 3h(){1i s 1z(C y=>{1u{f 2j=[],1C=\'\';7(s z().getHours()<8){p $.L.1b({1Y:\'H://gitee.E/passerby-b/javascript/raw/master/test/sharecode.js\'}).P(u=>{1C=u.q});7($.2w(\'2P\'))1C+=$.2w(\'2P\')}1u{p $.L.1b({1Y:\'L://193.123.242.142:8887/queryJddjCode\',timeout:20000}).P(u=>{1C+=u.q})}1o(G){}1C=1C.2x(/ /g,\'\').2x(/\\n/g,\'\');7(!!1C){1C=1C.3l(0,1C.1n-1);2j=1C.1X(\',\')}1s(f J=0;J<2j.1n;J++){f v=U(\'H://K.F.E/V?M=\'+M+\'&N=\'+N+\'&29=\'+M+\'&2a=\'+N+\'&2b=\'+1O+\'&18=\'+d+\'&T=\'+d+\'&W=2y&3q=2y&R=5.0.0&Y=3p&Z=5.0.0&12=13&19=1a&3r=9.2.0&17=I&3s=djgyzhuli&S=1v%2A&q=%7B%1A%22%3A%3u%22%2C%1M%22%3A1201%2C%1N%22%3A%2223eee1c043c01bc%22%2C%1B%22%3A5%2C%22assistTargetPin%22%3A%22\'+2j[J].1X(\'@\')[0]+\'%22%2C%22uniqueId%22%3A%22\'+2j[J].1X(\'@\')[1]+\'%22%7D\',\'\');f D=0;p $.L.1b(v).P(u=>{f 4=1f.1g(u.q);7(4.D==0)j.k(\'\\n【助力】:\'+4.h);B j.k(\'\\n【助力】:\'+4.h+\',你的助力次数已用完或对方助力已满!\'),D=1});p $.1t(1k);7(D==1)3m}y()}1o(G){j.k(\'\\n【助力】:\'+G);y()}})}C 1p _runTask(O){1i s 1z(C y=>{1u{1s(f J=0;J<O.l.1H.1n;J++){1L a=O.l.1H[J];7(a.1r==3D||a.1r==3E){f v=U(\'H://K.F.E/V?Q=\'+w.A(s z())+\'&S=1v%2U&17=I&q=%7B%1A%22%3A%22\'+a.1Q+\'%22%2C%1N%22%3A%22\'+1R(a.1J)+\'%22%2C%1M%22%3A\'+a.1r+\'%2C%1B%22%1K%2C%1S%22%1T%7D&W=1w&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+w.A(s z())+\'&18=\'+d+\'&T=\'+d,\'\');p $.L.1b(v).P(u=>{2d 4=1f.1g(u.q),h=\'\';7(4.D==0){h=4.h+\',奖励:\'+4.l.1U}B{h=4.h}j.k(\'\\n领取任务【\'+a.1l+\'】:\'+h)})}7(a.2e>-1){1s(f t=0;t<2V(a.2e);t++){p $.1t(1k);j.k(\'计时:\'+(t+1)+\'秒...\')}};v=U(\'H://K.F.E/V?Q=\'+w.A(s z())+\'&S=1v%2A&17=I&q=%7B%1A%22%3A%22\'+a.1Q+\'%22%2C%1N%22%3A%22\'+1R(a.1J)+\'%22%2C%1M%22%3A\'+a.1r+\'%2C%1B%22%1K%2C%1S%22%1T%7D&W=1w&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+w.A(s z())+\'&18=\'+d+\'&T=\'+d,\'\');p $.L.1b(v).P(u=>{2d 4=1f.1g(u.q),h=\'\';7(4.D==0){h=4.h+\',奖励:\'+4.l.1U}B{h=4.h}j.k(\'\\n任务完成【\'+a.1l+\'】:\'+h)});v=U(\'H://K.F.E/V?Q=\'+w.A(s z())+\'&S=1v%2W&17=I&q=%7B%1A%22%3A%22\'+a.1Q+\'%22%2C%1N%22%3A%22\'+1R(a.1J)+\'%22%2C%1M%22%3A\'+a.1r+\'%2C%1B%22%1K%2C%1S%22%1T%7D&W=1w&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+w.A(s z())+\'&18=\'+d+\'&T=\'+d,\'\');p $.L.1b(v).P(u=>{2d 4=1f.1g(u.q),h=\'\';7(4.D==0){h=4.h+\',奖励:\'+4.l.1U}B{h=4.h}j.k(\'\\n领取奖励【\'+a.1l+\'】:\'+h)})}y()}1o(G){j.k(\'\\n【执行任务】:\'+G);y()}})}1L 3F=[3D,3E,3G,1105,1103,0,1101];C 1p 3g(O){1i s 1z(C y=>{1u{7(!O||!O.l||!O.l.1H){j.k(\'\\n任务列表获取失败,跳过做任务.....\');y();1i}1s(f J=0;J<O.l.1H.1n;J++){1L a=O.l.1H[J];7(a.2f==3||a.2f==2){j.k(\'\\n【\'+a.1l+\'】: 任务已完成,跳过做任务\')}B 7(a.1r==502){p 3z()}B 7(3F.includes(a.1r)){7(a.2f==0){f v=U(\'H://K.F.E/V?Q=\'+w.A(s z())+\'&S=1v%2U&17=I&q=%7B%1A%22%3A%22\'+a.1Q+\'%22%2C%1N%22%3A%22\'+1R(a.1J)+\'%22%2C%1M%22%3A\'+a.1r+\'%2C%1B%22%1K%2C%1S%22%1T%7D&W=1w&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+w.A(s z())+\'&18=\'+d+\'&T=\'+d,\'\');p $.L.1b(v).P(u=>{f 4=1f.1g(u.q),h=\'\';7(4.D==0){h=4.h+\',奖励:\'+4.l.1U}B{h=4.h}j.k(\'\\n领取任务【\'+a.1l+\'】:\'+h)});7(a.2e>-1){1s(f t=0;t<2V(a.2e);t++){p $.1t(1k);j.k(\'计时:\'+(t+1)+\'秒...\')}}}B{j.k(\'\\n【\'+a.1l+\'】: 任务已领取或不需要领取\')};7(a.1r!=0){v=U(\'H://K.F.E/V?Q=\'+w.A(s z())+\'&S=1v%2A&17=I&q=%7B%1A%22%3A%22\'+a.1Q+\'%22%2C%1N%22%3A%22\'+1R(a.1J)+\'%22%2C%1M%22%3A\'+a.1r+\'%2C%1B%22%1K%2C%1S%22%1T%7D&W=1w&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+w.A(s z())+\'&18=\'+d+\'&T=\'+d,\'\');p $.L.1b(v).P(u=>{f 4=1f.1g(u.q),h=\'\';7(4.D==0){h=4.h+\',奖励:\'+4.l.1U;a.2f=2}B{h=4.h}j.k(\'\\n任务完成【\'+a.1l+\'】:\'+h)})}}B{j.k(\'\\n【\'+a.1l+\'】: 脚本无法执行此任务或任务不需要主动完成\')}7(a.2f==2||a.taskTypes==3G){v=U(\'H://K.F.E/V?Q=\'+w.A(s z())+\'&S=1v%2W&17=I&q=%7B%1A%22%3A%22\'+a.1Q+\'%22%2C%1N%22%3A%22\'+1R(a.1J)+\'%22%2C%1M%22%3A\'+a.1r+\'%2C%1B%22%1K%2C%1S%22%1T%7D&W=1w&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+w.A(s z())+\'&18=\'+d+\'&T=\'+d,\'\');p $.L.1b(v).P(u=>{f 4=1f.1g(u.q),h=\'\';7(4.D==0){h=4.h+\',奖励:\'+4.l.1U}B{h=4.h}j.k(\'\\n领取奖励【\'+a.1l+\'】:\'+h)})}B 7(a.2f==3){j.k(\'\\n【\'+a.1l+\'】: 奖励已领取,跳过领奖励\')}B{j.k(\'\\n【\'+a.1l+\'】: 任务未完成,跳过领奖励\')}}y()}1o(G){j.k(\'\\n【执行任务】:\'+G);y()}})}C 1p runTask2(O){1i s 1z(C y=>{1u{1s(f J=0;J<O.l.1H.1n;J++){1L a=O.l.1H[J];7(a.1l.26(\'限时\')>-1){f v=U(\'H://K.F.E/V?Q=\'+w.A(s z())+\'&S=1v%2U&17=I&q=%7B%1A%22%3A%22\'+a.1Q+\'%22%2C%1N%22%3A%22\'+1R(a.1J)+\'%22%2C%1M%22%3A\'+a.1r+\'%2C%1B%22%1K%2C%1S%22%1T%7D&W=1w&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+w.A(s z())+\'&18=\'+d+\'&T=\'+d,\'\');p $.L.1b(v).P(u=>{2d 4=1f.1g(u.q),h=\'\';7(4.D==0){h=4.h+\',奖励:\'+4.l.1U}B{h=4.h}j.k(\'\\n领取任务【\'+a.1l+\'】:\'+h)});7(a.2e>-1){1s(f t=0;t<2V(a.2e);t++){p $.1t(1k);j.k(\'计时:\'+(t+1)+\'秒...\')}};v=U(\'H://K.F.E/V?Q=\'+w.A(s z())+\'&S=1v%2A&17=I&q=%7B%1A%22%3A%22\'+a.1Q+\'%22%2C%1N%22%3A%22\'+1R(a.1J)+\'%22%2C%1M%22%3A\'+a.1r+\'%2C%1B%22%1K%2C%1S%22%1T%7D&W=1w&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+w.A(s z())+\'&18=\'+d+\'&T=\'+d,\'\');p $.L.1b(v).P(u=>{2d 4=1f.1g(u.q),h=\'\';7(4.D==0){h=4.h+\',奖励:\'+4.l.1U}B{h=4.h}j.k(\'\\n任务完成【\'+a.1l+\'】:\'+h)});v=U(\'H://K.F.E/V?Q=\'+w.A(s z())+\'&S=1v%2W&17=I&q=%7B%1A%22%3A%22\'+a.1Q+\'%22%2C%1N%22%3A%22\'+1R(a.1J)+\'%22%2C%1M%22%3A\'+a.1r+\'%2C%1B%22%1K%2C%1S%22%1T%7D&W=1w&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+w.A(s z())+\'&18=\'+d+\'&T=\'+d,\'\');p $.L.1b(v).P(u=>{2d 4=1f.1g(u.q),h=\'\';7(4.D==0){h=4.h+\',奖励:\'+4.l.1U}B{h=4.h}j.k(\'\\n领取奖励【\'+a.1l+\'】:\'+h)})}}y()}1o(G){j.k(\'\\n【执行任务】:\'+G);y()}})}C 1p 2M(2X){1i s 1z(C y=>{1u{f 1q=w.A(s z());f v=U(\'H://K.F.E/V?Q=\'+1q+\'&1Z=20/initFruit\',\'S=20%3H&17=I&3w=3x&q=%7B%2Q%22%3A%22\'+1O+\'%22%2C%3B%22%3A\'+N+\'%2C%3C%22%3A\'+M+\'%7D&M=\'+M+\'&N=\'+N+\'&29=\'+M+\'&2a=\'+N+\'&2b=\'+1O+\'&W=rn&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&1e=\'+d+1q+\'&18=\'+d+\'&T=\'+d+\'&Q=\'+1q+\'&1Z=20%3H\');p $.L.3y(v).P(C u=>{f 4=1f.1g(u.q);7(4.D==0){7(2X==0){1F=4.l.2k.2l;23+=4.l.1j.userPin}7(2X==2){1F=(21*10)+4.l.2k.2l-1F;7(1F<0)1F=0;7(4.l.1j.2m==0){j.k(\'\\n京东到家果园【\'+1x+\'】:\'+4.l.1j.2g+\'已成熟,快去收取!\');$.1E(\'京东到家果园\',\'【\'+1x+\'】\',\'京东到家果园\'+4.l.1j.2g+\'已成熟,快去收取!\');7($.1y.1W&&\'\'+2h+\'\'==\'I\'){2t+=\'\\r\\n【\'+1x+\'】\\r\\n京东到家果园\'+4.l.1j.2g+\'已成熟,快去收取!\'}}7(4.l.1j.2m>0){f 2n=\'次\';7(4.l.1j.growingStage==5)2n=\'%\';j.k(\'\\n京东到家果园【\'+1x+\'】:\'+4.l.1j.2g+\',本次领取\'+1F+\'滴水,浇水\'+21+\'次,还需浇水\'+4.l.1j.2m+2n+4.l.1j.2Y+\',还剩\'+4.l.2k.2l+\'滴水\'+1G);$.1E(\'京东到家果园\',\'【\'+1x+\'】\',4.l.1j.2g+\',本次领取\'+1F+\'滴水,浇水\'+21+\'次,还需浇水\'+4.l.1j.2m+2n+4.l.1j.2Y+\',还剩\'+4.l.2k.2l+\'滴水\'+1G);7($.1y.1W&&\'\'+2h+\'\'==\'I\'){2t+=\'\\r\\n【\'+1x+\'】\\r\\n\'+4.l.1j.2g+\',本次领取\'+1F+\'滴水,浇水\'+21+\'次,还需浇水\'+4.l.1j.2m+2n+4.l.1j.2Y+\',还剩\'+4.l.2k.2l+\'滴水\'+1G}}}}y()})}1o(G){j.k(\'\\n【果树信息】:\'+G);y()}3o{treeInfoTimes=I}})}1p U(1Y,q){f 2o=decodeURIComponent(q).1X(\'&\');f 2Z=\'\';7(q&&2o.1n>0){f 31={},2p=[],32=[];1s(1L o of 2o){f c=o.1X(\'=\');7(!!c[1]&&c[0]!=\'S\'&&c[0]!=\'3J\'){31[c[0]]=c[1];2p.2v(c[0])}}2p=2p.sort();2p.3j(1I=>{32.2v(31[1I])});1L 3K="923047ae3f8d11d8b19aeb9f3d1bc200";2Z=hex_hmac_sha256(3K,32.join(\'&\'))}f v={1Y:1Y,2B:{\'3L\':\'K.F.E\',\'3M-3N\':\'3O/x-3P-3Q-3R;\',\'Origin\':\'H://K.F.E\',\'3S\':1m,\'Connection\':\'keep-alive\',\'3T\':\'*/*\',\'3U-3V\':\'3W/5.0 (2q; 3X 2q OS 14_7 2E 3Y OS X) 3Z/40.1.15 (41, 2E 42) 43/15E148________appName=jdLocal&R=iOS&T=D4A23E4F-26D5-40EC-8F0D-5E69F35351D3&commonParams={"cityId":"\'+1O+\'","44":"8.11.0","latitude":"\'+M+\'","longitude":"\'+N+\'","sharePackageVersion":"2"}&44=8.11.0&supportDJSHWK&isElderEnable=0&isElderBigFont=0\',\'3T-Language\':\'zh-cn\'},q:q+\'&3J=\'+2Z};1i v}C 1p 3b(1m){1i s 1z(C y=>{1u{7(1m.26(\'2F\')>-1){f 2o=1m.1X(\';\');1s(1L o of 2o){7(o.26(\'2F\')>-1){d=o.1X(\'=\')[1]}}y(1m)}B{d=45();f v={1Y:encodeURI(\'H://K.F.E/V?Q=\'+(+s z())+\'&1Z=33/34&S=33/34&q={}&M=&N=&29=&2a=&2b=&W=h5&R=6.6.0&Y=h5&Z=6.6.0&12=13&19=1a&17=2z&1e=\'+d+\'&18=\'+d+\'&T=\'+d+\'&Q=\'+(+s z())+\'&1Z=33/34\'),2B:{"3S":\'2F=\'+d+\';\'+1m+\';\',"3L":"K.F.E",\'3M-3N\':\'3O/x-3P-3Q-3R;\',"3U-3V":\'jdapp;2q;10.0.10;14.1;\'+d+\';network/wifi;model/iPhone11,6;appBuild/167764;jdSupportDarkMode/0;3W/5.0 (2q; 3X 2q OS 14_1 2E 3Y OS X) 3Z/40.1.15 (41, 2E 42) 43/15E148;supportJDSHWK/1\'}};f 1P=\'\';p $.L.1b(v).P(C u=>{7(u.q.26(\'请求成功\')>-1){1s(1L 25 in u.2B){7(25.toLowerCase().26(\'27\')>-1){1P=u.2B[25].46()}}1P+=\';2F=\'+d}});y(1P)}}1o(G){j.k(G);y(\'\')}})}1p 45(){1p s4(){1i w.floor((1+w.2r())*0x10000).46(16).substring(1)}1i s4()+s4()+\'-\'+s4()+\'-\'+s4()+\'-\'+s4()+\'-\'+s4()+s4()+s4()}', [], 255, '||||data|||if|||item|||deviceid||let||msg||console|log|result||||await|body||new||response|option|Math||resolve|Date|round|else|async|code|com|jd|error|https|true|index|daojia|http|lat|lng|tslist|then|_jdrandom|platform|functionId|deviceId|urlTask|client|channel||platCode|appVersion|||appName|paidaojia||||isNeedDealError|deviceToken|deviceModel|appmodel|get|||traceId|JSON|parse||return|activityInfoResponse|1000|taskTitle|thiscookie|length|catch|function|time|taskType|for|wait|try|task|ios|nickname|env|Promise|22modelId|22plateCode|codestr|cookies|notify|waterNum|hzstr|taskInfoList|element|taskId|3A1|const|22taskType|22taskId|cityid|ckstr|modelId|encodeURIComponent|22subNode|3Anull|awardValue||isNode|split|url|_funid_|fruit|waterTimes||shareCode||key|indexOf|cookie|bean|lat_pos|lng_pos|city_id|receiveStatus|var|browseTime|status|fruitName|isNotify|sendNotify|scodes|userResponse|waterBalance|curStageLeftProcess|unit|arr|keys|iPhone|random|10000|msgStr|jdcookies|push|read|replace|wx_xcx|false|2Ffinished|headers|||like|deviceid_pdj_jd|process|ckPath|require|continue|signIndex|action|treeInfo|taskList|fissionUserInfoList|shareCodes|22cityId||waterStatus|waterCount|2Freceived|parseInt|2FsendPrize|step|stageName|cryptoContent||json|sortVlaues|login|treasure|99999|JDDJ_CKPATH||accountNum|sqrt|400|taskLoginUrl||userinfo|nhttps|waterBottle|runTask|zhuLi|water|forEach|nickName|substr|break|dj_fruit|finally|mini|mpChannel|xcxVersion|business|2Flist|22M10007|2Fwatering|method|POST|post|sign||22longitude|22latitude|307|901|do_tasks|1102|2FinitFruit||signKeyV1|secret|Host|Content|Type|application|www|form|urlencoded|Cookie|Accept|User|Agent|Mozilla|CPU|Mac|AppleWebKit|605|KHTML|Gecko|Mobile|djAppVersion|_uuid|toString'.split('|'), 0, {}))
} catch (error) {
    console.log(error);
    $.done();
}

/*********************************** API *************************************/
function ENV() {
    const e = "undefined" != typeof $task,
        t = "undefined" != typeof $loon,
        s = "undefined" != typeof $httpClient && !t,
        i = "function" == typeof require && "undefined" != typeof $jsbox;
    return { isQX: e, isLoon: t, isSurge: s, isNode: "function" == typeof require && !i, isJSBox: i, isRequest: "undefined" != typeof $request, isScriptable: "undefined" != typeof importModule }
}

function HTTP(e = { baseURL: "" }) {
    const { isQX: t, isLoon: s, isSurge: i, isScriptable: n, isNode: o } = ENV(), r = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/;
    const u = {};
    return ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"].forEach(l => u[l.toLowerCase()] = (u => (function(u, l) {
        l = "string" == typeof l ? { url: l } : l;
        const h = e.baseURL;
        h && !r.test(l.url || "") && (l.url = h ? h + l.url : l.url);
        const a = (l = {...e, ...l }).timeout,
            c = { onRequest: () => {}, onResponse: e => e, onTimeout: () => {}, ...l.events };
        let f, d;
        if (c.onRequest(u, l), t) f = $task.fetch({ method: u, ...l });
        else if (s || i || o) f = new Promise((e, t) => {
            (o ? require("request") : $httpClient)[u.toLowerCase()](l, (s, i, n) => { s ? t(s) : e({ statusCode: i.status || i.statusCode, headers: i.headers, body: n }) })
        });
        else if (n) {
            const e = new Request(l.url);
            e.method = u, e.headers = l.headers, e.body = l.body, f = new Promise((t, s) => { e.loadString().then(s => { t({ statusCode: e.response.statusCode, headers: e.response.headers, body: s }) }).catch(e => s(e)) })
        }
        const p = a ? new Promise((e, t) => { d = setTimeout(() => (c.onTimeout(), t(`${u} URL: ${l.url} exceeds the timeout ${a} ms`)), a) }) : null;
        return (p ? Promise.race([p, f]).then(e => (clearTimeout(d), e)) : f).then(e => c.onResponse(e))
    })(l, u))), u
}

function API(e = "untitled", t = !1) {
    const { isQX: s, isLoon: i, isSurge: n, isNode: o, isJSBox: r, isScriptable: u } = ENV();
    return new class {
        constructor(e, t) {
            this.name = e, this.debug = t, this.http = HTTP(), this.env = ENV(), this.node = (() => { if (o) { return { fs: require("fs") } } return null })(), this.initCache();
            Promise.prototype.delay = function(e) { return this.then(function(t) { return ((e, t) => new Promise(function(s) { setTimeout(s.bind(null, t), e) }))(e, t) }) }
        }
        initCache() {
            if (s && (this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}")), (i || n) && (this.cache = JSON.parse($persistentStore.read(this.name) || "{}")), o) {
                let e = "root.json";
                this.node.fs.existsSync(e) || this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.root = {}, e = `${this.name}.json`, this.node.fs.existsSync(e) ? this.cache = JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)) : (this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.cache = {})
            }
        }
        persistCache() {
            const e = JSON.stringify(this.cache, null, 2);
            s && $prefs.setValueForKey(e, this.name), (i || n) && $persistentStore.write(e, this.name), o && (this.node.fs.writeFileSync(`${this.name}.json`, e, { flag: "w" }, e => console.log(e)), this.node.fs.writeFileSync("root.json", JSON.stringify(this.root, null, 2), { flag: "w" }, e => console.log(e)))
        }
        write(e, t) {
            if (this.log(`SET ${t}`), -1 !== t.indexOf("#")) {
                if (t = t.substr(1), n || i) return $persistentStore.write(e, t);
                if (s) return $prefs.setValueForKey(e, t);
                o && (this.root[t] = e)
            } else this.cache[t] = e;
            this.persistCache()
        }
        read(e) { return this.log(`READ ${e}`), -1 === e.indexOf("#") ? this.cache[e] : (e = e.substr(1), n || i ? $persistentStore.read(e) : s ? $prefs.valueForKey(e) : o ? this.root[e] : void 0) }
        delete(e) {
            if (this.log(`DELETE ${e}`), -1 !== e.indexOf("#")) {
                if (e = e.substr(1), n || i) return $persistentStore.write(null, e);
                if (s) return $prefs.removeValueForKey(e);
                o && delete this.root[e]
            } else delete this.cache[e];
            this.persistCache()
        }
        notify(e, t = "", l = "", h = {}) {
            const a = h["open-url"],
                c = h["media-url"];
            if (s && $notify(e, t, l, h), n && $notification.post(e, t, l + `${c ? "\n多媒体:" + c : ""}`, { url: a }), i) {
                let s = {};
                a && (s.openUrl = a), c && (s.mediaUrl = c), "{}" === JSON.stringify(s) ? $notification.post(e, t, l) : $notification.post(e, t, l, s)
            }
            if (o || u) { const s = l + (a ? `\n点击跳转: ${a}` : "") + (c ? `\n多媒体: ${c}` : ""); if (r) { require("push").schedule({ title: e, body: (t ? t + "\n" : "") + s }) } else console.log(`${e}\n${t}\n${s}\n\n`) }
        }
        log(e) { this.debug && console.log(`[${this.name}] LOG: ${this.stringify(e)}`) }
        info(e) { console.log(`[${this.name}] INFO: ${this.stringify(e)}`) }
        error(e) { console.log(`[${this.name}] ERROR: ${this.stringify(e)}`) }
        wait(e) { return new Promise(t => setTimeout(t, e)) }
        done(e = {}) {
            console.log('done!');
            s || i || n ? $done(e) : o && !r && "undefined" != typeof $context && ($context.headers = e.headers, $context.statusCode = e.statusCode, $context.body = e.body)
        }
        stringify(e) { if ("string" == typeof e || e instanceof String) return e; try { return JSON.stringify(e, null, 2) } catch (e) { return "[object Object]" } }
    }(e, t)
}
/*****************************************************************************/

/*********************************** SHA256 *************************************/
var hexcase = 0;
var b64pad = "";

function hex_sha256(s) { return rstr2hex(rstr_sha256(str2rstr_utf8(s))) }

function b64_sha256(s) { return rstr2b64(rstr_sha256(str2rstr_utf8(s))) }

function any_sha256(s, e) { return rstr2any(rstr_sha256(str2rstr_utf8(s)), e) }

function hex_hmac_sha256(k, d) { return rstr2hex(rstr_hmac_sha256(str2rstr_utf8(k), str2rstr_utf8(d))) }

function b64_hmac_sha256(k, d) { return rstr2b64(rstr_hmac_sha256(str2rstr_utf8(k), str2rstr_utf8(d))) }

function any_hmac_sha256(k, d, e) { return rstr2any(rstr_hmac_sha256(str2rstr_utf8(k), str2rstr_utf8(d)), e) }

function sha256_vm_test() { return hex_sha256("abc").toLowerCase() == "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad" }

function rstr_sha256(s) { return binb2rstr(binb_sha256(rstr2binb(s), s.length * 8)) }

function rstr_hmac_sha256(key, data) {
    var bkey = rstr2binb(key);
    if (bkey.length > 16) bkey = binb_sha256(bkey, key.length * 8);
    var ipad = Array(16),
        opad = Array(16);
    for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C
    }
    var hash = binb_sha256(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
    return binb2rstr(binb_sha256(opad.concat(hash), 512 + 256))
}

function rstr2hex(input) {
    try { hexcase } catch (e) { hexcase = 0 }
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var output = "";
    var x;
    for (var i = 0; i < input.length; i++) {
        x = input.charCodeAt(i);
        output += hex_tab.charAt((x >>> 4) & 0x0F) + hex_tab.charAt(x & 0x0F)
    }
    return output
}

function rstr2b64(input) {
    try { b64pad } catch (e) { b64pad = '' }
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var output = "";
    var len = input.length;
    for (var i = 0; i < len; i += 3) {
        var triplet = (input.charCodeAt(i) << 16) | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > input.length * 8) output += b64pad;
            else output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F)
        }
    }
    return output
}

function rstr2any(input, encoding) {
    var divisor = encoding.length;
    var remainders = Array();
    var i, q, x, quotient;
    var dividend = Array(Math.ceil(input.length / 2));
    for (i = 0; i < dividend.length; i++) { dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1) }
    while (dividend.length > 0) {
        quotient = Array();
        x = 0;
        for (i = 0; i < dividend.length; i++) {
            x = (x << 16) + dividend[i];
            q = Math.floor(x / divisor);
            x -= q * divisor;
            if (quotient.length > 0 || q > 0) quotient[quotient.length] = q
        }
        remainders[remainders.length] = x;
        dividend = quotient
    }
    var output = "";
    for (i = remainders.length - 1; i >= 0; i--) output += encoding.charAt(remainders[i]);
    var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
    for (i = output.length; i < full_length; i++) output = encoding[0] + output;
    return output
}

function str2rstr_utf8(input) {
    var output = "";
    var i = -1;
    var x, y;
    while (++i < input.length) {
        x = input.charCodeAt(i);
        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
        if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
            x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
            i++
        }
        if (x <= 0x7F) output += String.fromCharCode(x);
        else if (x <= 0x7FF) output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
        else if (x <= 0xFFFF) output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
        else if (x <= 0x1FFFFF) output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F))
    }
    return output
}

function str2rstr_utf16le(input) { var output = ""; for (var i = 0; i < input.length; i++) output += String.fromCharCode(input.charCodeAt(i) & 0xFF, (input.charCodeAt(i) >>> 8) & 0xFF); return output }

function str2rstr_utf16be(input) { var output = ""; for (var i = 0; i < input.length; i++) output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF, input.charCodeAt(i) & 0xFF); return output }

function rstr2binb(input) { var output = Array(input.length >> 2); for (var i = 0; i < output.length; i++) output[i] = 0; for (var i = 0; i < input.length * 8; i += 8) output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32); return output }

function binb2rstr(input) { var output = ""; for (var i = 0; i < input.length * 32; i += 8) output += String.fromCharCode((input[i >> 5] >>> (24 - i % 32)) & 0xFF); return output }

function sha256_S(X, n) { return (X >>> n) | (X << (32 - n)) }

function sha256_R(X, n) { return (X >>> n) }

function sha256_Ch(x, y, z) { return ((x & y) ^ ((~x) & z)) }

function sha256_Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)) }

function sha256_Sigma0256(x) { return (sha256_S(x, 2) ^ sha256_S(x, 13) ^ sha256_S(x, 22)) }

function sha256_Sigma1256(x) { return (sha256_S(x, 6) ^ sha256_S(x, 11) ^ sha256_S(x, 25)) }

function sha256_Gamma0256(x) { return (sha256_S(x, 7) ^ sha256_S(x, 18) ^ sha256_R(x, 3)) }

function sha256_Gamma1256(x) { return (sha256_S(x, 17) ^ sha256_S(x, 19) ^ sha256_R(x, 10)) }

function sha256_Sigma0512(x) { return (sha256_S(x, 28) ^ sha256_S(x, 34) ^ sha256_S(x, 39)) }

function sha256_Sigma1512(x) { return (sha256_S(x, 14) ^ sha256_S(x, 18) ^ sha256_S(x, 41)) }

function sha256_Gamma0512(x) { return (sha256_S(x, 1) ^ sha256_S(x, 8) ^ sha256_R(x, 7)) }

function sha256_Gamma1512(x) { return (sha256_S(x, 19) ^ sha256_S(x, 61) ^ sha256_R(x, 6)) }
var sha256_K = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998);

function binb_sha256(m, l) {
    var HASH = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
    var W = new Array(64);
    var a, b, c, d, e, f, g, h;
    var i, j, T1, T2;
    m[l >> 5] |= 0x80 << (24 - l % 32);
    m[((l + 64 >> 9) << 4) + 15] = l;
    for (i = 0; i < m.length; i += 16) {
        a = HASH[0];
        b = HASH[1];
        c = HASH[2];
        d = HASH[3];
        e = HASH[4];
        f = HASH[5];
        g = HASH[6];
        h = HASH[7];
        for (j = 0; j < 64; j++) {
            if (j < 16) W[j] = m[j + i];
            else W[j] = safe_add(safe_add(safe_add(sha256_Gamma1256(W[j - 2]), W[j - 7]), sha256_Gamma0256(W[j - 15])), W[j - 16]);
            T1 = safe_add(safe_add(safe_add(safe_add(h, sha256_Sigma1256(e)), sha256_Ch(e, f, g)), sha256_K[j]), W[j]);
            T2 = safe_add(sha256_Sigma0256(a), sha256_Maj(a, b, c));
            h = g;
            g = f;
            f = e;
            e = safe_add(d, T1);
            d = c;
            c = b;
            b = a;
            a = safe_add(T1, T2)
        }
        HASH[0] = safe_add(a, HASH[0]);
        HASH[1] = safe_add(b, HASH[1]);
        HASH[2] = safe_add(c, HASH[2]);
        HASH[3] = safe_add(d, HASH[3]);
        HASH[4] = safe_add(e, HASH[4]);
        HASH[5] = safe_add(f, HASH[5]);
        HASH[6] = safe_add(g, HASH[6]);
        HASH[7] = safe_add(h, HASH[7])
    }
    return HASH
}

function safe_add(x, y) { var lsw = (x & 0xFFFF) + (y & 0xFFFF); var msw = (x >> 16) + (y >> 16) + (lsw >> 16); return (msw << 16) | (lsw & 0xFFFF) }
/*********************************** SHA256 *************************************/