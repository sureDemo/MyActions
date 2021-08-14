const zxCommon = require('./zx_common.js');
let zxObject = new zxCommon.ZxObject('京东汽车');
const $ = zxObject.$;

let jdNotify = true;//是否关闭通知，false打开通知推送，true关闭通知推送
const randomCount = $.isNode() ? 20 : 5;
//IOS等用户直接用NobyDa的jd cookie
let message;
const JD_API_HOST = 'https://car-member.jd.com/api/';
!(async () => {
  if (!$.cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }

  await $.dowork(async function() {
    message = '';
    console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
    if (!$.isLogin) {
      $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

      if ($.isNode()) {
        await $.notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
      }
      return
    }
    await jdCar();
    await showMsg();
  })

})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })

async function jdCar() {
  await check()
  await sign()
  await $.wait(1000)
  await mission()
  await $.wait(1000)
  await getPoint()
}

function showMsg() {
  return new Promise(resolve => {
    $.msg($.name, '', `【京东账号${$.index}】${$.nickName}\n${message}`);
    resolve()
  })
}

function check() {
  return new Promise(resolve => {
    $.get(taskUrl('v1/user/exchange/bean/check'), (err, resp, data) => {
      try {
        if (err) {
          data = JSON.parse(resp.body)
          console.log(`${data.error.msg}`)
          message += `签到失败，${data.error.msg}\n`
        } else {
          if ($.safeGet(data)) {
            data = JSON.parse(data);
            console.log(`兑换结果：${JSON.stringify(data)}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function sign() {
  return new Promise(resolve => {
    $.post(taskUrl('v1/user/sign'), (err, resp, data) => {
      try {
        if (err) {
          data = JSON.parse(resp.body)
          console.log(`${data.error.msg}`)
          message += `签到失败，${data.error.msg}\n`
        } else {
          if ($.safeGet(data)) {
            data = JSON.parse(data);
            if (data.status) {
              console.log(`签到成功，获得${data.data.point}，已签到${data.data.signDays}天`)
              message += `签到成功，获得${data.data.point}，已签到${data.data.signDays}天\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function mission() {
  return new Promise(resolve => {
    $.get(taskUrl('v1/user/mission'), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if ($.safeGet(data)) {
            data = JSON.parse(data);
            if (data.status) {
              let missions = data.data.missionList
              for (let i = 0; i < missions.length; ++i) {
                const mission = missions[i]
                if (mission['missionStatus'] === 0 && (mission['missionType'] === 1 || mission['missionType'] === 5)) {
                  console.log(`去做任务：${mission['missionName']}`)
                  await doMission(mission['missionId'])
                  await $.wait(1000) // 等待防黑
                }
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function doMission(missionId) {
  return new Promise(resolve => {
    $.post(taskPostUrl('v1/game/mission', {"missionId": missionId}), async (err, resp, data) => {
      try {
        if (err) {
          data = JSON.parse(resp.body)
          console.log(`${data.error.msg}`)
        } else {
          if ($.safeGet(data)) {
            data = JSON.parse(data);
            if (data.status) {
              console.log("任务领取成功")
              await receiveMission(missionId)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function receiveMission(missionId) {
  return new Promise(resolve => {
    $.post(taskPostUrl('v1/user/mission/receive', {"missionId": missionId}), async (err, resp, data) => {
      try {
        if (err) {
          data = JSON.parse(resp.body)
          console.log(`${data.error.msg}`)
        } else {
          if ($.safeGet(data)) {
            data = JSON.parse(data);
            if (data.status) {
              console.log("任务完成成功")
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function getPoint() {
  return new Promise(resolve => {
    $.get(taskUrl('v1/user/point'), async (err, resp, data) => {
      try {
        if (err) {
          data = JSON.parse(resp.body)
          console.log(`${data.error.msg}`)
        } else {
          if ($.safeGet(data)) {
            data = JSON.parse(data);
            if (data.status) {
              if (data.data.remainPoint >= data.data.oncePoint) {
                console.log(`当前赛点：${data.data.remainPoint}/${data.data.oncePoint}，可以兑换京豆，请打开APP兑换`)
                message += `当前赛点：${data.data.remainPoint}/${data.data.oncePoint}，可以兑换京豆，请打开APP兑换\n`
              }else{
                console.log(`当前赛点：${data.data.remainPoint}/${data.data.oncePoint}无法兑换京豆`)
                message += `当前赛点：${data.data.remainPoint}/${data.data.oncePoint}，无法兑换京豆\n`
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function taskUrl(function_id, body = {}) {
  return {
    url: `${JD_API_HOST}${function_id}?timestamp=${new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000}`,
    headers: {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Host": "car-member.jd.com",
      "Referer": "https://h5.m.jd.com/babelDiy/Zeus/44bjzCpzH9GpspWeBzYSqBA7jEtP/index.html",
      "Cookie": $.cookie,
      "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0"),
    }
  }
}

function taskPostUrl(function_id, body = {}) {
  return {
    url: `${JD_API_HOST}${function_id}?timestamp=${new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000}`,
    body: JSON.stringify(body),
    headers: {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Connection": "keep-alive",
      "Content-Type": "application/json;charset=UTF-8",
      "Host": "car-member.jd.com",
      "activityid": "39443aee3ff74fcb806a6f755240d127",
      "Referer": "https://h5.m.jd.com/babelDiy/Zeus/44bjzCpzH9GpspWeBzYSqBA7jEtP/index.html",
      "Cookie": $.cookie,
      "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0"),
    }
  }
}

function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": $.cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0")
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return
            }
            if (data['retcode'] === 0) {
              $.nickName = data['base'].nickname;
            } else {
              $.nickName = $.UserName
            }
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
