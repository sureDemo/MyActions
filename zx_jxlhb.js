/*
京喜领88元红包
活动入口：京喜app-》我的-》京喜领88元红包
助力逻辑：先自己京东账号相互助力，如有剩余助力机会，则助力作者
温馨提示：如提示助力火爆，可尝试寻找京东客服
脚本兼容: Quantumult X, Surge, Loon, JSBox, Node.js
==============Quantumult X==============
[task_local]
#京喜领88元红包
4 2,10 * * * https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_jxlhb.js, tag=京喜领88元红包, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

==============Loon==============
[Script]
cron "4 2,10 * * *" script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_jxlhb.js,tag=京喜领88元红包

================Surge===============
京喜领88元红包 = type=cron,cronexp="4 2,10 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_jxlhb.js

===============小火箭==========
京喜领88元红包 = type=cron,script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_jxlhb.js, cronexpr="4 2,10 * * *", timeout=3600, enable=true
 */
const $ = new Env('京喜领88元红包');
const notify = $.isNode() ? require('./sendNotify') : {};
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : {};
let cookiesArr = [],
    cookie = '';
let UA, UAInfo = {},
    codeInfo = {}
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    });
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
    cookiesArr = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...$.toObj($.getdata("CookiesJD") || "[]").map((item) => item.cookie)].filter((item) => !!item);
}
$.packetIdArr = [];
$.activeId = '525597';
const BASE_URL = 'https://m.jingxi.com/cubeactive/steprewardv3';
const JD_API_HOST = 'https://api.m.jd.com/client.action';
!(async() => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
        return;
    }
    console.log('京喜领88元红包\n' +
        '活动入口：京喜app-》我的-》京喜领88元红包\n' +
        '助力逻辑：先自己京东账号相互助力，如有剩余助力机会，则助力作者\n' +
        '温馨提示：如提示助力火爆，可尝试寻找京东客服')
    let res = []
        //   res = await getAuthorShareCode('https://raw.githubusercontent.com/Aaron-lv/updateTeam/master/shareCodes/jxhb.json')
        //   if (!res) {
        //   res = await getAuthorShareCode('https://code.aliyun.com/wudongdefeng/updateteam/raw/master/shareCodes/jxhb.json')
        //     await $.wait(1000)
        //     $.http.get({url: 'https://code.aliyun.com/wudongdefeng/updateteam/raw/master/shareCodes/jxhb.json'}).then((resp) => {}).catch((e) => $.log('刷新CDN异常', e));
        //   }
        //     res = await getAuthorShareCode('https://code.aliyun.com/wudongdefeng/updateteam/raw/master/shareCodes/jxhb.json')
    $.authorMyShareIds = [...((res && res.codes) || [])];
    //开启红包,获取互助码
    for (let i = 0; i < cookiesArr.length; i++) {
        cookie = cookiesArr[i];
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
        $.index = i + 1;
        $.isLogin = true
        $.nickName = ''
        await TotalBean();
        console.log(`\n*****开始【京东账号${$.index}】${$.nickName || $.UserName}*****\n`);
        if (!$.isLogin) {
            $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });

            if ($.isNode()) {
                await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
            }
            continue
        }
        UA = `jdpingou;iPhone;4.13.0;14.4.2;${randomString(40)};network/wifi;model/iPhone10,2;appBuild/100609;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/${Math.random * 98 + 1};pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`
        await main();
        UAInfo[$.UserName] = UA
        await makeShareCodes($.shareCode);
    }
    //互助
    console.log(`\n\n自己京东账号助力码：\n${JSON.stringify($.packetIdArr)}\n\n`);
    console.log(`\n开始助力：助力逻辑 先自己京东相互助力，如有剩余助力机会，则助力作者\n`)
    for (let i = 0; i < cookiesArr.length; i++) {
        cookie = cookiesArr[i];
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.canHelp = true;
        UA = UAInfo[$.UserName]
        for (let j = 0; j < $.packetIdArr.length && $.canHelp; j++) {
            console.log(`【${$.UserName}】去助力【${$.packetIdArr[j].userName}}】邀请码：${$.packetIdArr[j].strUserPin}`);
            if ($.UserName === $.packetIdArr[j].userName) {
                console.log(`助力失败：不能助力自己`)
                continue
            }
            $.max = false;
            await enrollFriend($.packetIdArr[j].strUserPin);
            await $.wait(5000);
            if ($.max) {
                $.packetIdArr.splice(j, 1)
                j--
                continue
            }
        }

        // if ($.canHelp && ($.authorMyShareIds && $.authorMyShareIds.length)) {
        //     console.log(`\n【${$.UserName}】有剩余助力机会，开始助力作者\n`)
        //     for (let j = 0; j < $.authorMyShareIds.length && $.canHelp; j++) {
        //         console.log(`【${$.UserName}】去助力作者的邀请码：${$.authorMyShareIds[j]}`);
        //         $.max = false;
        //         await enrollFriend($.authorMyShareIds[j]);
        //         await $.wait(5000);
        //         if ($.max) {
        //             $.authorMyShareIds.splice(j, 1)
        //             j--
        //             continue
        //         }
        //     }
        // }
    }
    //拆红包
    for (let i = 0; i < cookiesArr.length; i++) {
        cookie = cookiesArr[i];
        $.canOpenGrade = true;
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
        UA = UAInfo[$.UserName]
        for (let grade of $.grades) {
            if (!codeInfo[$.UserName]) continue;
            console.log(`\n【${$.UserName}】去拆第${grade}个红包`);
            await openRedPack(codeInfo[$.UserName], grade);
            if (!$.canOpenGrade) break
            await $.wait(15000);
        }
    }
})()
.catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })
async function main() {
    await joinActive();
    await $.wait(2000)
    await getUserInfo()
}

//
async function makeShareCodes(code) {
    let bean = await getBeanShareCode()
    let farm = await getFarmShareCode()
    let pin = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1]);
    pin = md5(pin)
    try {
        let url = `https://api.jdsharecode.xyz/api/autoInsert/hb88?sharecode=${code}&bean=${bean}&farm=${farm}&pin=${pin}`;
        await $.get({ url: url },
            (err, resp, data) => {
                if (err) {
                    console.log(`HW  自动提交失败`, err)
                } else {
                    data = JSON.parse(data);
                    if (data.code === 200) {
                        console.log(`HW  自动提交成功`)
                    } else {
                        console.log('提交失败！已提交farm的cookie才可提交cfd')
                    }
                }
            })
    } catch (e) {
        console.log('自动提交助力码出错')
    }
}

//东东农场
async function getBeanShareCode() {
    let bodystr = { "version": 4 }
    let body = `${escape(JSON.stringify(bodystr))}`;
    let param = `appid=wh5`
    let farmInfo = await jdrequest('initForFarm', body, param);
    let sharecode = ""
    if (farmInfo && farmInfo.farmUserPro) {
        sharecode = farmInfo.farmUserPro.shareCode
        console.log(`【东东农场】好友互助码： ${sharecode}`);
    }
    return sharecode;
}

//种豆得豆
async function getFarmShareCode() {
    //种豆得豆
    let bodystr = { "monitor_source": "plant_app_plant_index" }
    let body = `${escape(JSON.stringify(bodystr))}`;
    let param = `appid=ld`
    let plantBeanIndexResult = await jdrequest('plantBeanIndex', body, param);
    let myPlantUuid = ""
    if (plantBeanIndexResult && plantBeanIndexResult.code === '0' && plantBeanIndexResult.data) {
        const shareUrl = plantBeanIndexResult.data.jwordShareInfo.shareUrl
        myPlantUuid = getParam(shareUrl, 'plantUuid')
        if (myPlantUuid) {
            console.log(`【种豆得豆】好友互助码： ${myPlantUuid}`);

        } else {
            console.log(`好友互助码出错`);
        }
    }
    return myPlantUuid;

}

async function jdrequest(function_id, body = {}, param = '') {
    return new Promise(async resolve => {
        await $.wait(2000);
        let option = jdtaskUrl(function_id, body, param);
        $.post(option, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`function_id:${function_id}请求失败 ${err}`)
                    $.logErr(err);
                } else {
                    data = JSON.parse(data);
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve(data);
            }
        })
    })
}

function getParam(url, name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
    const r = url.match(reg)
    if (r != null) return unescape(r[2]);
    return null;
}

function jdtaskUrl(function_id, body, param) {
    return {
        url: `https://api.m.jd.com/client.action?functionId=${function_id}`,
        body: `body=${body}&${param}&build=89743&clientVersion=10.1.2`,
        headers: {
            "Cookie": cookie,
            "Host": "api.m.jd.com",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "User-Agent": UA,
            "Accept-Language": "zh-Hans-CN;q=1,en-CN;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        timeout: 10000,
    }
}


//参与活动
function joinActive() {
    return new Promise(resolve => {
        const body = ""
        const options = taskurl('JoinActive', body, 'activeId,channel,phoneid,publishFlag,stepreward_jstoken,timestamp');
        $.get(options, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`\n${$.name}:  API查询请求失败 ‼️‼️`)
                    $.logErr(err);
                } else {
                    // console.log('开启活动', data)
                    data = JSON.parse(data)
                    if (data.iRet === 0) {
                        console.log(`活动开启成功,助力邀请码为:${data.Data.strUserPin}\n`);
                    } else {
                        console.log(`活动开启失败：${data.sErrMsg}\n`);
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        })
    })
}
//获取助力码
function getUserInfo() {
    return new Promise(resolve => {
        const body = `joinDate=${$.time('yyyyMMdd')}`;
        const options = taskurl('GetUserInfo', body, 'activeId,channel,joinDate,phoneid,publishFlag,timestamp');
        $.get(options, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`\n${$.name}:  API查询请求失败 ‼️‼️`)
                    $.logErr(err);
                } else {
                    // console.log('获取助力码', data)
                    data = JSON.parse(data)
                    if (data.iRet === 0) {
                        $.grades = []
                        $.helpNum = ''
                        let grades = data.Data.gradeConfig
                        for (let key of Object.keys(grades)) {
                            let vo = grades[key]
                            $.grades.push(vo.dwGrade)
                            $.helpNum = vo.dwHelpTimes
                        }
                        if (data.Data.dwHelpedTimes === $.helpNum) {
                            console.log(`${$.grades[$.grades.length - 1]}个阶梯红包已全部拆完\n`)
                        } else {
                            console.log(`获取助力码成功：${data.Data.strUserPin}\n`);
                            $.shareCode = data.Data.strUserPin;
                            if (data.Data.strUserPin) {
                                $.packetIdArr.push({
                                    strUserPin: data.Data.strUserPin,
                                    userName: $.UserName
                                })
                            }
                        }
                        if (data.Data.strUserPin) {
                            codeInfo[$.UserName] = data.Data.strUserPin
                        }
                    } else {
                        console.log(`获取助力码失败：${data.sErrMsg}\n`);
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve(data);
            }
        })
    })
}
//助力好友
function enrollFriend(strPin) {
    return new Promise(resolve => {
        // console.log('\nstrPin ' + strPin);
        const body = `strPin=${strPin}&joinDate=${$.time('yyyyMMdd')}`
        const options = taskurl('EnrollFriend', body, 'activeId,channel,joinDate,phoneid,publishFlag,strPin,timestamp');
        $.get(options, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`\n${$.name}:  API查询请求失败 ‼️‼️`)
                    $.log(JSON.stringify(err));
                } else {
                    // console.log('助力结果', data)
                    data = JSON.parse(data)
                    if (data.iRet === 0) {
                        //{"Data":{"prizeInfo":[]},"iRet":0,"sErrMsg":"成功"}
                        console.log(`助力成功🎉:${data.sErrMsg}\n`);
                        // if (data.Data.strUserPin) $.packetIdArr.push(data.Data.strUserPin);
                    } else {
                        if (data.iRet === 2000) $.canHelp = false; //未登录
                        if (data.iRet === 2015) $.canHelp = false; //助力已达上限
                        if (data.iRet === 2016) {
                            $.canHelp = false; //助力火爆
                            console.log(`温馨提示：如提示助力火爆，可尝试寻找京东客服`);
                        }
                        if (data.iRet === 2013) $.max = true;
                        console.log(`助力失败：${data.sErrMsg}\n`);
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        })
    })
}

function openRedPack(strPin, grade) {
    return new Promise(resolve => {
        const body = `strPin=${strPin}&grade=${grade}`
        const options = taskurl('DoGradeDraw', body, 'activeId,channel,grade,phoneid,publishFlag,stepreward_jstoken,strPin,timestamp');
        $.get(options, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`\n${$.name}:  API查询请求失败 ‼️‼️`)
                    $.logErr(err);
                } else {
                    // console.log(`拆红包结果：${data}`);
                    data = JSON.parse(data)
                    if (data.iRet === 0) {
                        console.log(`拆红包成功:${data.sErrMsg}\n`);
                    } else {
                        if (data.iRet === 2017) $.canOpenGrade = false;
                        console.log(`拆红包失败:${data.sErrMsg}\n`);
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        })
    })
}

function getAuthorShareCode(url) {
    return new Promise(resolve => {
        const options = {
            url: `${url}?${new Date()}`,
            "timeout": 10000,
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
            }
        };
        if ($.isNode() && process.env.TG_PROXY_HOST && process.env.TG_PROXY_PORT) {
            const tunnel = require("tunnel");
            const agent = {
                https: tunnel.httpsOverHttp({
                    proxy: {
                        host: process.env.TG_PROXY_HOST,
                        port: process.env.TG_PROXY_PORT * 1
                    }
                })
            }
            Object.assign(options, { agent })
        }
        $.get(options, async(err, resp, data) => {
            try {
                if (err) {} else {
                    if (data) data = JSON.parse(data)
                }
            } catch (e) {
                // $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}

function taskurl(function_path, body = '', stk) {
    let url = `${BASE_URL}/${function_path}?activeId=${$.activeId}&publishFlag=1&channel=7&${body}&sceneval=2&g_login_type=1&timestamp=${Date.now()}&_=${Date.now() + 2}&_ste=1`
        // const deviceId = UA.split(';') && UA.split(';')[4] || ''
        // url += `&phoneid=${deviceId}`
    url += `&stepreward_jstoken=${
    Math.random().toString(36).slice(2, 10) +
    Math.random().toString(36).slice(2, 10) +
    Math.random().toString(36).slice(2, 10) +
    Math.random().toString(36).slice(2, 10)
  }`
    if (stk) {
        url += '&_stk=' + encodeURIComponent(stk)
    }
    return {
        url: url,
        headers: {
            'Host': 'm.jingxi.com',
            'Cookie': cookie,
            'Accept': "*/*",
            'Accept-Encoding': 'gzip, deflate, br',
            'User-Agent': UA,
            'Accept-Language': 'zh-cn',
            'Referer': `https://act.jingxi.com/cube/front/activePublish/step_reward/${$.activeId}.html`
        }
    }
}

function randomString(e) {
    e = e || 32;
    let t = "0123456789abcdef",
        a = t.length,
        n = "";
    for (let i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n
}

function TotalBean() {
    return new Promise(async resolve => {
        const options = {
            url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
            headers: {
                Host: "me-api.jd.com",
                Accept: "*/*",
                Connection: "keep-alive",
                Cookie: cookie,
                "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
                "Accept-Language": "zh-cn",
                "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
                "Accept-Encoding": "gzip, deflate, br"
            }
        }
        $.get(options, (err, resp, data) => {
            try {
                if (err) {
                    $.logErr(err)
                } else {
                    if (data) {
                        data = JSON.parse(data);
                        if (data['retcode'] === "1001") {
                            $.isLogin = false; //cookie过期
                            return;
                        }
                        if (data['retcode'] === "0" && data.data && data.data.hasOwnProperty("userInfo")) {
                            $.nickName = data.data.userInfo.baseInfo.nickname;
                        }
                    } else {
                        console.log('京东服务器返回空数据');
                    }
                }
            } catch (e) {
                $.logErr(e)
            } finally {
                resolve();
            }
        })
    })
}
// 来自 @chavyleung 大佬
// https://raw.githubusercontent.com/chavyleung/scripts/master/Env.js
function Env(name, opts) {
    class Http {
        constructor(env) {
            this.env = env
        }

        send(opts, method = 'GET') {
            opts = typeof opts === 'string' ? {
                url: opts
            } : opts
            let sender = this.get
            if (method === 'POST') {
                sender = this.post
            }
            return new Promise((resolve, reject) => {
                sender.call(this, opts, (err, resp, body) => {
                    if (err) reject(err)
                    else resolve(resp)
                })
            })
        }

        get(opts) {
            return this.send.call(this.env, opts)
        }

        post(opts) {
            return this.send.call(this.env, opts, 'POST')
        }
    }

    return new(class {
        constructor(name, opts) {
            this.name = name
            this.http = new Http(this)
            this.data = null
            this.dataFile = 'box.dat'
            this.logs = []
            this.isMute = false
            this.isNeedRewrite = false
            this.logSeparator = '\n'
            this.startTime = new Date().getTime()
            Object.assign(this, opts)
            this.log('', `🔔${this.name}, 开始!`)
        }

        isNode() {
            return 'undefined' !== typeof module && !!module.exports
        }

        isQuanX() {
            return 'undefined' !== typeof $task
        }

        isSurge() {
            return 'undefined' !== typeof $httpClient && 'undefined' === typeof $loon
        }

        isLoon() {
            return 'undefined' !== typeof $loon
        }

        toObj(str, defaultValue = null) {
            try {
                return JSON.parse(str)
            } catch {
                return defaultValue
            }
        }

        toStr(obj, defaultValue = null) {
            try {
                return JSON.stringify(obj)
            } catch {
                return defaultValue
            }
        }

        getjson(key, defaultValue) {
            let json = defaultValue
            const val = this.getdata(key)
            if (val) {
                try {
                    json = JSON.parse(this.getdata(key))
                } catch {}
            }
            return json
        }

        setjson(val, key) {
            try {
                return this.setdata(JSON.stringify(val), key)
            } catch {
                return false
            }
        }

        getScript(url) {
            return new Promise((resolve) => {
                this.get({
                    url
                }, (err, resp, body) => resolve(body))
            })
        }

        runScript(script, runOpts) {
            return new Promise((resolve) => {
                let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
                httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
                let httpapi_timeout = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
                httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
                httpapi_timeout = runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
                const [key, addr] = httpapi.split('@')
                const opts = {
                    url: `http://${addr}/v1/scripting/evaluate`,
                    body: {
                        script_text: script,
                        mock_type: 'cron',
                        timeout: httpapi_timeout
                    },
                    headers: {
                        'X-Key': key,
                        'Accept': '*/*'
                    }
                }
                this.post(opts, (err, resp, body) => resolve(body))
            }).catch((e) => this.logErr(e))
        }

        loaddata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                if (isCurDirDataFile || isRootDirDataFile) {
                    const datPath = isCurDirDataFile ? curDirDataFilePath : rootDirDataFilePath
                    try {
                        return JSON.parse(this.fs.readFileSync(datPath))
                    } catch (e) {
                        return {}
                    }
                } else return {}
            } else return {}
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                const jsondata = JSON.stringify(this.data)
                if (isCurDirDataFile) {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                } else if (isRootDirDataFile) {
                    this.fs.writeFileSync(rootDirDataFilePath, jsondata)
                } else {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                }
            }
        }

        lodash_get(source, path, defaultValue = undefined) {
            const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
            let result = source
            for (const p of paths) {
                result = Object(result)[p]
                if (result === undefined) {
                    return defaultValue
                }
            }
            return result
        }

        lodash_set(obj, path, value) {
            if (Object(obj) !== obj) return obj
            if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || []
            path
                .slice(0, -1)
                .reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {})), obj)[
                    path[path.length - 1]
                ] = value
            return obj
        }

        getdata(key) {
            let val = this.getval(key)
                // 如果以 @
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
                const objval = objkey ? this.getval(objkey) : ''
                if (objval) {
                    try {
                        const objedval = JSON.parse(objval)
                        val = objedval ? this.lodash_get(objedval, paths, '') : val
                    } catch (e) {
                        val = ''
                    }
                }
            }
            return val
        }

        setdata(val, key) {
            let issuc = false
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
                const objdat = this.getval(objkey)
                const objval = objkey ? (objdat === 'null' ? null : objdat || '{}') : '{}'
                try {
                    const objedval = JSON.parse(objval)
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                } catch (e) {
                    const objedval = {}
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                }
            } else {
                issuc = this.setval(val, key)
            }
            return issuc
        }

        getval(key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.read(key)
            } else if (this.isQuanX()) {
                return $prefs.valueForKey(key)
            } else if (this.isNode()) {
                this.data = this.loaddata()
                return this.data[key]
            } else {
                return (this.data && this.data[key]) || null
            }
        }

        setval(val, key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.write(val, key)
            } else if (this.isQuanX()) {
                return $prefs.setValueForKey(val, key)
            } else if (this.isNode()) {
                this.data = this.loaddata()
                this.data[key] = val
                this.writedata()
                return true
            } else {
                return (this.data && this.data[key]) || null
            }
        }

        initGotEnv(opts) {
            this.got = this.got ? this.got : require('got')
            this.cktough = this.cktough ? this.cktough : require('tough-cookie')
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
            if (opts) {
                opts.headers = opts.headers ? opts.headers : {}
                if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
                    opts.cookieJar = this.ckjar
                }
            }
        }

        get(opts, callback = () => {}) {
            if (opts.headers) {
                delete opts.headers['Content-Type']
                delete opts.headers['Content-Length']
            }
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {}
                    Object.assign(opts.headers, {
                        'X-Surge-Skip-Scripting': false
                    })
                }
                $httpClient.get(opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body
                        resp.statusCode = resp.status
                    }
                    callback(err, resp, body)
                })
            } else if (this.isQuanX()) {
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {}
                    Object.assign(opts.opts, {
                        hints: false
                    })
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => callback(err)
                )
            } else if (this.isNode()) {
                this.initGotEnv(opts)
                this.got(opts)
                    .on('redirect', (resp, nextOpts) => {
                        try {
                            if (resp.headers['set-cookie']) {
                                const ck = resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
                                if (ck) {
                                    this.ckjar.setCookieSync(ck, null)
                                }
                                nextOpts.cookieJar = this.ckjar
                            }
                        } catch (e) {
                            this.logErr(e)
                        }
                        // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
                    })
                    .then(
                        (resp) => {
                            const {
                                statusCode: status,
                                statusCode,
                                headers,
                                body
                            } = resp
                            callback(null, {
                                status,
                                statusCode,
                                headers,
                                body
                            }, body)
                        },
                        (err) => {
                            const {
                                message: error,
                                response: resp
                            } = err
                            callback(error, resp, resp && resp.body)
                        }
                    )
            }
        }

        post(opts, callback = () => {}) {
                // 如果指定了请求体, 但没指定`Content-Type`, 则自动生成
                if (opts.body && opts.headers && !opts.headers['Content-Type']) {
                    opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
                }
                if (opts.headers) delete opts.headers['Content-Length']
                if (this.isSurge() || this.isLoon()) {
                    if (this.isSurge() && this.isNeedRewrite) {
                        opts.headers = opts.headers || {}
                        Object.assign(opts.headers, {
                            'X-Surge-Skip-Scripting': false
                        })
                    }
                    $httpClient.post(opts, (err, resp, body) => {
                        if (!err && resp) {
                            resp.body = body
                            resp.statusCode = resp.status
                        }
                        callback(err, resp, body)
                    })
                } else if (this.isQuanX()) {
                    opts.method = 'POST'
                    if (this.isNeedRewrite) {
                        opts.opts = opts.opts || {}
                        Object.assign(opts.opts, {
                            hints: false
                        })
                    }
                    $task.fetch(opts).then(
                        (resp) => {
                            const {
                                statusCode: status,
                                statusCode,
                                headers,
                                body
                            } = resp
                            callback(null, {
                                status,
                                statusCode,
                                headers,
                                body
                            }, body)
                        },
                        (err) => callback(err)
                    )
                } else if (this.isNode()) {
                    this.initGotEnv(opts)
                    const {
                        url,
                        ..._opts
                    } = opts
                    this.got.post(url, _opts).then(
                        (resp) => {
                            const {
                                statusCode: status,
                                statusCode,
                                headers,
                                body
                            } = resp
                            callback(null, {
                                status,
                                statusCode,
                                headers,
                                body
                            }, body)
                        },
                        (err) => {
                            const {
                                message: error,
                                response: resp
                            } = err
                            callback(error, resp, resp && resp.body)
                        }
                    )
                }
            }
            /**
             *
             * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
             *    :$.time('yyyyMMddHHmmssS')
             *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
             *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
             * @param {*} fmt 格式化参数
             *
             */
        time(fmt) {
            let o = {
                'M+': new Date().getMonth() + 1,
                'd+': new Date().getDate(),
                'H+': new Date().getHours(),
                'm+': new Date().getMinutes(),
                's+': new Date().getSeconds(),
                'q+': Math.floor((new Date().getMonth() + 3) / 3),
                'S': new Date().getMilliseconds()
            }
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (new Date().getFullYear() + '').substr(4 - RegExp.$1.length))
            for (let k in o)
                if (new RegExp('(' + k + ')').test(fmt))
                    fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
            return fmt
        }

        /**
         * 系统通知
         *
         * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
         *
         * 示例:
         * $.msg(title, subt, desc, 'twitter://')
         * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         *
         * @param {*} title 标题
         * @param {*} subt 副标题
         * @param {*} desc 通知详情
         * @param {*} opts 通知参数
         *
         */
        msg(title = name, subt = '', desc = '', opts) {
            const toEnvOpts = (rawopts) => {
                if (!rawopts) return rawopts
                if (typeof rawopts === 'string') {
                    if (this.isLoon()) return rawopts
                    else if (this.isQuanX()) return {
                        'open-url': rawopts
                    }
                    else if (this.isSurge()) return {
                        url: rawopts
                    }
                    else return undefined
                } else if (typeof rawopts === 'object') {
                    if (this.isLoon()) {
                        let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
                        let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
                        return {
                            openUrl,
                            mediaUrl
                        }
                    } else if (this.isQuanX()) {
                        let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
                        let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
                        return {
                            'open-url': openUrl,
                            'media-url': mediaUrl
                        }
                    } else if (this.isSurge()) {
                        let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
                        return {
                            url: openUrl
                        }
                    }
                } else {
                    return undefined
                }
            }
            if (!this.isMute) {
                if (this.isSurge() || this.isLoon()) {
                    $notification.post(title, subt, desc, toEnvOpts(opts))
                } else if (this.isQuanX()) {
                    $notify(title, subt, desc, toEnvOpts(opts))
                }
            }
            if (!this.isMuteLog) {
                let logs = ['', '==============📣系统通知📣==============']
                logs.push(title)
                subt ? logs.push(subt) : ''
                desc ? logs.push(desc) : ''
                console.log(logs.join('\n'))
                this.logs = this.logs.concat(logs)
            }
        }

        log(...logs) {
            if (logs.length > 0) {
                this.logs = [...this.logs, ...logs]
            }
            console.log(logs.join(this.logSeparator))
        }

        logErr(err, msg) {
            const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon()
            if (!isPrintSack) {
                this.log('', `❗️${this.name}, 错误!`, err)
            } else {
                this.log('', `❗️${this.name}, 错误!`, err.stack)
            }
        }

        wait(time) {
            return new Promise((resolve) => setTimeout(resolve, time))
        }

        done(val = {}) {
            const endTime = new Date().getTime()
            const costTime = (endTime - this.startTime) / 1000
            this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
            this.log()
            if (this.isSurge() || this.isQuanX() || this.isLoon()) {
                $done(val)
            }
        }
    })(name, opts)
}

// md5
! function(n) {
    function t(n, t) { var r = (65535 & n) + (65535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r }

    function r(n, t) { return n << t | n >>> 32 - t }

    function e(n, e, o, u, c, f) { return t(r(t(t(e, n), t(u, f)), c), o) }

    function o(n, t, r, o, u, c, f) { return e(t & r | ~t & o, n, t, u, c, f) }

    function u(n, t, r, o, u, c, f) { return e(t & o | r & ~o, n, t, u, c, f) }

    function c(n, t, r, o, u, c, f) { return e(t ^ r ^ o, n, t, u, c, f) }

    function f(n, t, r, o, u, c, f) { return e(r ^ (t | ~o), n, t, u, c, f) }

    function i(n, r) {
        n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
        var e, i, a, d, h, l = 1732584193,
            g = -271733879,
            v = -1732584194,
            m = 271733878;
        for (e = 0; e < n.length; e += 16) { i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h) }
        return [l, g, v, m]
    }

    function a(n) {
        var t, r = "",
            e = 32 * n.length;
        for (t = 0; t < e; t += 8) { r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255) }
        return r
    }

    function d(n) { var t, r = []; for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) { r[t] = 0 } var e = 8 * n.length; for (t = 0; t < e; t += 8) { r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32 } return r }

    function h(n) { return a(i(d(n), 8 * n.length)) }

    function l(n, t) {
        var r, e, o = d(n),
            u = [],
            c = [];
        for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) { u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r] }
        return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640))
    }

    function g(n) { var t, r, e = ""; for (r = 0; r < n.length; r += 1) { t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t) } return e }

    function v(n) { return unescape(encodeURIComponent(n)) }

    function m(n) { return h(v(n)) }

    function p(n) { return g(m(n)) }

    function s(n, t) { return l(v(n), v(t)) }

    function C(n, t) { return g(s(n, t)) }

    function A(n, t, r) { return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n) }
    md5 = A
}(this);