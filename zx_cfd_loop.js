"use strict";
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
var date_fns_1 = require("date-fns");
var axios_1 = __importDefault(require("axios"));
var zx_USER_AGENTS_1 = __importStar(require("./zx_USER_AGENTS"));
var dotenv = __importStar(require("dotenv"));
var CryptoJS = require('crypto-js');
var crypto = require('crypto');
var fs = require('fs');
//const notify = require('./sendNotify')
dotenv.config();
var zxCommon = require('./zx_common');
var zxObject = new zxCommon.ZxObject('???????????????????????????');
var $ = zxObject.$;
var appId = 10028, fingerprint, token, enCryptMethodJD;
var cookie = '', res = '', balloon = false;
process.env.CFD_LOOP_DELAY ? console.log('????????????:', parseInt(process.env.CFD_LOOP_DELAY)) : console.log('????????????:10000~25000??????');
var UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var filename, stream, fsHash;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            //$.init();
            return [4 /*yield*/, requestAlgo()];
            case 1:
                //$.init();
                _a.sent();
                filename = __filename.split('/').pop();
                stream = fs.createReadStream(filename);
                fsHash = crypto.createHash('md5');
                stream.on('data', function (d) {
                    fsHash.update(d);
                });
                _a.label = 2;
            case 2:
                if (!1) return [3 /*break*/, 4];
                return [4 /*yield*/, $.dowork(function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var shell, _i, _a, s, j, e_1, t;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + $.index + "\u3011" + ($.nickName || $.UserName) + "\n");
                                        _b.label = 1;
                                    case 1:
                                        _b.trys.push([1, 12, , 13]);
                                        if (!!balloon) return [3 /*break*/, 3];
                                        return [4 /*yield*/, speedUp('_cfd_t,bizCode,dwEnv,ptag,source,strBuildIndex,strZone')];
                                    case 2:
                                        res = _b.sent();
                                        if (res.iRet !== 0) {
                                            console.log('????????????4?????????');
                                            return [2 /*return*/];
                                        }
                                        console.log('???????????????:', res.dwTodaySpeedPeople);
                                        if (res.dwTodaySpeedPeople === 500) {
                                            balloon = true;
                                        }
                                        _b.label = 3;
                                    case 3: return [4 /*yield*/, speedUp('_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
                                    case 4:
                                        shell = _b.sent();
                                        if (!shell.Data.hasOwnProperty('NormShell')) return [3 /*break*/, 11];
                                        _i = 0, _a = shell.Data.NormShell;
                                        _b.label = 5;
                                    case 5:
                                        if (!(_i < _a.length)) return [3 /*break*/, 11];
                                        s = _a[_i];
                                        j = 0;
                                        _b.label = 6;
                                    case 6:
                                        if (!(j < s.dwNum)) return [3 /*break*/, 10];
                                        return [4 /*yield*/, speedUp('_cfd_t,bizCode,dwEnv,dwType,ptag,source,strZone', s.dwType)];
                                    case 7:
                                        res = _b.sent();
                                        if (res.iRet !== 0) {
                                            console.log(res);
                                            return [3 /*break*/, 10];
                                        }
                                        console.log('?????????:', res.Data.strFirstDesc);
                                        return [4 /*yield*/, $.sleep(500)];
                                    case 8:
                                        _b.sent();
                                        _b.label = 9;
                                    case 9:
                                        j++;
                                        return [3 /*break*/, 6];
                                    case 10:
                                        _i++;
                                        return [3 /*break*/, 5];
                                    case 11: return [3 /*break*/, 13];
                                    case 12:
                                        e_1 = _b.sent();
                                        console.log(e_1);
                                        return [3 /*break*/, 13];
                                    case 13:
                                        t = process.env.CFD_LOOP_DELAY ? parseInt(process.env.CFD_LOOP_DELAY) : zx_USER_AGENTS_1.getRandomNumberByRange(1000 * 6, 1000 * 12);
                                        return [4 /*yield*/, $.sleep(t)];
                                    case 14:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    })];
            case 3:
                _a.sent();
                return [3 /*break*/, 2];
            case 4: return [2 /*return*/];
        }
    });
}); })();
function speedUp(stk, dwType) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxbfd/user/SpeedUp?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&strBuildIndex=food&_ste=1&_=" + Date.now() + "&sceneval=2&_stk=" + encodeURIComponent(stk);
                    if (stk === '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
                        url = "https://m.jingxi.com/jxbfd/story/queryshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_stk=_cfd_t%2CbizCode%2CdwEnv%2Cptag%2Csource%2CstrZone&_ste=1&_=" + Date.now() + "&sceneval=2";
                    if (stk === '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strZone')
                        url = "https://m.jingxi.com/jxbfd/story/pickshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&dwType=" + dwType + "&_stk=_cfd_t%2CbizCode%2CdwEnv%2CdwType%2Cptag%2Csource%2CstrZone&_ste=1&_=" + Date.now() + "&sceneval=2";
                    url += '&h5st=' + decrypt(stk, url);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Referer': 'https://st.jingxi.com/',
                                'User-Agent': zx_USER_AGENTS_1.default,
                                'Cookie': $.cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    reject(502);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function requestAlgo() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, generateFp()];
                case 1:
                    fingerprint = _a.sent();
                    return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var data, enCryptMethodJDString;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, axios_1.default.post('https://cactus.jd.com/request_algo?g_ty=ajax', {
                                            "version": "1.0",
                                            "fp": fingerprint,
                                            "appId": appId,
                                            "timestamp": Date.now(),
                                            "platform": "web",
                                            "expandParams": ""
                                        }, {
                                            "headers": {
                                                'Authority': 'cactus.jd.com',
                                                'Pragma': 'no-cache',
                                                'Cache-Control': 'no-cache',
                                                'Accept': 'application/json',
                                                'User-Agent': zx_USER_AGENTS_1.default,
                                                'Content-Type': 'application/json',
                                                'Origin': 'https://st.jingxi.com',
                                                'Sec-Fetch-Site': 'cross-site',
                                                'Sec-Fetch-Mode': 'cors',
                                                'Sec-Fetch-Dest': 'empty',
                                                'Referer': 'https://st.jingxi.com/',
                                                'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7'
                                            },
                                        })];
                                    case 1:
                                        data = (_a.sent()).data;
                                        if (data['status'] === 200) {
                                            token = data.data.result.tk;
                                            enCryptMethodJDString = data.data.result.algo;
                                            if (enCryptMethodJDString)
                                                enCryptMethodJD = new Function("return " + enCryptMethodJDString)();
                                        }
                                        else {
                                            console.log("fp: " + fingerprint);
                                            console.log('request_algo ????????????API????????????:');
                                        }
                                        resolve(200);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
            }
        });
    });
}
function decrypt(stk, url) {
    var timestamp = (date_fns_1.format(new Date(), 'yyyyMMddhhmmssSSS'));
    var hash1;
    if (fingerprint && token && enCryptMethodJD) {
        hash1 = enCryptMethodJD(token, fingerprint.toString(), timestamp.toString(), appId.toString(), CryptoJS).toString(CryptoJS.enc.Hex);
    }
    else {
        var random = '5gkjB6SpmC9s';
        token = "tk01wcdf61cb3a8nYUtHcmhSUFFCfddDPRvKvYaMjHkxo6Aj7dhzO+GXGFa9nPXfcgT+mULoF1b1YIS1ghvSlbwhE0Xc";
        fingerprint = 9686767825751161;
        // $.fingerprint = 7811850938414161;
        var str = "" + token + fingerprint + timestamp + appId + random;
        hash1 = CryptoJS.SHA512(str, token).toString(CryptoJS.enc.Hex);
    }
    var st = '';
    stk.split(',').map(function (item, index) {
        st += item + ":" + getQueryString(url, item) + (index === stk.split(',').length - 1 ? '' : '&');
    });
    var hash2 = CryptoJS.HmacSHA256(st, hash1.toString()).toString(CryptoJS.enc.Hex);
    return encodeURIComponent(["".concat(timestamp.toString()), "".concat(fingerprint.toString()), "".concat(appId.toString()), "".concat(token), "".concat(hash2)].join(";"));
}
function generateFp() {
    var e = "0123456789";
    var a = 13;
    var i = '';
    for (; a--;)
        i += e[Math.random() * e.length | 0];
    return (i + Date.now()).slice(0, 16);
}
function getQueryString(url, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.split('?')[1].match(reg);
    if (r != null)
        return unescape(r[2]);
    return '';
}
