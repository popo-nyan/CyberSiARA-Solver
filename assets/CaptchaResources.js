var MainApidata;
var ls_StatusRW = null;
var MasterUrlIds;
var Ltype;
var cStatus;
var keyExpired;
var ls_MainTimerstarts;
var ls_Rfreshcpcha;
var ls_LoadStatus;
var ls_wrongReload;
var ls_OpenCaptchaTime = '';
var ls_WrongIndex;
var iRequest;
var bcounter;
var RequestId = '0';
var FpStatus = 'success';
var Historydata = '';
var encryptedData = '';

function InitCaptcha(MasterUrlId) {
    AppendFPJS();
    AppendValidationJS();
    MasterUrlIds = MasterUrlId;
    if (Historydata != null && Historydata != '') {
        _OldDeviceFound();
    } else {
        AppendFPJS();
    }
}

function AppendFPJS() {
    var navigator_info = window.navigator;
    var screen_info = window.screen;
    var uid = navigator_info.mimeTypes.length;
    uid += navigator_info.userAgent.replace(/\D+/g, '');
    uid += navigator_info.plugins.length;
    uid += screen_info.height || '';
    uid += screen_info.width || '';
    uid += screen_info.pixelDepth || '';
    encryptedData = encodedData(uid);
    Historydata = encryptedData;
}

function AppendValidationJS() {
    var script = document.createElement('script');
    script.src = 'https://embed.mycybersiara.com/CaptchaFormate/SiaraShield_Validation.js';
    document.head.appendChild(script);
}

function encodedData(data) {
    var o1;
    var o2;
    var o3;
    var h1;
    var h2;
    var h3;
    var h4;
    var bits;
    var r;
    var i = 0;
    var enc = '';
    if (!data) {
        return data;
    }
    do {
        o1 = data[i++];
        o2 = data[i++];
        o3 = data[i++];
        bits = o1 << 16 | o2 << 8 | o3;
        h1 = bits >> 18 & 63;
        h2 = bits >> 12 & 63;
        h3 = bits >> 6 & 63;
        h4 = bits & 63;
        enc += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(h1) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(h2) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(h3) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(h4);
    } while (i < data.length);
    r = data.length % 3;
    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
}

function _OldDeviceFound() {
    VisiterGenerator();
    if ($('.SiaraShield').length > 0) {
        _bindMultiPlugin();
        for (var init = 0; init < $('.SiaraShield').length; init++) {
            iRequest = init;
            VerifyInitCaptcha(MasterUrlIds);
            if (VerifiMuActive == 1) {
                init = $('.SiaraShield').length;
                VerifiMuActive = 0;
            }
        }
    }
}

function VerifyInitCaptcha(MasterUrlId) {
    _SiaraShieldDVIndexNULL(iRequest);
    _captchaSubmitNone();
    var currentDatetime = new Date();
    ls_MainTimerstarts = currentDatetime;
    ls_Rfreshcpcha = 'no';
    ls_wrongReload = '';
    ls_LoadStatus = 'Load';
    ls_OpenCaptchaTime = '';
    MasterUrlIds = MasterUrlId;
    SiaraSield_Init('Load', MasterUrlId);
    ClearFormData();
}

function SiaraSield_Init(Type, MasterUrlId) {
    _captchaSubmitNone();
    GetCyberSiara();
    if (ls_wrongReload == 'wrongReload') {
        CheckOSDataAvailable('reload');
    }
}

function findhiddnfp() {
    try {
        Historydata = localStorage.getItem('_vidCustm');
    } catch (exception) {
    }
}

function CheckCookiefn() {
    if (Historydata == null || Historydata == '') {
        var navigator_info = window.navigator;
        var screen_info = window.screen;
        var uid = navigator_info.mimeTypes.length;
        uid += navigator_info.userAgent.replace(/\D+/g, '');
        uid += navigator_info.plugins.length;
        uid += screen_info.height || '';
        uid += screen_info.width || '';
        uid += screen_info.pixelDepth || '';
        encryptedData = encodedData(uid);
        Historydata = encryptedData;
    }
}

setInterval(function () {
    CheckCookiefn();
}, 6000);

function VcapLoad(Type, MasterUrlIdNonce) {
    Ltype = Type;
    var MasterUrlId = '';
    for (i = 0; i < 5; i++) {
        MasterUrlId += MasterUrlIdNonce[(i + 1) * 5];
    }
    SiaraSield_Init(Type, MasterUrlId);
}

var visiter_Id;

function VisiterGenerator() {
    try {
        var fp = new Fingerprint({
            canvas: true, ie_activex: false, screen_resolution: false
        });
        var uid = fp.get();
        var pid = fingerprint_plugins();
        var did = fingerprint_display();
        var fid = fingerprint_fonts();
        visiter_Id = uid + pid + did + fid;
    } catch (exception) {
        var min = 100000;
        var max = 999999;
        min = Math.ceil(min);
        max = Math.floor(max);
        visiter_Id = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function ReloadPlgunDuration(date11, date22) {
    var date1 = new Date(date11);
    var date2 = new Date(date22);
    var diff = date2.getTime() - date1.getTime();
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    return parseInt(ss);
}

function SetRequestJson() {
    var cookieEnabled = 0;
    var screen_info = window.screen;
    if (navigator.cookieEnabled) {
        cookieEnabled = 1;
    }
    var currentDatetime = new Date();
    var DurationSecond = ReloadPlgunDuration(null, currentDatetime);
    var ReqData = {
        MasterUrlId: MasterUrlIds,
        DeviceName: navigator.userAgent,
        RequestType: Ltype,
        RequestUrl: window.location.href,
        BrowserIdentity: Historydata,
        PluginNo: iRequest,
        VisiterId: visiter_Id,
        LanguageId: 1,
        RequestID: RequestId,
        LangChange: 0,
        ClickSecond: DurationSecond,
        Iscookie: cookieEnabled,
        DeviceHeight: screen_info.height,
        DeviceWidth: screen_info.width
    };
    return ReqData;
}

function GetCyberSiara() {
    $.ajax({
        async: false,
        type: 'POST',
        dataType: 'json',
        url: "https://embed.mycybersiara.com/api/CyberSiara/GetCyberSiara",
        data: SetRequestJson(),
        success: function (data) {
            RequestId = data.RequestId;
            FpStatus = data.FpStatus;
            ls_OpenCaptchaTime = '';
            ls_StatusRW = null;
            if (data.HtmlFormate != null) {
                MainResponse = data.HtmlFormate;
                if (data.Message == 'Key Expiry') {
                    _SiaraShieldDVIndexNULL(iRequest);
                    keyExpired = true;
                } else {
                    $('.CaptchaSubmit').attr('style', 'display:none !important;');
                    _SiaraShieldDVIndexNULL(iRequest);
                    $('.SiaraShield-' + iRequest).append(data.HtmlFormate).hide().show('slow');
                    wedgetLoadTime = new Date();
                    $('#mainplugin').show();
                }
            } else {
                _captchaSubmitBlock();
            }
        }
    });
}

var wedgetLoadTime = new Date();

function CurruntTime() {
    var date1 = new Date();
    return date1;
}

function ClearFormData() {
    $('#Input_Captcha').val('');
}

var VerifiMuActive = 0;

function ValidateToken(privatekey, token) {
    var responseStatus = false;
    $.ajax({
        type: 'GET',
        async: false,
        dataType: 'json',
        url: "https://embed.mycybersiara.com/api/validate-token",
        headers: {
            Authorization: 'Bearer ' + token, key: privatekey
        },
        success: function (response) {
            if (response.HttpStatusCode == 200) {
                responseStatus = true;
            } else {
                responseStatus = false;
            }
        }
    });
    return responseStatus;
}

function _SiaraShieldDVIndexNULL(iRequest) {
    $('.SiaraShield-' + iRequest).empty();
}

function _captchaSubmitBlock() {
    $('.CaptchaSubmit').attr('style', 'display:block !important;');
}

function _captchaSubmitNone() {
    $('.CaptchaSubmit').attr('style', 'display:none !important;');
}

function _pluginCount() {
    return $('.SiaraShield').length;
}

function _bindMultiPlugin() {
    var i = 0;
    $('.SiaraShield').empty();
    $('.SiaraShield').each(function () {
        $(this).append("<div class=\"SiaraShield-" + i + "\"></div>");
        i++;
    });
}