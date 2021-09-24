"use strict";
/**
 * 京喜财富岛
 * 包含雇佣导游，建议每小时1次
 *
 * 此版本暂定默认帮助HelloWorld，帮助助力池
 * export HELP_HW = true    // 帮助HelloWorld
 * export HELP_POOL = true  // 帮助助力池
 *
 * 使用jd_env_copy.js同步js环境变量到ts
 * 使用jd_ts_test.ts测试环境变量
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var zx_USER_AGENTS_1 = __importStar(require("./zx_USER_AGENTS"));
var res = '', isCollector = false;
var HELP_HW = process.env.HELP_HW ? process.env.HELP_HW : "false";
console.log('帮助HelloWorld:', HELP_HW);
var HELP_POOL = process.env.HELP_POOL ? process.env.HELP_POOL : "false";
console.log('帮助助力池:', HELP_POOL);
zx_ts_common_1.default.init("财富岛", 'jxcfd', 10028);
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, zx_ts_common_1.default.requestAlgo()];
            case 1:
                _a.sent();
                return [4 /*yield*/, zx_ts_common_1.default.dowork(function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var e_1, token, strDT, strMyShareId, i, RealTmReport, j, _i, _a, stage, awardRes, employee, _b, employee_1, emp, empRes, _c, _d, sign, shipRes, bags_1, _e, _f, s, strTypeCnt_1, n, bags, _g, _h, s, strTypeCnt, n, j, tasks, t0, _j, _k, t, _l, _m, e, employ, _o, _p, t, _q, _r, b;
                            return __generator(this, function (_s) {
                                switch (_s.label) {
                                    case 0:
                                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + zx_ts_common_1.default.index + "\u3011" + (zx_ts_common_1.default.nickName || zx_ts_common_1.default.userName) + "\n");
                                        _s.label = 1;
                                    case 1:
                                        _s.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, makeShareCodes()];
                                    case 2:
                                        _s.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        e_1 = _s.sent();
                                        console.log(e_1);
                                        return [3 /*break*/, 4];
                                    case 4:
                                        token = zx_ts_common_1.default.getJxToken();
                                        return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', {
                                                ddwTaskId: '',
                                                strShareId: '',
                                                strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
                                                strPgtimestamp: token.strPgtimestamp,
                                                strPhoneID: token.strPhoneID,
                                                strPgUUNum: token.strPgUUNum
                                            })];
                                    case 5:
                                        // 离线
                                        res = _s.sent();
                                        console.log('离线收益：', res.Business.ddwCoin);
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)
                                            // 珍珠
                                        ];
                                    case 6:
                                        _s.sent();
                                        return [4 /*yield*/, api('user/ComposeGameState', '', { dwFirst: 1 })];
                                    case 7:
                                        // 珍珠
                                        res = _s.sent();
                                        strDT = res.strDT, strMyShareId = res.strMyShareId;
                                        console.log("\u5DF2\u5408\u6210" + res.dwCurProgress + "\u4E2A\u73CD\u73E0");
                                        i = 0;
                                        _s.label = 8;
                                    case 8:
                                        if (!(i < 8 - res.dwCurProgress)) return [3 /*break*/, 17];
                                        console.log('继续合成');
                                        RealTmReport = zx_USER_AGENTS_1.getRandomNumberByRange(10, 20);
                                        console.log('本次合成需要上报：', RealTmReport);
                                        j = 0;
                                        _s.label = 9;
                                    case 9:
                                        if (!(j < RealTmReport)) return [3 /*break*/, 13];
                                        return [4 /*yield*/, api('user/RealTmReport', '', { dwIdentityType: 0, strBussKey: 'composegame', strMyShareId: strMyShareId, ddwCount: 5 })];
                                    case 10:
                                        res = _s.sent();
                                        if (res.iRet === 0)
                                            console.log("\u6E38\u620F\u4E2D\u9014\u4E0A\u62A5" + (j + 1) + "\uFF1AOK");
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(5000)];
                                    case 11:
                                        _s.sent();
                                        _s.label = 12;
                                    case 12:
                                        j++;
                                        return [3 /*break*/, 9];
                                    case 13: return [4 /*yield*/, api('user/ComposeGameAddProcess', '__t,strBT,strZone', { __t: Date.now(), strBT: strDT })];
                                    case 14:
                                        res = _s.sent();
                                        console.log('游戏完成，已合成', res.dwCurProgress);
                                        console.log('游戏完成，等待3s');
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(3000)];
                                    case 15:
                                        _s.sent();
                                        _s.label = 16;
                                    case 16:
                                        i++;
                                        return [3 /*break*/, 8];
                                    case 17: return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)
                                        // 珍珠领奖
                                    ];
                                    case 18:
                                        _s.sent();
                                        return [4 /*yield*/, api('user/ComposeGameState', '', { dwFirst: 1 })];
                                    case 19:
                                        // 珍珠领奖
                                        res = _s.sent();
                                        _i = 0, _a = res.stagelist;
                                        _s.label = 20;
                                    case 20:
                                        if (!(_i < _a.length)) return [3 /*break*/, 24];
                                        stage = _a[_i];
                                        if (!(res.dwCurProgress >= stage.dwCurStageEndCnt && stage.dwIsAward === 0)) return [3 /*break*/, 23];
                                        return [4 /*yield*/, api('user/ComposeGameAward', '__t,dwCurStageEndCnt,strZone', {
                                                __t: Date.now(),
                                                dwCurStageEndCnt: stage.dwCurStageEndCnt
                                            })];
                                    case 21:
                                        awardRes = _s.sent();
                                        console.log('珍珠领奖：', awardRes.ddwCoin, awardRes.addMonety);
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(3000)];
                                    case 22:
                                        _s.sent();
                                        _s.label = 23;
                                    case 23:
                                        _i++;
                                        return [3 /*break*/, 20];
                                    case 24: return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)
                                        // 签到 助力奖励
                                    ];
                                    case 25:
                                        _s.sent();
                                        return [4 /*yield*/, api('story/GetTakeAggrPage', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
                                    case 26:
                                        // 签到 助力奖励
                                        res = _s.sent();
                                        employee = res.Data.Employee.EmployeeList.filter(function (e) {
                                            return e.dwStatus === 0;
                                        });
                                        _b = 0, employee_1 = employee;
                                        _s.label = 27;
                                    case 27:
                                        if (!(_b < employee_1.length)) return [3 /*break*/, 31];
                                        emp = employee_1[_b];
                                        return [4 /*yield*/, api('story/helpdraw', '_cfd_t,bizCode,dwEnv,dwUserId,ptag,source,strZone', { dwUserId: emp.dwId })];
                                    case 28:
                                        empRes = _s.sent();
                                        if (empRes.iRet === 0)
                                            console.log('助力奖励领取成功：', empRes.Data.ddwCoin);
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(1000)];
                                    case 29:
                                        _s.sent();
                                        _s.label = 30;
                                    case 30:
                                        _b++;
                                        return [3 /*break*/, 27];
                                    case 31:
                                        if (!(res.Data.Sign.dwTodayStatus === 0)) return [3 /*break*/, 35];
                                        _c = 0, _d = res.Data.Sign.SignList;
                                        _s.label = 32;
                                    case 32:
                                        if (!(_c < _d.length)) return [3 /*break*/, 35];
                                        sign = _d[_c];
                                        if (!(sign.dwDayId === res.Data.Sign.dwTodayId)) return [3 /*break*/, 34];
                                        return [4 /*yield*/, api('story/RewardSign', '_cfd_t,bizCode,ddwCoin,ddwMoney,dwEnv,dwPrizeLv,dwPrizeType,ptag,source,strPrizePool,strZone', {
                                                ddwCoin: sign.ddwCoin,
                                                ddwMoney: sign.ddwMoney,
                                                dwPrizeLv: sign.dwBingoLevel,
                                                dwPrizeType: sign.dwPrizeType,
                                                strPrizePool: sign.strPrizePool
                                            })];
                                    case 33:
                                        res = _s.sent();
                                        if (res.iRet === 0)
                                            console.log('签到成功：', res.Data.ddwCoin, res.Data.ddwMoney, res.Data.strPrizePool);
                                        return [3 /*break*/, 35];
                                    case 34:
                                        _c++;
                                        return [3 /*break*/, 32];
                                    case 35: return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)
                                        // 船来了
                                    ];
                                    case 36:
                                        _s.sent();
                                        return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strShareId,strZone', {
                                                ddwTaskId: '',
                                                strShareId: '',
                                                strMarkList: 'undefined'
                                            })];
                                    case 37:
                                        // 船来了
                                        res = _s.sent();
                                        if (!res.StoryInfo.StoryList) return [3 /*break*/, 49];
                                        if (!res.StoryInfo.StoryList[0].Special) return [3 /*break*/, 41];
                                        console.log("\u8239\u6765\u4E86\uFF0C\u4E58\u5BA2\u662F" + res.StoryInfo.StoryList[0].Special.strName);
                                        return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                                                strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                                                dwType: '2',
                                                triggerType: 0,
                                                ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                                            })];
                                    case 38:
                                        shipRes = _s.sent();
                                        console.log('正在下船，等待30s');
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(30000)];
                                    case 39:
                                        _s.sent();
                                        return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                                                strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                                                dwType: '3',
                                                triggerType: 0,
                                                ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                                            })];
                                    case 40:
                                        shipRes = _s.sent();
                                        if (shipRes.iRet === 0)
                                            console.log('船客接待成功');
                                        else
                                            console.log('船客接待失败', shipRes);
                                        _s.label = 41;
                                    case 41:
                                        isCollector = false;
                                        if (!res.StoryInfo.StoryList[0].Collector) return [3 /*break*/, 47];
                                        console.log('收藏家出现');
                                        return [4 /*yield*/, api('story/CollectorOper', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,strStoryId,dwType,ddwTriggerDay', { strStoryId: res.StoryInfo.StoryList[0].strStoryId, dwType: '2', ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay })];
                                    case 42:
                                        // TODO 背包满了再卖给收破烂的
                                        res = _s.sent();
                                        console.log(res);
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(1000)];
                                    case 43:
                                        _s.sent();
                                        isCollector = true;
                                        return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
                                    case 44:
                                        // 清空背包
                                        res = _s.sent();
                                        bags_1 = [];
                                        for (_e = 0, _f = res.Data.Office; _e < _f.length; _e++) {
                                            s = _f[_e];
                                            bags_1.push(s.dwType);
                                            bags_1.push(s.dwCount);
                                        }
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(1000)];
                                    case 45:
                                        _s.sent();
                                        strTypeCnt_1 = '';
                                        for (n = 0; n < bags_1.length; n++) {
                                            if (n % 2 === 0)
                                                strTypeCnt_1 += bags_1[n] + ":";
                                            else
                                                strTypeCnt_1 += bags_1[n] + "|";
                                        }
                                        if (!(bags_1.length !== 0)) return [3 /*break*/, 47];
                                        return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt_1 })];
                                    case 46:
                                        res = _s.sent();
                                        console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                                        _s.label = 47;
                                    case 47: return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)];
                                    case 48:
                                        _s.sent();
                                        _s.label = 49;
                                    case 49: return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
                                    case 50:
                                        // 清空背包
                                        res = _s.sent();
                                        bags = [];
                                        for (_g = 0, _h = res.Data.Office; _g < _h.length; _g++) {
                                            s = _h[_g];
                                            bags.push(s.dwType);
                                            bags.push(s.dwCount);
                                        }
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(1000)];
                                    case 51:
                                        _s.sent();
                                        strTypeCnt = '';
                                        for (n = 0; n < bags.length; n++) {
                                            if (n % 2 === 0)
                                                strTypeCnt += bags[n] + ":";
                                            else
                                                strTypeCnt += bags[n] + "|";
                                        }
                                        if (!(bags.length !== 0)) return [3 /*break*/, 53];
                                        return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt })];
                                    case 52:
                                        res = _s.sent();
                                        console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                                        _s.label = 53;
                                    case 53: return [4 /*yield*/, api('story/QueryRubbishInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
                                    case 54:
                                        // 垃圾🚮
                                        res = _s.sent();
                                        if (!(res.Data.StoryInfo.StoryList.length !== 0)) return [3 /*break*/, 61];
                                        console.log('有垃圾');
                                        return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwType,ptag,source,strZone', {
                                                dwType: '1',
                                                dwRewardType: 0
                                            })];
                                    case 55:
                                        _s.sent();
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(1000)];
                                    case 56:
                                        _s.sent();
                                        j = 1;
                                        _s.label = 57;
                                    case 57:
                                        if (!(j < 9)) return [3 /*break*/, 61];
                                        return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwRubbishId,dwType,ptag,source,strZone', {
                                                dwType: '2',
                                                dwRewardType: 0,
                                                dwRubbishId: j
                                            })];
                                    case 58:
                                        res = _s.sent();
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(1500)];
                                    case 59:
                                        _s.sent();
                                        _s.label = 60;
                                    case 60:
                                        j++;
                                        return [3 /*break*/, 57];
                                    case 61: return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)
                                        // 任务➡️
                                    ];
                                    case 62:
                                        _s.sent();
                                        return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
                                    case 63:
                                        tasks = _s.sent();
                                        t0 = tasks.Data.TaskList[0];
                                        if (!(t0.strTaskName === '浏览1次爆款活动' && t0.dwCompleteNum === 0)) return [3 /*break*/, 65];
                                        return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t0.ddwTaskId })];
                                    case 64:
                                        res = _s.sent();
                                        if (res.ret === 0) {
                                            console.log('浏览1次爆款活动，任务完成');
                                        }
                                        _s.label = 65;
                                    case 65: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
                                    case 66:
                                        tasks = _s.sent();
                                        _j = 0, _k = tasks.Data.TaskList;
                                        _s.label = 67;
                                    case 67:
                                        if (!(_j < _k.length)) return [3 /*break*/, 71];
                                        t = _k[_j];
                                        if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 70];
                                        return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId })];
                                    case 68:
                                        res = _s.sent();
                                        if (res.ret === 0) {
                                            console.log(t.strTaskName + "\u9886\u5956\u6210\u529F:", res.data.prizeInfo);
                                        }
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(1000)];
                                    case 69:
                                        _s.sent();
                                        _s.label = 70;
                                    case 70:
                                        _j++;
                                        return [3 /*break*/, 67];
                                    case 71: return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)];
                                    case 72:
                                        _s.sent();
                                        return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
                                    case 73:
                                        tasks = _s.sent();
                                        if (!(tasks.Data.dwStatus === 3)) return [3 /*break*/, 76];
                                        return [4 /*yield*/, api('story/ActTaskAward', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
                                    case 74:
                                        res = _s.sent();
                                        console.log('100财富任务完成：', res);
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)];
                                    case 75:
                                        _s.sent();
                                        _s.label = 76;
                                    case 76: return [4 /*yield*/, api('user/EmployTourGuideInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
                                    case 77:
                                        // 导游
                                        res = _s.sent();
                                        if (!!res.TourGuideList) return [3 /*break*/, 78];
                                        console.log('手动雇佣4个试用导游');
                                        return [3 /*break*/, 83];
                                    case 78:
                                        _l = 0, _m = res.TourGuideList;
                                        _s.label = 79;
                                    case 79:
                                        if (!(_l < _m.length)) return [3 /*break*/, 83];
                                        e = _m[_l];
                                        if (!(e.strBuildIndex !== 'food' && e.ddwRemainTm === 0)) return [3 /*break*/, 82];
                                        return [4 /*yield*/, api('user/EmployTourGuide', '_cfd_t,bizCode,ddwConsumeCoin,dwEnv,dwIsFree,ptag,source,strBuildIndex,strZone', { ddwConsumeCoin: e.ddwCostCoin, dwIsFree: 0, strBuildIndex: e.strBuildIndex })];
                                    case 80:
                                        employ = _s.sent();
                                        if (employ.iRet === 0)
                                            console.log("\u96C7\u4F63" + e.strBuildIndex + "\u5BFC\u6E38\u6210\u529F");
                                        if (employ.iRet === 2003)
                                            return [3 /*break*/, 83];
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(1000)];
                                    case 81:
                                        _s.sent();
                                        _s.label = 82;
                                    case 82:
                                        _l++;
                                        return [3 /*break*/, 79];
                                    case 83: return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)
                                        // 任务⬇️
                                    ];
                                    case 84:
                                        _s.sent();
                                        return [4 /*yield*/, mainTask('GetUserTaskStatusList', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: 0 })];
                                    case 85:
                                        // 任务⬇️
                                        tasks = _s.sent();
                                        _o = 0, _p = tasks.data.userTaskStatusList;
                                        _s.label = 86;
                                    case 86:
                                        if (!(_o < _p.length)) return [3 /*break*/, 93];
                                        t = _p[_o];
                                        if (!(t.dateType === 2)) return [3 /*break*/, 92];
                                        if (!(t.awardStatus === 2 && t.completedTimes === t.targetTimes)) return [3 /*break*/, 89];
                                        console.log(1, t.taskName);
                                        return [4 /*yield*/, mainTask('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId })];
                                    case 87:
                                        res = _s.sent();
                                        console.log(res);
                                        if (res.ret === 0) {
                                            console.log(t.taskName + "\u9886\u5956\u6210\u529F:", res.data.prizeInfo);
                                        }
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)];
                                    case 88:
                                        _s.sent();
                                        return [3 /*break*/, 92];
                                    case 89:
                                        if (!(t.awardStatus === 2 && t.completedTimes < t.targetTimes && ([1, 2, 3, 4].includes(t.orderId)))) return [3 /*break*/, 92];
                                        console.log('做任务:', t.taskId, t.taskName, t.completedTimes, t.targetTimes);
                                        return [4 /*yield*/, mainTask('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', {
                                                taskId: t.taskId,
                                                configExtra: ''
                                            })];
                                    case 90:
                                        res = _s.sent();
                                        console.log('做任务:', res);
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(5000)];
                                    case 91:
                                        _s.sent();
                                        _s.label = 92;
                                    case 92:
                                        _o++;
                                        return [3 /*break*/, 86];
                                    case 93: return [4 /*yield*/, zx_ts_common_1.default.sleep(2000)];
                                    case 94:
                                        _s.sent();
                                        _q = 0, _r = ['fun', 'shop', 'sea', 'food'];
                                        _s.label = 95;
                                    case 95:
                                        if (!(_q < _r.length)) return [3 /*break*/, 99];
                                        b = _r[_q];
                                        return [4 /*yield*/, api('user/CollectCoin', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b, dwType: '1' })];
                                    case 96:
                                        res = _s.sent();
                                        console.log(b + "\u6536\u91D1\u5E01:", res.ddwCoin);
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(1000)];
                                    case 97:
                                        _s.sent();
                                        _s.label = 98;
                                    case 98:
                                        _q++;
                                        return [3 /*break*/, 95];
                                    case 99: return [2 /*return*/];
                                }
                            });
                        });
                    })];
            case 2:
                _a.sent();
                return [4 /*yield*/, zx_ts_common_1.default.dowork(function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var j;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        j = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(j < zx_ts_common_1.default.shareCodesArr.length)) return [3 /*break*/, 5];
                                        console.log("\u8D26\u53F7" + zx_ts_common_1.default.index + "\u53BB\u52A9\u529B:", zx_ts_common_1.default.shareCodesArr[j]);
                                        return [4 /*yield*/, api('story/helpbystage', '_cfd_t,bizCode,dwEnv,ptag,source,strShareId,strZone', { strShareId: zx_ts_common_1.default.shareCodesArr[j] })];
                                    case 2:
                                        res = _a.sent();
                                        console.log('助力:', res);
                                        if (res.iRet === 2232 || res.sErrMsg === '今日助力次数达到上限，明天再来帮忙吧~') {
                                            return [3 /*break*/, 5];
                                        }
                                        return [4 /*yield*/, zx_ts_common_1.default.sleep(3000)];
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
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxbfd/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_ste=1&_=" + Date.now() + "&sceneval=2&_stk=" + encodeURIComponent(stk);
                    if (['GetUserTaskStatusList', 'Award', 'DoTask'].includes(fn)) {
                        console.log('api2');
                        url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
                    }
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
                                'Host': 'm.jingxi.com',
                                'Referer': 'https://st.jingxi.com/',
                                'User-Agent': zx_USER_AGENTS_1.default,
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
function mainTask(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
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
                                'X-Requested-With': 'com.jd.pingou',
                                'Referer': 'https://st.jingxi.com/',
                                'Host': 'm.jingxi.com',
                                'User-Agent': zx_USER_AGENTS_1.default,
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
function makeShareCodes() {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var bean, farm, pin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, zx_ts_common_1.default.getBeanShareCode()];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, zx_ts_common_1.default.getFarmShareCode()];
                case 2:
                    farm = _a.sent();
                    return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strShareId,strZone', {
                            ddwTaskId: '',
                            strShareId: '',
                            strMarkList: 'undefined'
                        })];
                case 3:
                    res = _a.sent();
                    console.log('助力码:', res.strMyShareId);
                    zx_ts_common_1.default.shareCodesArr.push(res.strMyShareId);
                    pin = zx_ts_common_1.default.cookie.match(/pt_pin=([^;]*)/)[1];
                    pin = zx_ts_common_2.Md5.hashStr(pin);
                    zx_ts_common_2.axios.get("https://api.sharecode.ga/api/autoInsert?db=jxcfd&code=" + res.strMyShareId + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
                        .then(function (res) {
                        if (res.data.code === 200)
                            console.log('已自动提交助力码');
                        else
                            console.log('提交失败！已提交farm和bean的cookie才可提交cfd');
                        resolve();
                    })
                        .catch(function (e) {
                        reject('访问助力池出错');
                    });
                    return [2 /*return*/];
            }
        });
    }); });
}
