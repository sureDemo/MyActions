const zxCommon = require('./zx_common.js');
let zxObject = new zxCommon.ZxObject('京东多合一签到');
const $ = zxObject.$;

const exec = require('child_process').execSync
const fs = require('fs')
const download = require('download');
let resultPath = "./result.txt";
let JD_DailyBonusPath = "./JD_DailyBonus.js";
let outPutUrl = './';
let NodeSet = 'CookieSet.json';
let allMessage = '';

!(async() => {
    if (!$.cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
        return;
    }
    process.env.JD_BEAN_SIGN_NOTIFY_SIMPLE = process.env.JD_BEAN_SIGN_NOTIFY_SIMPLE ? process.env.JD_BEAN_SIGN_NOTIFY_SIMPLE : 'true';
    await requireConfig();
    // 下载最新代码
    await downFile();
    if (!await fs.existsSync(JD_DailyBonusPath)) {
        console.log(`\nJD_DailyBonus.js 文件不存在，停止执行${$.name}\n`);
        await $.notify.sendNotify($.name, `本次执行${$.name}失败，JD_DailyBonus.js 文件下载异常，详情请查看日志`)
        return
    }
    const content = await fs.readFileSync(JD_DailyBonusPath, 'utf8')

    await $.dowork(async function() {
            console.log(`*****************开始京东账号${$.index} ${$.nickName || $.UserName}京豆签到*******************\n`);
            await changeFile(content);
            await execSign();
        })
        //await deleteFile(JD_DailyBonusPath);//删除下载的JD_DailyBonus.js文件
    if ($.isNode() && allMessage && process.env.JD_BEAN_SIGN_NOTIFY_SIMPLE === 'true') {
        $.msg($.name, '', allMessage);
        await $.notify.sendNotify($.name, allMessage)
    }

    //await deleteFile(JD_DailyBonusPath);//删除下载的JD_DailyBonus.js文件
    if ($.isNode() && allMessage && process.env.JD_BEAN_SIGN_NOTIFY_SIMPLE === 'true') {
        $.msg($.name, '', allMessage);
        await $.notify.sendNotify($.name, allMessage)
    }
})()
.catch((e) => $.logErr(e))
    .finally(() => $.done())
async function execSign() {
    console.log(`\n开始执行 ${$.name} 签到，请稍等...\n`);
    try {
        // if ($.notify.SCKEY || $.notify.BARK_PUSH || $.notify.DD_BOT_TOKEN || ($.notify.TG_BOT_TOKEN && $.notify.TG_USER_ID) || $.notify.IGOT_PUSH_KEY || $.notify.QQ_SKEY) {
        //   await exec(`${process.execPath} ${JD_DailyBonusPath} >> ${resultPath}`);
        //   const notifyContent = await fs.readFileSync(resultPath, "utf8");
        //   console.log(`👇👇👇👇👇👇👇👇👇👇👇LOG记录👇👇👇👇👇👇👇👇👇👇👇\n${notifyContent}\n👆👆👆👆👆👆👆👆👆LOG记录👆👆👆👆👆👆👆👆👆👆👆`);
        // } else {
        //   console.log('没有提供通知推送，则打印脚本执行日志')
        //   await exec(`${process.execPath} ${JD_DailyBonusPath}`, { stdio: "inherit" });
        // }
        await exec(`${process.execPath} ${JD_DailyBonusPath} >> ${resultPath}`);
        const notifyContent = await fs.readFileSync(resultPath, "utf8");
        console.error(`👇👇👇👇👇👇👇👇👇👇👇签到详情👇👇👇👇👇👇👇👇👇👇👇\n${notifyContent}\n👆👆👆👆👆👆👆👆👆签到详情👆👆👆👆👆👆👆👆👆👆👆`);
        // await exec("node JD_DailyBonus.js", { stdio: "inherit" });
        // console.log('执行完毕', new Date(new Date().getTime() + 8 * 3600000).toLocaleDateString())
        //发送通知
        let BarkContent = '';
        if (fs.existsSync(resultPath)) {
            const barkContentStart = notifyContent.indexOf('【签到概览】')
            const barkContentEnd = notifyContent.length;
            if (process.env.JD_BEAN_SIGN_STOP_NOTIFY !== 'true') {
                if (process.env.JD_BEAN_SIGN_NOTIFY_SIMPLE === 'true') {
                    if (barkContentStart > -1 && barkContentEnd > -1) {
                        BarkContent = notifyContent.substring(barkContentStart, barkContentEnd);
                    }
                    BarkContent = BarkContent.split('\n\n')[0];
                } else {
                    if (barkContentStart > -1 && barkContentEnd > -1) {
                        BarkContent = notifyContent.substring(barkContentStart, barkContentEnd);
                    }
                }
            }
        }
        //不管哪个时区,这里得到的都是北京时间的时间戳;
        const UTC8 = new Date().getTime() + new Date().getTimezoneOffset() * 60000 + 28800000;
        $.beanSignTime = new Date(UTC8).toLocaleString('zh', { hour12: false });
        //console.log(`脚本执行完毕时间：${$.beanSignTime}`)
        if (BarkContent) {
            allMessage += `【京东号 ${$.index}】: ${$.nickName || $.UserName}\n【签到时间】:  ${$.beanSignTime}\n${BarkContent}${$.index !== $.cookiesArr.length ? '\n\n' : ''}`;
            if (!process.env.JD_BEAN_SIGN_NOTIFY_SIMPLE || (process.env.JD_BEAN_SIGN_NOTIFY_SIMPLE && process.env.JD_BEAN_SIGN_NOTIFY_SIMPLE !== 'true')) {
                await $.notify.sendNotify(`${$.name} - 账号${$.index} - ${$.nickName || $.UserName}`, `【签到号 ${$.index}】: ${$.nickName || $.UserName}\n【签到时间】:  ${$.beanSignTime}\n${BarkContent}`);
            }
        }
        //运行完成后，删除下载的文件
        await deleteFile(resultPath); //删除result.txt
        console.log(`\n\n*****************${new Date(new Date().getTime()).toLocaleString('zh', { hour12: false })} 京东账号${$.index} ${$.nickName || $.UserName} ${$.name}完成*******************\n\n`);
    } catch (e) {
        console.log("京东签到脚本执行异常:" + e);
    }
}
async function downFile() {
    let url = '';
    await downloadUrl();
    if ($.body) {
        url = 'https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js';
    } else {
        url = 'https://cdn.jsdelivr.net/gh/NobyDa/Script@master/JD-DailyBonus/JD_DailyBonus.js';
    }
    try {
        const options = {}
        if (process.env.TG_PROXY_HOST && process.env.TG_PROXY_PORT) {
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
        await download(url, outPutUrl, options);
        console.log(`JD_DailyBonus.js文件下载完毕\n\n`);
    } catch (e) {
        console.log("JD_DailyBonus.js 文件下载异常:" + e);
    }
}

async function changeFile(content) {
    console.log(`开始替换变量`)
        //let newContent = content.replace(/var Key = '.*'/, `var Key = '${$.cookie}'`);
        // let newContent = content.replace(/var OtherKey = ``/, `var OtherKey = '[{"cookie": "${$.cookie}","jrBody": "reqData=xxx"}]'`);
    let newContent = "";
    if ($.index === 1) {
        newContent = content.replace(/var OtherKey = ``/, `var OtherKey = \`[{"cookie": "${$.cookie}","jrBody": "reqData=%7B%22videoId%22%3A%22311372930347370496%22%2C%22channelSource%22%3A%22JRAPP6.0%22%2C%22encryptData%22%3A%22%7B'data'%3A'%2BC07RK9V9gYLGBL2Tpt1l3OP4S1jEVeuNtdH9blgPykZPleOFFHzMeYaCrXNW1snWghNWl8DExYhCdasta2HLwLL97YYhwPLaJ2G7ji4JokjQ8t%2BrjTl6tOtFNr%2BtceaFPID4y8kjuOqOLL1hKku6Q%3D%3D'%2C'key'%3A'Pn9FUlFhX%2BHJif0thJ1F2rVhWJEv5zWHg3%2FzTLkcxx32bOcsicASm9kdeg3nAZry9TIlo21LoE55lUcDTGvXiGOCePb7j%2BJDs%2Ffq%2FapM3nRq4pMNAHvGDp6FnvGiXD6PfbLhOt%2FtQVhn0kto7z25Xj3ttIWlBhCkuNxrj6BIQVQ%2F2U7n32%2FyiJUn8KJejHmH7TtF99iuIbAkj2qTk5ALEFdSGbLOKCahNd8rPDF47gTkRKCA91MCTX%2BRQe%2FtWJadSvx6f9bOyGmxa4olwOE7q4EfPJ5RTkCedwq5SQeVuQIc2vKQ0CrWguNWTuCNquTHLFEYby3%2BwGqHEWotrPXc3g%3D%3D'%2C'version'%3A'2'%2C'shakey'%3A'4hqrnwGzxzQiAP18jLaMvIBOdi3LB4Aim3BwSrBrpNI%3D'%7D%22%2C%22channelLv%22%3A%22icon%22%2C%22riskDeviceParam%22%3A%22%7B%5C%22deviceType%5C%22%3A%5C%22EML-AL00%5C%22%2C%5C%22traceIp%5C%22%3A%5C%22%5C%22%2C%5C%22macAddress%5C%22%3A%5C%22%5C%22%2C%5C%22imei%5C%22%3A%5C%22%5C%22%2C%5C%22os%5C%22%3A%5C%22android%5C%22%2C%5C%22osVersion%5C%22%3A%5C%2210%5C%22%2C%5C%22fp%5C%22%3A%5C%2219829ebdeb310df09e1e84ae47547441%5C%22%2C%5C%22ip%5C%22%3A%5C%22%5C%22%2C%5C%22eid%5C%22%3A%5C%22VYKUZ6UTSXCIBIVUTXZ3W2MQKB7SZXQOSJBWLD6BYXCSMCUVLF4PKXUTGWTQK5DZDSAXBBDFSY5TUA5IH4WMVJDTHI%5C%22%2C%5C%22appId%5C%22%3A%5C%22com.jd.jrapp%5C%22%2C%5C%22openUUID%5C%22%3A%5C%22%5C%22%2C%5C%22uuid%5C%22%3A%5C%2233369323831673935323839373032-316D2334323931323533453133434%5C%22%2C%5C%22clientVersion%5C%22%3A%5C%226.2.10%5C%22%2C%5C%22resolution%5C%22%3A%5C%221080.0*2159.0%5C%22%2C%5C%22channelInfo%5C%22%3A%5C%22huawei%2350966%5C%22%2C%5C%22networkType%5C%22%3A%5C%22wifi%5C%22%2C%5C%22startNo%5C%22%3A%5C%224%5C%22%2C%5C%22openid%5C%22%3A%5C%22%5C%22%2C%5C%22token%5C%22%3A%5C%22%5C%22%2C%5C%22sid%5C%22%3A%5C%22%5C%22%2C%5C%22terminalType%5C%22%3A%5C%2202%5C%22%2C%5C%22longtitude%5C%22%3A%5C%22%5C%22%2C%5C%22latitude%5C%22%3A%5C%22%5C%22%2C%5C%22securityData%5C%22%3A%5C%22%5C%22%2C%5C%22jscContent%5C%22%3A%5C%22%5C%22%2C%5C%22fnHttpHead%5C%22%3A%5C%22%5C%22%2C%5C%22receiveRequestTime%5C%22%3A%5C%22%5C%22%2C%5C%22port%5C%22%3A%5C%22%5C%22%2C%5C%22appType%5C%22%3A3%2C%5C%22optType%5C%22%3A%5C%22%5C%22%2C%5C%22idfv%5C%22%3A%5C%22%5C%22%2C%5C%22wifiSSID%5C%22%3A%5C%22%5C%22%2C%5C%22wifiMacAddress%5C%22%3A%5C%22%5C%22%2C%5C%22cellIpAddress%5C%22%3A%5C%22%5C%22%2C%5C%22wifiIpAddress%5C%22%3A%5C%22%5C%22%2C%5C%22sdkToken%5C%22%3A%5C%22SIHQNZ23RJWCVIU73AZ7KIX5YNDJ63VVKUQSE5FOJ6Z7FWCTYQE52FKRB6MUX642EY2EIV2TJSGF6%5C%22%7D%22%7D"}]\``);
    } else {
        newContent = content.replace(/var OtherKey = ``/, `var OtherKey = \`[{"cookie": "${$.cookie}"}]\``);
    }
    newContent = newContent.replace(/ztmFUCxcPMNyUq0P/, `RtKLB8euDo7KwsO0`)
    newContent = newContent.replace(/const NodeSet = 'CookieSet.json'/, `const NodeSet = '${NodeSet}'`)
    if (process.env.JD_BEAN_STOP && process.env.JD_BEAN_STOP !== '0') {
        newContent = newContent.replace(/var stop = '0'/, `var stop = '${process.env.JD_BEAN_STOP}'`);
    }
    const zone = new Date().getTimezoneOffset();
    if (zone === 0) {
        //此处针对UTC-0时区用户做的
        newContent = newContent.replace(/tm\s=.*/, `tm = new Date(new Date().toLocaleDateString()).getTime() - 28800000;`);
    }
    try {
        await fs.writeFileSync(JD_DailyBonusPath, newContent, 'utf8');
        console.log('替换变量完毕');
    } catch (e) {
        console.log("京东签到写入文件异常:" + e);
    }
}
async function deleteFile(path) {
    // 查看文件result.txt是否存在,如果存在,先删除
    const fileExists = await fs.existsSync(path);
    // console.log('fileExists', fileExists);
    if (fileExists) {
        const unlinkRes = await fs.unlinkSync(path);
        // console.log('unlinkRes', unlinkRes)
    }
}

function downloadUrl(url = 'https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js') {
    return new Promise(resolve => {
        const options = { url, "timeout": 10000 };
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
                if (err) {
                    // console.log(`${JSON.stringify(err)}`)
                    console.log(`检测到您当前网络环境不能访问外网,将使用jsdelivr CDN下载JD_DailyBonus.js文件`);
                    await $.http.get({ url: `https://purge.jsdelivr.net/gh/NobyDa/Script@master/JD-DailyBonus/JD_DailyBonus.js`, timeout: 10000 }).then((resp) => {
                        if (resp.statusCode === 200) {
                            let { body } = resp;
                            body = JSON.parse(body);
                            if (body['success']) {
                                console.log(`JD_DailyBonus.js文件  CDN刷新成功`)
                            } else {
                                console.log(`JD_DailyBonus.js文件 CDN刷新失败`)
                            }
                        }
                    });
                } else {
                    $.body = data;
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

function requireConfig() {
    return new Promise(resolve => {
        // const file = 'jd_bean_sign.js';
        // fs.access(file, fs.constants.W_OK, (err) => {
        //   resultPath = err ? '/tmp/result.txt' : resultPath;
        //   JD_DailyBonusPath = err ? '/tmp/JD_DailyBonus.js' : JD_DailyBonusPath;
        //   outPutUrl = err ? '/tmp/' : outPutUrl;
        //   NodeSet = err ? '/tmp/CookieSet.json' : NodeSet;
        //   resolve()
        // });
        //判断是否是云函数环境。原函数跟目录目录没有可写入权限，文件只能放到根目录下虚拟的/temp/文件夹（具有可写入权限）
        resultPath = process.env.TENCENTCLOUD_RUNENV === 'SCF' ? '/tmp/result.txt' : resultPath;
        JD_DailyBonusPath = process.env.TENCENTCLOUD_RUNENV === 'SCF' ? '/tmp/JD_DailyBonus.js' : JD_DailyBonusPath;
        outPutUrl = process.env.TENCENTCLOUD_RUNENV === 'SCF' ? '/tmp/' : outPutUrl;
        NodeSet = process.env.TENCENTCLOUD_RUNENV === 'SCF' ? '/tmp/CookieSet.json' : NodeSet;
        resolve()
    })
}