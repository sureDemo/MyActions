const zxCommon = require('./zx_common.js');
let zxObject = new zxCommon.ZxObject('签到领现金');
const $ = zxObject.$;

const { devNull } = require('os');

let jdNotify = true; //是否关闭通知，false打开通知推送，true关闭通知推送
//IOS等用户直接用NobyDa的jd cookie
let message;
let helpAuthor = false;
const randomCount = $.isNode() ? 20 : 5;
let t = +new Date()
let cash_exchange = false; //是否消耗2元红包兑换200京豆，默认否
const inviteCodes = [
    `IhozbOWyb_Qm8Q@eU9YG5nYBrt9tSaJiQV2@eU9Yar_gYfogozzUyCAT1A@9ba3uU8nZPwv9Q@e15mMrvoI6JntD-L@eU9YaejhMPxzozuDzXNBgA`
]

const JD_API_HOST = 'https://api.m.jd.com/client.action';
let allMessage = '';
!(async() => {
    if (!$.cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
        return;
    }
    
    await $.dowork(async function() {   
        message = '';
        console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
        if (!$.isLogin) {
            $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });

            if ($.isNode()) {
                await $.notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
            }
            return
        }
        await jdCash()
    })

    if (allMessage) {
        if ($.isNode() && (process.env.CASH_NOTIFY_CONTROL ? process.env.CASH_NOTIFY_CONTROL === 'false' : !!1)) 
            await $.notify.sendNotify($.name, allMessage);
        $.msg($.name, '', allMessage);
    }
})()
.catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })
async function jdCash() {
    await index()
    await shareCodesFormat()
    await helpFriends()
    await getReward()
    await getReward('2');
    $.exchangeBeanNum = 0;
    cash_exchange = $.isNode() ? (process.env.CASH_EXCHANGE ? process.env.CASH_EXCHANGE : `${cash_exchange}`) : ($.getdata('cash_exchange') ? $.getdata('cash_exchange') : `${cash_exchange}`);
    if (cash_exchange === 'true') {
        if (Number($.signMoney) >= 2) {
            console.log(`\n\n开始花费2元红包兑换200京豆，一周可换五次`)
            for (let item of["-1", "0", "1", "2", "3"]) {
                $.canLoop = true;
                if ($.canLoop) {
                    for (let i = 0; i < 5; i++) {
                        await exchange2(item); //兑换200京豆(2元红包换200京豆，一周5次。)
                    }
                    if (!$.canLoop) {
                        console.log(`已找到符合的兑换条件，跳出\n`);
                        break
                    }
                }
            }
            if ($.exchangeBeanNum) {
                message += `兑换京豆成功，获得${$.exchangeBeanNum * 100}京豆\n`;
            }
        } else {
            console.log(`\n\n现金不够2元，不进行兑换200京豆，`)
        }
    }
    await index(true)
        // await showMsg()
}

function index(info = false) {
    return new Promise((resolve) => {
        $.get(taskUrl("cash_mob_home", ), async(err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if ($.safeGet(data)) {
                        data = JSON.parse(data);
                        if (data.code === 0 && data.data.result) {
                            if (info) {
                                if (message) {
                                    message += `当前现金：${data.data.result.signMoney}元`;
                                    allMessage += `京东账号${$.index}${$.nickName}\n${message}${$.index !== $.cookiesArr.length ? '\n\n' : ''}`;
                                }
                                console.log(`\n\n当前现金：${data.data.result.signMoney}元`);
                                return
                            }
                            $.signMoney = data.data.result.signMoney;
                            //console.log(`您的助力码为${data.data.result.inviteCode}`)
                            console.log(`\n【京东账号${$.index}（${$.UserName}）的${$.name}好友互助码】${data.data.result.inviteCode}\n`);
                            let helpInfo = {
                                'inviteCode': data.data.result.inviteCode,
                                'shareDate': data.data.result.shareDate
                            }
                            $.shareDate = data.data.result.shareDate;
                            // $.log(`shareDate: ${$.shareDate}`)
                            // console.log(helpInfo)
                            for (let task of data.data.result.taskInfos) {
                                if (task.type === 4) {
                                    for (let i = task.doTimes; i < task.times; ++i) {
                                        console.log(`去做${task.name}任务 ${i+1}/${task.times}`)
                                        await doTask(task.type, task.jump.params.skuId)
                                        await $.wait(5000)
                                    }
                                } else if (task.type === 2) {
                                    for (let i = task.doTimes; i < task.times; ++i) {
                                        console.log(`去做${task.name}任务 ${i+1}/${task.times}`)
                                        await doTask(task.type, task.jump.params.shopId)
                                        await $.wait(5000)
                                    }
                                } else if (task.type === 16 || task.type === 3 || task.type === 5 || task.type === 17 || task.type === 21) {
                                    for (let i = task.doTimes; i < task.times; ++i) {
                                        console.log(`去做${task.name}任务 ${i+1}/${task.times}`)
                                        await doTask(task.type, task.jump.params.url)
                                        await $.wait(5000)
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}
async function helpFriends() {
    $.canHelp = true
    for (let code of $.newShareCodes) {
        console.log(`去帮助好友${code['inviteCode']}`)
        await helpFriend(code)
        if (!$.canHelp) break
        await $.wait(1000)
    }
    // if (helpAuthor && $.authorCode) {
    //   for(let helpInfo of $.authorCode){
    //     console.log(`去帮助好友${helpInfo['inviteCode']}`)
    //     await helpFriend(helpInfo)
    //     if(!$.canHelp) break
    //     await $.wait(1000)
    //   }
    // }
}

function helpFriend(helpInfo) {
    return new Promise((resolve) => {
        $.get(taskUrl("cash_mob_assist", {...helpInfo, "source": 1 }), (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if ($.safeGet(data)) {
                        data = JSON.parse(data);
                        if (data.code === 0 && data.data.bizCode === 0) {
                            console.log(`助力成功，获得${data.data.result.cashStr}`)
                                // console.log(data.data.result.taskInfos)
                        } else if (data.data.bizCode === 207) {
                            console.log(data.data.bizMsg)
                            $.canHelp = false
                        } else {
                            console.log(data.data.bizMsg)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}

function doTask(type, taskInfo) {
    return new Promise((resolve) => {
        $.get(taskUrl("cash_doTask", { "type": type, "taskInfo": taskInfo }), (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if ($.safeGet(data)) {
                        data = JSON.parse(data);
                        if (data.code === 0) {
                            console.log(`任务完成成功`)
                                // console.log(data.data.result.taskInfos)
                        } else {
                            console.log(data)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}

function getReward(source = 1) {
    return new Promise((resolve) => {
        $.get(taskUrl("cash_mob_reward", { "source": Number(source), "rewardNode": "" }), (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if ($.safeGet(data)) {
                        data = JSON.parse(data);
                        if (data.code === 0 && data.data.bizCode === 0) {
                            console.log(`领奖成功，${data.data.result.shareRewardTip}【${data.data.result.shareRewardAmount}】`)
                            message += `领奖成功，${data.data.result.shareRewardTip}【${data.data.result.shareRewardAmount}元】\n`;
                            // console.log(data.data.result.taskInfos)
                        } else {
                            // console.log(`领奖失败，${data.data.bizMsg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}

function exchange2(node) {
    let body = '';
    const data = { node, "configVersion": "1.0" }
    if (data['node'] === '-1') {
        body = `body=${encodeURIComponent(JSON.stringify(data))}&uuid=8888888&client=apple&clientVersion=9.4.1&st=1619595890027&sign=92a8abba7b6846f274ac9803aa5a283d&sv=102`;
    } else if (data['node'] === '0') {
        body = `body=${encodeURIComponent(JSON.stringify(data))}&uuid=8888888&client=apple&clientVersion=9.4.1&st=1619597882090&sign=e00bd6c3af2a53820825b94f7a648551&sv=100`;
    } else if (data['node'] === '1') {
        body = `body=${encodeURIComponent(JSON.stringify(data))}&uuid=8888888&client=apple&clientVersion=9.4.1&st=1619595655007&sign=2e72bbd21e5f5775fe920eac129f89a2&sv=111`;
    } else if (data['node'] === '2') {
        body = `body=${encodeURIComponent(JSON.stringify(data))}&uuid=8888888&client=apple&clientVersion=9.4.1&st=1619597924095&sign=c04c70370ff68d71890de08a18cac981&sv=112`;
    } else if (data['node'] === '3') {
        body = `body=${encodeURIComponent(JSON.stringify(data))}&uuid=8888888&client=apple&clientVersion=9.4.1&st=1619597953001&sign=4c36b3d816d4f0646b5c34e7596502f8&sv=122`;
    }
    return new Promise((resolve) => {
        const options = {
            url: `${JD_API_HOST}?functionId=cash_exchangeBeans&t=${Date.now()}&${body}`,
            body: `body=${escape(JSON.stringify(data))}`,
            headers: {
                'Cookie': $.cookie,
                'Host': 'api.m.jd.com',
                'Connection': 'keep-alive',
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0"),
                'Accept-Language': 'zh-cn',
                'Accept-Encoding': 'gzip, deflate, br',
            }
        }
        $.post(options, async(err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if ($.safeGet(data)) {
                        data = JSON.parse(data);
                        if (data['code'] === 0) {
                            if (data.data.bizCode === 0) {
                                console.log(`花费${data.data.result.needMoney}元红包兑换成功！获得${data.data.result.beanName}\n`)
                                $.exchangeBeanNum += parseInt(data.data.result.needMoney);
                                $.canLoop = false;
                            } else {
                                console.log('花费2元红包兑换200京豆失败：' + data.data.bizMsg)
                                if (data.data.bizCode === 504) $.canLoop = true;
                                if (data.data.bizCode === 120) $.canLoop = false;
                            }
                        } else {
                            console.log(`兑换京豆失败：${JSON.stringify(data)}\n`);
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}

function showMsg() {
    return new Promise(resolve => {
        if (!jdNotify) {
            $.msg($.name, '', `${message}`);
        } else {
            $.log(`京东账号${$.index}${$.nickName}\n${message}`);
        }
        resolve()
    })
}

//格式化助力码
function shareCodesFormat() {
    return new Promise(async resolve => {
        // console.log(`第${$.index}个京东账号的助力码:::${$.shareCodesArr[$.index - 1]}`)
        $.newShareCodes = [];
        if ($.shareCodesArr[$.index - 1]) {
            $.newShareCodes = $.shareCodesArr[$.index - 1].split('@');
        } else {
            console.log(`由于您第${$.index}个京东账号未提供shareCode,将采纳本脚本自带的助力码\n`)
            const tempIndex = $.index > inviteCodes.length ? (inviteCodes.length - 1) : ($.index - 1);
            $.newShareCodes = inviteCodes[tempIndex].split('@');
            if ($.authorCode) {
                let authorCode = deepCopy($.authorCode)
                $.newShareCodes = [...(authorCode.map((item, index) => authorCode[index] = item['inviteCode'])), ...$.newShareCodes];
            }
        }
        //const readShareCodeRes = await readShareCode();
        //去掉作者的助力码
        const readShareCodeRes = null;
        if (readShareCodeRes && readShareCodeRes.code === 200) {
            $.newShareCodes = [...new Set([...$.newShareCodes, ...(readShareCodeRes.data || [])])];
        }
        $.newShareCodes.map((item, index) => $.newShareCodes[index] = { "inviteCode": item, "shareDate": $.shareDate })
        console.log(`第${$.index}个京东账号将要助力的好友${JSON.stringify($.newShareCodes)}`)
        resolve();
    })
}

function requireConfig() {
    return new Promise(resolve => {
        console.log(`开始获取${$.name}配置文件\n`);
        let shareCodes = [];
        if ($.isNode()) {
            if (process.env.JD_CASH_SHARECODES) {
                if (process.env.JD_CASH_SHARECODES.indexOf('\n') > -1) {
                    shareCodes = process.env.JD_CASH_SHARECODES.split('\n');
                } else {
                    shareCodes = process.env.JD_CASH_SHARECODES.split('&');
                }
            }
        }
        console.log(`共${$.cookiesArr.length}个京东账号\n`);
        $.shareCodesArr = [];
        if ($.isNode()) {
            Object.keys(shareCodes).forEach((item) => {
                if (shareCodes[item]) {
                    $.shareCodesArr.push(shareCodes[item])
                }
            })
        }
        console.log(`您提供了${$.shareCodesArr.length}个账号的${$.name}助力码\n`);
        resolve()
    })
}

function deepCopy(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                //判断ojb子元素是否为对象，如果是，递归复制
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepCopy(obj[key]);
                } else {
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

function taskUrl(functionId, body = {}) {
    return {
        url: `${JD_API_HOST}?functionId=${functionId}&body=${escape(JSON.stringify(body))}&appid=CashRewardMiniH5Env&appid=9.1.0`,
        headers: {
            'Cookie': $.cookie,
            'Host': 'api.m.jd.com',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Referer': 'http://wq.jd.com/wxapp/pages/hd-interaction/index/index',
            'User-Agent': $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
            'Accept-Language': 'zh-cn',
            'Accept-Encoding': 'gzip, deflate, br',
        }
    }
}
