"use strict";
/**
 * 京喜牧场
 * 买、喂、收蛋、锄草、挑逗
 * export HELP_HW=true     // 默认帮助HelloWorld
 * export HELP_POOL=true   // 默认帮助助力池
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zx_ts_common_1 = __importDefault(require("./zx_ts_common"));
var zx_ts_common_2 = require("./zx_ts_common");
var ts_md5_1 = require("ts-md5");
var A = require('./jd_jxmcToken');
var appId = 10028, fingerprint, token, enCryptMethodJD;
var res = '', shareCodes = [];
var homePageInfo;
var HELP_HW = process.env.HELP_HW ? process.env.HELP_HW : "false";
console.log('帮助HelloWorld:', HELP_HW);
var HELP_POOL = process.env.HELP_POOL ? process.env.HELP_POOL : "false";
console.log('帮助助力池:', HELP_POOL);
zx_ts_common_1.default.init("京喜牧场", 'jxmc', -1);
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, zx_ts_common_1.default.requestAlgo()];
            case 1:
                _a.sent();
                return [4 /*yield*/, zx_ts_common_1.default.dowork(function () {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, function () {
                            var food, petid, coins, e_1, lastgettime, _i, _c, day, taskRetCode, e_2, e_3;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        if (!zx_ts_common_1.default.isLogin) {
                                            zx_ts_common_1.default.notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + zx_ts_common_1.default.index + "\uFF1A" + (zx_ts_common_1.default.nickName || zx_ts_common_1.default.userName));
                                            return [2 /*return*/];
                                        }
                                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + zx_ts_common_1.default.index + "\u3011" + (zx_ts_common_1.default.nickName || zx_ts_common_1.default.userName) + "\n");
                                        return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'channel,isgift,sceneid', { isgift: 0 })];
                                    case 1:
                                        homePageInfo = _d.sent();
                                        food = 0;
                                        try {
                                            food = homePageInfo.data.materialinfo[0].value;
                                        }
                                        catch (e) {
                                            console.log('未开通？黑号？');
                                            return [2 /*return*/];
                                        }
                                        petid = homePageInfo.data.petinfo[0].petid;
                                        coins = homePageInfo.data.coins;
                                        console.log('助力码：', homePageInfo.data.sharekey);
                                        shareCodes.push(homePageInfo.data.sharekey);
                                        _d.label = 2;
                                    case 2:
                                        _d.trys.push([2, 4, , 5]);
                                        return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
                                    case 3:
                                        _d.sent();
                                        return [3 /*break*/, 5];
                                    case 4:
                                        e_1 = _d.sent();
                                        console.log(e_1);
                                        return [3 /*break*/, 5];
                                    case 5:
                                        console.log('现有草:', food);
                                        console.log('金币:', coins);
                                        if (!((_b = (_a = homePageInfo.data) === null || _a === void 0 ? void 0 : _a.cow) === null || _b === void 0 ? void 0 : _b.lastgettime)) return [3 /*break*/, 7];
                                        lastgettime = homePageInfo.data.cow.lastgettime;
                                        return [4 /*yield*/, api('operservice/GetCoin', 'activeid,channel,sceneid,token', { token: A(lastgettime), activeid: 'jxmc_active_0001' })];
                                    case 6:
                                        res = _d.sent();
                                        if (res.ret === 0)
                                            console.log('收牛牛：', res.data.addcoin);
                                        _d.label = 7;
                                    case 7: return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,channel,sceneid')];
                                    case 8:
                                        // 签到
                                        res = _d.sent();
                                        if (!res.data.signlist) return [3 /*break*/, 13];
                                        _i = 0, _c = res.data.signlist;
                                        _d.label = 9;
                                    case 9:
                                        if (!(_i < _c.length)) return [3 /*break*/, 12];
                                        day = _c[_i];
                                        if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 11];
                                        return [4 /*yield*/, api('operservice/GetSignReward', 'activeid,channel,currdate,sceneid', { currdate: res.data.currdate, activeid: 'jxmc_active_0001' })];
                                    case 10:
                                        res = _d.sent();
                                        if (res.ret === 0) {
                                            console.log('签到成功!');
                                        }
                                        else {
                                            console.log(res);
                                        }
                                        return [3 /*break*/, 12];
                                    case 11:
                                        _i++;
                                        return [3 /*break*/, 9];
                                    case 12: return [3 /*break*/, 14];
                                    case 13:
                                        console.log('没有获取到签到信息！');
                                        _d.label = 14;
                                    case 14:
                                        taskRetCode = 0;
                                        _d.label = 15;
                                    case 15:
                                        if (!(taskRetCode === 0)) return [3 /*break*/, 20];
                                        return [4 /*yield*/, getTask()];
                                    case 16:
                                        taskRetCode = _d.sent();
                                        console.log('taskRetCode:', taskRetCode);
                                        if (!(taskRetCode === 0)) return [3 /*break*/, 18];
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(4000)];
                                    case 17:
                                        _d.sent();
                                        return [3 /*break*/, 19];
                                    case 18: return [3 /*break*/, 20];
                                    case 19: return [3 /*break*/, 15];
                                    case 20:
                                        if (!(coins >= 5000 && food <= 500)) return [3 /*break*/, 23];
                                        return [4 /*yield*/, api('operservice/Buy', 'activeid,channel,sceneid,type', { type: '1', activeid: 'jxmc_active_0001' })];
                                    case 21:
                                        res = _d.sent();
                                        if (res.ret === 0) {
                                            console.log('买草成功:', res.data.newnum);
                                            coins -= 5000;
                                            food += 100;
                                        }
                                        else {
                                            console.log(res);
                                            return [3 /*break*/, 23];
                                        }
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(4000)];
                                    case 22:
                                        _d.sent();
                                        return [3 /*break*/, 20];
                                    case 23: return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)];
                                    case 24:
                                        _d.sent();
                                        _d.label = 25;
                                    case 25:
                                        if (!(food >= 10)) return [3 /*break*/, 33];
                                        return [4 /*yield*/, api('operservice/Feed', 'activeid,channel,sceneid', { activeid: 'jxmc_active_0001' })];
                                    case 26:
                                        res = _d.sent();
                                        if (!(res.ret === 0)) return [3 /*break*/, 27];
                                        food -= 10;
                                        console.log('剩余草:', res.data.newnum);
                                        return [3 /*break*/, 31];
                                    case 27:
                                        if (!(res.ret === 2020)) return [3 /*break*/, 30];
                                        if (!(res.data.maintaskId === 'pause')) return [3 /*break*/, 29];
                                        console.log('收🥚');
                                        return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,channel,itemid,sceneid,type', { petid: petid, type: '11', activeid: 'jxmc_active_0001' })];
                                    case 28:
                                        res = _d.sent();
                                        if (res.ret === 0) {
                                            console.log('收🥚成功:', res.data.newnum);
                                        }
                                        _d.label = 29;
                                    case 29: return [3 /*break*/, 31];
                                    case 30:
                                        console.log(res);
                                        return [3 /*break*/, 33];
                                    case 31: return [4 /*yield*/, zx_ts_common_1.default.sleep(4000)];
                                    case 32:
                                        _d.sent();
                                        return [3 /*break*/, 25];
                                    case 33: return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)];
                                    case 34:
                                        _d.sent();
                                        _d.label = 35;
                                    case 35:
                                        if (!1) return [3 /*break*/, 41];
                                        _d.label = 36;
                                    case 36:
                                        _d.trys.push([36, 39, , 40]);
                                        return [4 /*yield*/, api('operservice/Action', 'activeid,channel,sceneid,type', { type: '2', activeid: 'jxmc_active_0001' })];
                                    case 37:
                                        res = _d.sent();
                                        if (!res.data.addcoins)
                                            return [3 /*break*/, 41];
                                        console.log('锄草:', res.data.addcoins);
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(1500)];
                                    case 38:
                                        _d.sent();
                                        return [3 /*break*/, 40];
                                    case 39:
                                        e_2 = _d.sent();
                                        console.log('Error:', e_2);
                                        return [3 /*break*/, 41];
                                    case 40: return [3 /*break*/, 35];
                                    case 41: return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)];
                                    case 42:
                                        _d.sent();
                                        _d.label = 43;
                                    case 43:
                                        if (!1) return [3 /*break*/, 49];
                                        _d.label = 44;
                                    case 44:
                                        _d.trys.push([44, 47, , 48]);
                                        return [4 /*yield*/, api('operservice/Action', 'activeid,channel,sceneid,type', { type: '1', petid: petid, activeid: 'jxmc_active_0001' })];
                                    case 45:
                                        res = _d.sent();
                                        if (!res.data.addcoins)
                                            return [3 /*break*/, 49];
                                        console.log('挑逗:', res.data.addcoins);
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(1500)];
                                    case 46:
                                        _d.sent();
                                        return [3 /*break*/, 48];
                                    case 47:
                                        e_3 = _d.sent();
                                        console.log('Error:', e_3);
                                        return [3 /*break*/, 49];
                                    case 48: return [3 /*break*/, 43];
                                    case 49: return [2 /*return*/];
                                }
                            });
                        });
                    })
                    // 获取随机助力码
                    /*
                    if (HELP_HW === 'true') {
                      try {
                        let {data} = await axios.get("https://api.sharecode.ga/api/HW_CODES")
                        shareCodes = [
                          ...shareCodes,
                          ...data.jxcfd
                        ]
                        console.log('获取HelloWorld助力码成功')
                      } catch (e) {
                        console.log('获取HelloWorld助力码出错')
                      }
                    }
                     */
                    /*
                    if (HELP_POOL === 'true') {
                        try {
                            let { data } = await axios.get('https://api.sharecode.ga/api/jxmc/6', { timeout: 10000 })
                            console.log('获取到20个随机助力码:', data.data)
                            shareCodes = [...shareCodes, ...data.data]
                        } catch (e) {
                            console.log('获取助力池失败')
                        }
                    } else {
                        console.log('你的设置是不帮助助力池！')
                    }
                    */
                ];
            case 2:
                _a.sent();
                // 获取随机助力码
                /*
                if (HELP_HW === 'true') {
                  try {
                    let {data} = await axios.get("https://api.sharecode.ga/api/HW_CODES")
                    shareCodes = [
                      ...shareCodes,
                      ...data.jxcfd
                    ]
                    console.log('获取HelloWorld助力码成功')
                  } catch (e) {
                    console.log('获取HelloWorld助力码出错')
                  }
                }
                 */
                /*
                if (HELP_POOL === 'true') {
                    try {
                        let { data } = await axios.get('https://api.sharecode.ga/api/jxmc/6', { timeout: 10000 })
                        console.log('获取到20个随机助力码:', data.data)
                        shareCodes = [...shareCodes, ...data.data]
                    } catch (e) {
                        console.log('获取助力池失败')
                    }
                } else {
                    console.log('你的设置是不帮助助力池！')
                }
                */
                return [4 /*yield*/, zx_ts_common_1.default.dowork(function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var j;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        j = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(j < shareCodes.length)) return [3 /*break*/, 5];
                                        console.log("\u8D26\u53F7" + zx_ts_common_1.default.index + "\u53BB\u52A9\u529B" + shareCodes[j]);
                                        return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,channel,sceneid,sharekey', { sharekey: shareCodes[j], activeid: 'jxmc_active_0001' })];
                                    case 2:
                                        res = _a.sent();
                                        if (res.data.result === 1) {
                                            console.log('不助力自己');
                                        }
                                        else if (res.ret === 0) {
                                            console.log('助力结果：', res.message + " ret:" + res.ret);
                                            console.log('助力成功，获得：', res.data.addcoins);
                                        }
                                        else {
                                            console.log(res);
                                        }
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(1000)];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4:
                                        j++;
                                        return [3 /*break*/, 1];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        });
                    })];
            case 3:
                // 获取随机助力码
                /*
                if (HELP_HW === 'true') {
                  try {
                    let {data} = await axios.get("https://api.sharecode.ga/api/HW_CODES")
                    shareCodes = [
                      ...shareCodes,
                      ...data.jxcfd
                    ]
                    console.log('获取HelloWorld助力码成功')
                  } catch (e) {
                    console.log('获取HelloWorld助力码出错')
                  }
                }
                 */
                /*
                if (HELP_POOL === 'true') {
                    try {
                        let { data } = await axios.get('https://api.sharecode.ga/api/jxmc/6', { timeout: 10000 })
                        console.log('获取到20个随机助力码:', data.data)
                        shareCodes = [...shareCodes, ...data.data]
                    } catch (e) {
                        console.log('获取助力池失败')
                    }
                } else {
                    console.log('你的设置是不帮助助力池！')
                }
                */
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&_stk=" + encodeURIComponent(stk) + "&_ste=1&sceneval=2";
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + zx_ts_common_1.default.decrypt(stk, url);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, zx_ts_common_2.axios.get(url, {
                            headers: {
                                'Cookie': zx_ts_common_1.default.cookie,
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;iPhone;4.11.0;12.4.1;52cf225f0c463b69e1e36b11783074f9a7d9cbf0;network/wifi;model/iPhone11,6;appBuild/100591;ADID/C51FD279-5C69-4F94-B1C5-890BC8EB501F;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/503;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                'Referer': 'https://st.jingxi.com/',
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _a.sent();
                    reject(401);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function getTask() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var tasks, doTaskRes, _i, _a, t, awardCoin;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, taskAPI('GetUserTaskStatusList', 'bizCode,dateType,source')];
                case 1:
                    tasks = _b.sent();
                    doTaskRes = { ret: 1 };
                    _i = 0, _a = tasks.data.userTaskStatusList;
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 9];
                    t = _a[_i];
                    if (!((t.dateType === 1 || t.dateType === 2) && t.completedTimes == t.targetTimes && t.awardStatus === 2)) return [3 /*break*/, 5];
                    // 成就任务
                    t.dateType === 1
                        ?
                            console.log('成就任务可领取:', t.taskName, t.completedTimes, t.targetTimes)
                        :
                            console.log('每日任务可领取:', t.taskName, t.completedTimes, t.targetTimes);
                    return [4 /*yield*/, taskAPI('Award', 'bizCode,source,taskId', { taskId: t.taskId })];
                case 3:
                    doTaskRes = _b.sent();
                    return [4 /*yield*/, zx_ts_common_1.default.sleep(4000)];
                case 4:
                    _b.sent();
                    if (doTaskRes.ret === 0) {
                        awardCoin = doTaskRes['data']['prizeInfo'].match(/:(.*)}/)[1] * 1;
                        console.log('领奖成功:', awardCoin);
                    }
                    _b.label = 5;
                case 5:
                    if (!(t.dateType === 2 && t.completedTimes < t.targetTimes && t.awardStatus === 2 && t.taskType === 2)) return [3 /*break*/, 8];
                    console.log('可做每日任务:', t.taskName, t.taskId);
                    return [4 /*yield*/, taskAPI('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId, configExtra: '' })];
                case 6:
                    doTaskRes = _b.sent();
                    console.log(doTaskRes);
                    if (!(doTaskRes.ret === 0)) return [3 /*break*/, 8];
                    console.log('任务完成');
                    return [4 /*yield*/, zx_ts_common_1.default.sleep(5000)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 2];
                case 9:
                    resolve(doTaskRes.ret);
                    return [2 /*return*/];
            }
        });
    }); });
}
function taskAPI(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?_=" + Date.now() + "&source=jxmc&bizCode=jxmc&_ste=1&sceneval=2&_stk=" + encodeURIComponent(stk) + "&g_login_type=1&g_ty=ajax";
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + zx_ts_common_1.default.decrypt(stk, url);
                    return [4 /*yield*/, zx_ts_common_2.axios.get(url, {
                            headers: {
                                'Origin': 'https://st.jingxi.com',
                                'Accept-Language': 'zh-cn',
                                'Connection': 'keep-alive',
                                'Host': 'm.jingxi.com',
                                'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html?nativeConfig=%7B%22immersion%22%3A1%2C%22toColor%22%3A%22%23e62e0f%22%7D&__mcwvt=sjcp&PTAG=139279.13.31&jxsid=16257474246337594063',
                                'Accept': 'application/json',
                                'User-Agent': 'jdpingou;iPhone;4.11.0;12.4.1;52cf225f0c463b69e1e36b11783074f9a7d9cbf0;network/wifi;model/iPhone11,6;appBuild/100591;ADID/C51FD279-5C69-4F94-B1C5-890BC8EB501F;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/503;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                'Cookie': zx_ts_common_1.default.cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
function makeShareCodes(code) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var bean, farm, pin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, zx_ts_common_1.default.getBeanShareCode(zx_ts_common_1.default.cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, zx_ts_common_1.default.getFarmShareCode(zx_ts_common_1.default.cookie)];
                case 2:
                    farm = _a.sent();
                    pin = zx_ts_common_1.default.cookie.match(/pt_pin=([^;]*)/)[1];
                    pin = ts_md5_1.Md5.hashStr(pin);
                    return [4 /*yield*/, zx_ts_common_2.axios.get("https://api.sharecode.ga/api/autoInsert?db=jxmc&code=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
                            .then(function (res) {
                            if (res.data.code === 200)
                                console.log('已自动提交助力码');
                            else
                                console.log('提交失败！已提交farm的cookie才可提交cfd');
                            resolve(200);
                        })
                            .catch(function () {
                            reject('访问助力池出错');
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
}
