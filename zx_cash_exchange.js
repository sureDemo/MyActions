const zxCommon = require('./zx_common.js');
let zxObject = new zxCommon.ZxObject('领现金兑换红包');
const $ = zxObject.$;

const JD_API_HOST = `https://api.m.jd.com/client.action?functionId=cash_getRedPacket`;
!(async () => {
  if (!$.cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', {"open-url": "https://bean.m.jd.com/"});
    return;
  }

  await $.dowork(async function() {   
    //await  QueryJDUserInfo();
    console.log(`\n***************开始京东账号开始【京东账号${$.index}】${$.nickName || $.UserName}】***************`)
    await exchange_redpocket();
    await msgShow();
  })
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())

function exchange_redpocket(){
  return new Promise(resolve => {
    $.post(jdUrl('cash_getRedPacket'), (err, resp, data) => {
      try {
        if (err) {
          data = JSON.parse(resp.body);
		      console.log(`Error：${JSON.stringify(data)}`);
        } else {
          if ($.safeGet(data)) {
            data = JSON.parse(data);
            console.log(`Result：${JSON.stringify(data)}`);
            if(data.data.bizCode==0){
              //$.message = data.data.result.shareRewardTip;
              $.message = '成功！';
            }
            else{
              $.message = '今日可兑换的红包已抢完';
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
function msgShow() {
	return new Promise(resolve => {
    $.msg($.name, '', `【京东账号${$.index}】${$.nickName || $.UserName}\n${$.message}`);
    resolve()
  })
}

function jdUrl(function_id, body={}) {
  return {
    url: `https://api.m.jd.com/client.action?functionId=${function_id}`,
    body: 'area=12_904_3375_62168&body=%7B%22type%22%3A%222%22%2C%22amount%22%3A%221000%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone10%2C1&eid=eidI7e0881206ds1SM32L/0VTwCr9pypbIK71EjN96Ar5iWtIQ80IdYlQ%2BS9Hquok3hgImlD95zTSq6RCyVM6OOO/6bine%2BXwICjjYPHS2HNCOJRYpA3&isBackground=N&joycious=78&lang=zh_CN&networkType=4g&networklibtype=JDNetworkBaseAF&openudid=e9241834b8e0994edf39389a4d18ff6eeba990f5&osVersion=13.4.1&partner=apple&rfs=0000&scope=11&screen=750%2A1334&sign=be8cfeeadc15ec25063e3bf0b23c8647&st=1614868202765&sv=122&uts=0f31TVRjBSto9/0xW/caLvwNVtr1%2Bfw3D78ba4pjkx%2BE5nueBcxpmyJawSIY2T47vFiOAgL0RXsOi3Dy7y5AZTZXRTRKi%2BTkCxPCG2PTKNtdIugmJsxGXqAvxgVIgQsquSX%2BJvLMjDBDkb2Y%2BVWFukYFF%2BS9y3L4htiO/2pfeiBQuKmmxkGQB51p%2BaTzjj1NKmmUNrYyhK2FqufkI7fg5g%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=unknown',
    headers: {
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Host': 'api.m.jd.com',
      'User-Agent': 'JD4iPhone/167568 (iPhone; iOS 13.4.1; Scale/2.00)',
      'Accept-Language': 'en-HK;q=1, zh-Hans-HK;q=0.9, zh-Hant-HK;q=0.8',
      'Cookie': $.cookie
    }
  }
}
