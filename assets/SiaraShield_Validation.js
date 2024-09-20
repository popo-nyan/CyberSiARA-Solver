function checkIfHTMLInString(e) {
    return /<\s?[^\>]*\/?\s?>/i.test(e);
}

function checkIfSQLInString(e) {
    return !!(/select(.*?)from(.*?)/.test(e.toLowerCase()) || /delete from(.*?)/.test(e.toLowerCase()) || /truncate table(.*?)/.test(e.toLowerCase()) || /drop table(.*?)/.test(e.toLowerCase()) || /or (.*?)=(.*?)/.test(e.toLowerCase()));
}

function CheckErrorVal() {
    var e = true;
    JQuryName('input[type=text]').each(function () {
        if (!(/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(JQuryName(this).val()) || !!!(/select(.*?)from(.*?)/.test(JQuryName(this).val().toLowerCase()) || /delete from(.*?)/.test(JQuryName(this).val().toLowerCase()) || /truncate table(.*?)/.test(JQuryName(this).val().toLowerCase()) || /drop table(.*?)/.test(JQuryName(this).val().toLowerCase()) || /or (.*?)=(.*?)/.test(JQuryName(this).val().toLowerCase())) && !/<\s?[^\>]*\/?\s?>/i.test(JQuryName(this).val()) && !/\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i.test(JQuryName(this).val()) && !JQuryName(this).val().match('www.') && !JQuryName(this).val().match('http://') && !JQuryName(this).val().match('https://') && !JQuryName(this).val().match('--'))) {
            e = false;
        }
    });
    JQuryName('textarea').each(function () {
        if (!(/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(JQuryName(this).val()) || !!!(/select(.*?)from(.*?)/.test(JQuryName(this).val().toLowerCase()) || /delete from(.*?)/.test(JQuryName(this).val().toLowerCase()) || /truncate table(.*?)/.test(JQuryName(this).val().toLowerCase()) || /drop table(.*?)/.test(JQuryName(this).val().toLowerCase()) || /or (.*?)=(.*?)/.test(JQuryName(this).val().toLowerCase())) && !/<\s?[^\>]*\/?\s?>/i.test(JQuryName(this).val()) && !/\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i.test(JQuryName(this).val()) && !JQuryName(this).val().match('www.') && !JQuryName(this).val().match('http://') && !JQuryName(this).val().match('https://') && !JQuryName(this).val().match('--'))) {
            e = false;
        }
    });
    return e;
}

function checkIfEmailInString(e) {
    return /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(e);
}

function UrlValidation(e) {
    return !(/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(e) || !!!(/select(.*?)from(.*?)/.test(e.toLowerCase()) || /delete from(.*?)/.test(e.toLowerCase()) || /truncate table(.*?)/.test(e.toLowerCase()) || /drop table(.*?)/.test(e.toLowerCase()) || /or (.*?)=(.*?)/.test(e.toLowerCase())) && !/<\s?[^\>]*\/?\s?>/i.test(e) && !/\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i.test(e) && !e.match('www.') && !e.match('http://') && !e.match('https://') && !e.match('--'));
}

function _showAlertHtml() {
    return "<div style=\"position:absolute;margin: 6px 10px 8px -1px; clear:both;\"><img style=\"width:32px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTI4VDExOjI0OjA2KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0yOFQxMToyNToxNiswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0yOFQxMToyNToxNiswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MmZmYjJjNy0wMzhlLTM4NGUtYjlhYi0zNWQxNmU4YjY3NjgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxZDRiNmNmYy00NzRkLTFjNDEtODk2Yy1hY2UyYmM5ZGE2MjEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNDE2OGQ3Yi1jZTMzLTgzNDktYTRjMC0xMTJhNjllMjg4MjkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmI0MTY4ZDdiLWNlMzMtODM0OS1hNGMwLTExMmE2OWUyODgyOSIgc3RFdnQ6d2hlbj0iMjAyMC0xMS0yOFQxMToyNDowNiswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MmZmYjJjNy0wMzhlLTM4NGUtYjlhYi0zNWQxNmU4YjY3NjgiIHN0RXZ0OndoZW49IjIwMjAtMTEtMjhUMTE6MjU6MTYrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oobyCAAAD0UlEQVRYhe2XX0xbZRjGf6enpTBa2kKBDkLYRhisCGNjBDM1YZl/cMFk0WgWNXFmmdvULMvMDMmWqNOFJS7RSYgzGECNN95ML7mZ0exm+OdmQYXhJoN0maBjZmvaUvp4UdoCA1JB4GZPci6+73vP+/ze9zvnyzmGJFZTllV1vw8AICl5/Uf5gD4gADy6aM8lAHz77GNOvfOKV0BwpQEaAYV+3iSpXl63KeDkSgJcPfC0W1KdpDp91VosQIBnJQAOZNgMBS/7pdEa6UqV9E+t/GV2AV8uN0AGEDx7tCBe/c0aabxW0jZd+rw00YWK5QQ4W1xolQI1UmiLfvmmTN91r5OGHpC0TU80ZAu4uFwAxYB62kskPajPTif3XU8+7JBCdbpxsSIxt3M5AHoe2pwlRbZKqtPzTTlJAECxnyolNejQMx4B19IFSPck3A483vVeMcQEUVFdmZlc3LTBjuEw4W6YM2+txWY11gH70kmcLkD33qdclDe7YDAMMZHvsSYX3TkWcJowPMGa6ixaX8sH+DCd/OkA7DUtlLedLIK/oxADYuD1mCkApwl2I74ZIxHeeLOQwjyrAzi1VAATaGt9vQBHbTaMROJ3REWeOwWQm2OCzYgP/opCUQbnWnwALYB3KQCtPq/VcazFByNhsEyZRESuKwXgcU0BSGA1YDDM7oP5bN5oB2hfLIAPONZx3AdrbfHKpvyJirzs1K2mBci0xLcAIDgJWQadbxcBPAf4FwPQUV+VSfPBfLgSjleW0J0Y+WV2/GV2ABobsiEYS62bBgyE2LrHQ/MjDoCu+UyM6e+/YSRN6oHevvNl+HflwG+heNKEQoJyOwQm6OsPUbUrB/rDU0mmYmLAhgwCPwQp3jEA0AT0ADPOnPk60P1CUw7+3e549dPNAbwmtwfD7D8R4PhHf/L1uTEotKbME5mvRShqdHJ4jwegI90OvGjAF7d+rMRVlgnDkXsxq7I4sX+IU5+OJacil/3Y3CbcnkzFxQCflfBoFNeWXwlH9Crw8UIdsAOfvHsoH1edA67PYQ4QibF+fUZyWOKzYTgtEJ11nFuAGxPY/Wt4/3ABwBnAtlAHWkt8tpbrlyribb81ObOtCZkGOC20tY9ydSTCkZfyKK3OgpvRe4EFuEwwoWJ7PwNDkQ8kHZ0PQBc6S9nxcgmE7s588qcrKsg0iH8eGMAkBCcgY6H4bC50DrNz3xCSkoHWWaHjXefH3b2BCRiLzl399MoMA8MAxbRwLECuld7v7wD8MX16dgdqgdPAxmk2/4cSeH3AEUm/zwmwGlr1P6P7AP8CI9oMCw9ZmgsAAAAASUVORK5CYII=\"></div><div style=\"margin-left: 28px;text-align:left !important;\"><span class=\"pdw-labl\" style=\"color:#fff;margin-left: 10px;\">We have detected security issue with your input text.</span> <br><span class=\"pdw-labl\" style=\"color:#fff;margin-left: 10px;\">Please check your input text and try again.</span></div>";
}

function chngelng(e) {
    LangChange = 1;
    userSelectLanguage = e;
    CheckOSDataAvailable('open');
    LangChange = 0;
}

function appendFormToken() {
    $('#CyberSiaraToken').remove();
    if (JQuryName('form .CaptchaSubmit').length > 0) {
        var e = document.createElement('input');
        e.type = 'hidden';
        e.id = 'CyberSiaraToken';
        e.name = 'CyberSiaraToken';
        e.value = CyberSiaraToken;
        JQuryName('.CaptchaSubmit').closest('form').append(e);
    }
}

function showValAlert() {
    _invalidCaptchaEmpty();
    _invalidCaptchaAppend();
    _invalidCaptchaBlock();
    if (!(JQuryName('.invalidCaptcha').innerWidth() > 430)) {
        JQuryName('.pdw-labl').css('font-size', '11px');
        JQuryName('.pdw-labl').css('margin-left', '21px');
        JQuryName('.pdw-labl').css('float', 'left');
    }
    if (0 == ErrorDetectStatus) {
        ErrorDetectStatus++;
        ErrorDetacted();
    }
}

function hideValAlert() {
    var e = 0;
    JQuryName('textarea').each(function () {
        if (!(/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(this.value) || !!!(/select(.*?)from(.*?)/.test(this.value.toLowerCase()) || /delete from(.*?)/.test(this.value.toLowerCase()) || /truncate table(.*?)/.test(this.value.toLowerCase()) || /drop table(.*?)/.test(this.value.toLowerCase()) || /or (.*?)=(.*?)/.test(this.value.toLowerCase())) && !/<\s?[^\>]*\/?\s?>/i.test(this.value) && !/\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i.test(this.value) && !this.value.match('www.') && !this.value.match('http://') && !this.value.match('https://') && !this.value.match('--'))) {
            e++;
        }
    });
    JQuryName('input[type=text]').each(function () {
        if (!(/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(this.value) || !!!(/select(.*?)from(.*?)/.test(this.value.toLowerCase()) || /delete from(.*?)/.test(this.value.toLowerCase()) || /truncate table(.*?)/.test(this.value.toLowerCase()) || /drop table(.*?)/.test(this.value.toLowerCase()) || /or (.*?)=(.*?)/.test(this.value.toLowerCase())) && !/<\s?[^\>]*\/?\s?>/i.test(this.value) && !/\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i.test(this.value) && !this.value.match('www.') && !this.value.match('http://') && !this.value.match('https://') && !this.value.match('--'))) {
            e++;
        }
    });
    if (!(e > 0)) {
        ErrorDetectStatus = 0;
        _invalidCaptchaNULL();
        _invalidCaptchaNONE();
    }
}

function GetLanguageList() {
    JQuryName.ajax({
        type: 'GET', dataType: 'json', url: API_SERVER + 'CaptchaLanguage/LanguageList', success: function (e) {
            if ('success' == e.data.Message) {
                var t = e.data.data;
                var a = '';
                for (var i = 0; i < t.length; i++) {
                    var n = '';
                    if (API_SERVER.includes('staging')) {
                        n = 'https://staging.mycybersiara.com/api/CaptchaFormate/Flag/' + t[i].CL_Flag;
                        t[i].flagFullPath = n;
                    } else {
                        n = 'https://embed.mycybersiara.com/CaptchaFormate/Flag/' + t[i].CL_Flag;
                        t[i].flagFullPath = n;
                    }
                    a = t[i].CL_Id == userSelectLanguage ? a + "<li class=\"input-option activeClass\" data-value=\"" + t[i].CL_Id + "\"><img src=\"" + n + "\"  alt=\"\" />" + t[i].CL_Name + ' </li>' : a + "<li  class=\"input-option\" data-value=\"" + t[i].CL_Id + "\"><img src=\"" + n + "\"  alt=\"\" />" + t[i].CL_Name + ' </li>';
                }
                JQuryName('#language-option').empty();
                JQuryName('#language-option').append(a);
                for (var o = 0; o < t.length; o++) {
                    if (t[o].CL_Id == userSelectLanguage) {
                        JQuryName('#language-drop .textfirst').empty();
                        var r = "<img src=\"" + t[o].flagFullPath + "\" alt=\"\"/> " + t[o].CL_Name;
                        JQuryName('#language-drop .textfirst').append(r);
                    }
                }
                SetDropdown();
            }
        }
    });
}

function _DefaultLanguageSelect(e) {
}

function ErrorDetacted() {
    var e = {
        MasterUrl: MasterUrlIds,
        DeviceName: navigator.userAgent,
        BrowserIdentity: Historydata,
        Protocol: window.location.protocol
    };
    JQuryName.ajax({
        type: 'POST',
        async: false,
        dataType: 'json',
        url: API_SERVER + 'v2/SubmitCaptcha/ErrorDetected',
        data: e,
        success: function (e) {
            e.Message;
        }
    });
}

function ContinuecloseModal() {
    Pl_RefreshFlag = false;
    PlSecond = 0;
    JQuryName('#language-option').removeClass('lanHeights');
    JQuryName('.pluginPopups').removeClass('HeightPopBg');
    JQuryName('.input-option').attr('style', 'display:none');
    document.getElementById('myModal').style.display = 'none';
    JQuryName('.SiaraShield-' + iRequest + ' .text-wrapper').empty();
    JQuryName('.SiaraShield-' + iRequest + ' .text-wrapper').append("<span class=\"text-wrapper\"><span class=\"line line1\">Human Verification</span><br><span class=\"letters\">Click to Continue</span></span>");
    drpcounter = 0;
    JQuryName('#sliderp').val(0);
    $('#CyberSiaraToken').remove();
    CyberSiaraToken = '';
}

function RightcloseModal() {
    Pl_RefreshFlag = false;
    PlSecond = 0;
    document.getElementById('myModal').style.display = 'none';
}

function SetWrong(e) {
    JQuryName('#input-plugin-div').hide();
    JQuryName('#wrongCaptchaDivicon').show();
    ls_OpenCaptchaTime = '';
    ls_WrongIndex = e;
    JQuryName('.SiaraShield-' + e + ' #wrongCaptchaDivicon').empty();
    JQuryName('.SiaraShield-' + e + ' #wrongCaptchaDivicon').append("<div id=\"WrongcptchaDiv\" class=\"sweet-alert showSweetAlert\" style=\"display: block;float: none!important;;width: 100%;margin:-3px 0 0 0 !important;z-index: 9999 !important;padding:0 0 0 80px!important;\"><div class=\"sa-icon sa-error animateErrorIcon CyberSuceessCaptcha\" style = \"display: block;margin: 0 !important;position: relative !important;box-shadow: none !important;width: 45px !important;height: 45px !important;float: left !important;border-color: #fd0808 !important;box-sizing: content-box !important;right:0!important;\"><span class=\"sa-x-mark animateXMark\" style=\"width: 45px !important;height: 45px !important;\"><span class=\"sa-line sa-left\" style=\"left: 12px !important;top: 21px !important;background-color: #fd0808 !important;\"></span><span class=\"sa-line sa-right\" style=\"right: 10px !important;top: 21px !important;background-color: #fd0808 !important;\"></span></span><div class=\"sa-placeholder\" style=\"width: 45px !important;height: 45px !important;\"></div><div class=\"sa-fix\" style=\"height: 28px;\"></div></div></div>");
}

function SetRight(e) {
    ls_OpenCaptchaTime = '';
    ls_wrongReload = '';
    JQuryName('.CaptchaSubmit').attr('style', 'display:block !important');
    ls_LoadStatus = 'Load';
    ls_StatusRW = 'R';
    ls_WrongIndex = e;
    _SliderVerify();
    (function (e) {
        'use strict';

        e.fn.idle = function (t) {
            var a;
            var i;
            var n = t.startAtIdle || false;
            var o = !t.startAtIdle || true;
            var r = e.extend({}, {
                idle: 60000, events: 'mousemove keydown mousedown touchstart', onIdle: function () {
                }, onActive: function () {
                }, onHide: function () {
                }, onShow: function () {
                }, keepTracking: true, startAtIdle: false, recurIdleCall: false
            }, t);
            var l = null;
            e(this).on('idle:stop', {}, function () {
                e(this).off(r.events);
                r.keepTracking = false;
                a(l, r);
            });
            a = function (e, t) {
                if (n) {
                    t.onActive.call();
                    n = false;
                }
                clearTimeout(e);
                return t.keepTracking ? i(t) : undefined;
            };
            i = function (e) {
                return (e.recurIdleCall ? setInterval : setTimeout)(function () {
                    n = true;
                    e.onIdle.call();
                }, e.idle);
            };
            return this.each(function () {
                l = i(r);
                e(this).on(r.events, function () {
                    l = a(l, r);
                });
                if (r.onShow || r.onHide) {
                    e(document).on('visibilitychange webkitvisibilitychange mozvisibilitychange msvisibilitychange', function () {
                        if (document.hidden || document.webkitHidden || document.mozHidden || document.msHidden) {
                            if (o) {
                                o = false;
                                r.onHide.call();
                            }
                        } else if (!o) {
                            o = true;
                            r.onShow.call();
                        }
                    });
                }
            });
        };
    })(jQuery);
    jQuery(document).idle({
        onIdle: function () {
            if (cStatus) {
                ls_LoadStatus = 'Load';
                ls_wrongReload = '';
                GetCyberSiara();
                GetLanguageList();
                cStatus = false;
                keyCounter = 0;
                $('#CyberSiaraToken').remove();
                CyberSiaraToken = '';
            }
        }, idle: 60000
    });
}

function VerifySetRight() {
    JQuryName('.CaptchaSubmit').attr('style', 'display:block !important');
    _SliderVerify();
    var e = 0;
    !function (e) {
        'use strict';

        e.fn.idle = function (t) {
            var a;
            var i;
            var n = t.startAtIdle || false;
            var o = !t.startAtIdle || true;
            var r = e.extend({}, {
                idle: 60000, events: 'mousemove keydown mousedown touchstart', onIdle: function () {
                }, onActive: function () {
                }, onHide: function () {
                }, onShow: function () {
                }, keepTracking: true, startAtIdle: false, recurIdleCall: false
            }, t);
            var l = null;
            e(this).on('idle:stop', {}, function () {
                e(this).off(r.events);
                r.keepTracking = false;
                a(l, r);
            });
            a = function (e, t) {
                if (n) {
                    t.onActive.call();
                    n = false;
                }
                clearTimeout(e);
                return t.keepTracking ? i(t) : undefined;
            };
            i = function (e) {
                return (e.recurIdleCall ? setInterval : setTimeout)(function () {
                    n = true;
                    e.onIdle.call();
                }, e.idle);
            };
            return this.each(function () {
                l = i(r);
                e(this).on(r.events, function () {
                    l = a(l, r);
                });
                if (r.onShow || r.onHide) {
                    e(document).on('visibilitychange webkitvisibilitychange mozvisibilitychange msvisibilitychange', function () {
                        if (document.hidden || document.webkitHidden || document.mozHidden || document.msHidden) {
                            if (o) {
                                o = false;
                                r.onHide.call();
                            }
                        } else if (!o) {
                            o = true;
                            r.onShow.call();
                        }
                    });
                }
            });
        };
    }(jQuery);
    jQuery(document).idle({
        onIdle: function () {
            if (0 == e) {
                e++;
                InitCaptcha(MasterUrlIds);
                $('#CyberSiaraToken').remove();
                yberSiaraToken = '';
            }
        }, idle: 30000
    });
}

function RefreshCaptcha() {
    ls_LoadStatus = 'AutoLoad';
    CheckOSDataAvailable('reload');
    RefreshDuration = new Date();
    chapchafilltimer = new Date();
}

function myLck(e) {
    _RemoveAccesiblityPopup();
    iRequest = e;
    if (null == ls_StatusRW) {
        JQuryName('.SiaraShield-' + e + ' .text-wrapper').empty();
        JQuryName('.SiaraShield-' + e + ' .text-wrapper').append("<div class=\"loader\">Loading...</div>");
        RefreshDuration = new Date();
        setTimeout(function () {
            ;
            if (!(null != Historydata && '' != Historydata)) {
                findhiddnfp();
            }
            VerifiedDevice(MasterUrlIds, Historydata);
            if (0 == lngGetStr) {
                GetLanguageList();
                lngGetStr++;
            }
        }, 200);
    }
}

function _SliderVerify() {
    JQuryName('#mainplugin').show();
    document.querySelector("input[type=\"range\"]").style.opacity = '1';
    JQuryName('.cs-slider-verify-text').addClass('cs-verified-box');
    JQuryName('#sliderp').attr('disabled', 'disabled');
    JQuryName('#contact-submit').css('display', 'block');
    inputRange.value = 150;
}

function successHandler(e) {
    e = e.replace('cs-slideToUnlock CyberDrag Uinputno-', '');
    iRequest = e;
    myLck(e);
}

function Open_Plugin_() {
    var e = new Date();
    ActiveIndex = iRequest;
    if (!cStatus) {
        ls_Rfreshcpcha = 'yes';
        document.getElementById('myModal').style.display = 'block';
        JQuryName('.tooltipCyber').addClass('activeTool');
        JQuryName('.SiaraShield-' + ActiveIndex + ' #Input_Captcha').focus();
        JQuryName('.CaptchaSubmit').attr('style', 'display:none');
        JQuryName('.SiaraShield-' + ActiveIndex + ' Input_Captcha').val('');
        ls_OpenCaptchaTime = '';
        var t = e.getSeconds() + 30;
        e.setSeconds(t);
        ls_OpenCaptchaTime = e;
        _ResetPLugin30SecIdle();
    }
}

function _ResetPLugin30SecIdle() {
    !function (e) {
        'use strict';

        e.fn.idle = function (t) {
            var a;
            var i;
            var n = t.startAtIdle || false;
            var o = !t.startAtIdle || true;
            var r = e.extend({}, {
                idle: 30000, events: 'mousemove keydown mousedown touchstart', onIdle: function () {
                }, onActive: function () {
                }, onHide: function () {
                }, onShow: function () {
                }, keepTracking: true, startAtIdle: false, recurIdleCall: false
            }, t);
            var l = null;
            e(this).on('idle:stop', {}, function () {
                e(this).off(r.events);
                r.keepTracking = false;
                a(l, r);
            });
            a = function (e, t) {
                if (n) {
                    t.onActive.call();
                    n = false;
                }
                clearTimeout(e);
                return t.keepTracking ? i(t) : undefined;
            };
            i = function (e) {
                return (e.recurIdleCall ? setInterval : setTimeout)(function () {
                    n = true;
                    e.onIdle.call();
                }, e.idle);
            };
            return this.each(function () {
                l = i(r);
                e(this).on(r.events, function () {
                    l = a(l, r);
                });
                if (r.onShow || r.onHide) {
                    e(document).on('visibilitychange webkitvisibilitychange mozvisibilitychange msvisibilitychange', function () {
                        if (document.hidden || document.webkitHidden || document.mozHidden || document.msHidden) {
                            if (o) {
                                o = false;
                                r.onHide.call();
                            }
                        } else if (!o) {
                            o = true;
                            r.onShow.call();
                        }
                    });
                }
            });
        };
    }(jQuery);
    jQuery(document).idle({
        onIdle: function () {
            if ('' != ls_OpenCaptchaTime) {
                ls_OpenCaptchaTime = '';
                JQuryName('#sliderp').val(0);
                $('#CyberSiaraToken').remove();
                CyberSiaraToken = '';
                ContinuecloseModal();
            }
        }, idle: 30000
    });
}

function OpenCaptchaSlid(e) {
    var t = new Date();
    ls_Rfreshcpcha = 'yes';
    _captchaSubmitNone();
    JQuryName('.SiaraShield-' + e + ' #Input_Captcha').val('');
    ls_OpenCaptchaTime = '';
    var a = t.getSeconds() + 60;
    t.setSeconds(a);
    ls_OpenCaptchaTime = t;
}

function UptoDateFP() {
    var e = {
        RequestID: RequestId, FPID: Historydata, VisiterId: visiter_Id
    };
    JQuryName.ajax({
        type: 'POST',
        async: false,
        dataType: 'json',
        url: API_SERVER + 'v2/verification/fp',
        data: e,
        success: function (e) {
            FpStatus = e.FpStatus;
        }
    });
}

function autosubmitPlugin(e, t) {
    if (e != '') {
        t = (t = t.replace('Uinputno-', '')).replace('focus-visible', '');
        bcounter = 0;
        JQuryName('.SiaraShield-' + t + ' #RequestNumber').text();
        var a = new Date();
        var n = new Date(a).getTime() - new Date(ls_MainTimerstarts).getTime();
        var o = new Date();
        var r = ReloadPlgunDuration(RefreshDuration, o);
        var l = {
            MasterUrl: JQuryName('.SiaraShield-' + t + ' #RequestNumber').text(),
            DeviceName: navigator.userAgent,
            UserCaptcha: JQuryName('.SiaraShield-' + t + ' .Uinput').val(),
            BrowserIdentity: Historydata,
            Timespent: n,
            Protocol: window.location.protocol,
            Flag: 'Captcha',
            VisiterId: visiter_Id,
            RequestID: RequestId,
            second: r,
            fillupsecond: ReloadPlgunDuration(chapchafilltimer, o)
        };
        if (0 == bcounter) {
            bcounter++;
            JQuryName.ajax({
                type: 'POST',
                async: false,
                dataType: 'json',
                url: API_SERVER + 'v2/SubmitCaptcha/SubmitCaptchInfo',
                data: l,
                success: function (e) {
                    CyberSiaraToken = e.data;
                    bcounter = 0;
                    return 'success' == e.Message ? (cStatus = true, JQuryName('#txtdiv').attr('style', 'display:none;'), RightcloseModal(), SetRight(t), JQuryName('.SiaraShield-' + t + ' .invalidCaptcha').css('display', 'none'), _siaraShieldIndexNULL(t), appendFormToken(), void JQuryName('#sliderp').val(150)) : (JQuryName('#txtdiv').attr('style', 'display:none;'), SetWrong(t), void _siaraShieldIndexNULL(t));
                }
            });
        }
    }
}

function UserWaitingDuration(e, t) {
    var a = new Date(e);
    var i = new Date(t).getTime() - a.getTime();
    var n = Math.floor(i / 1000 / 60 / 60);
    i -= 1000 * n * 60 * 60;
    var o = Math.floor(i / 1000 / 60);
    i -= 1000 * o * 60;
    var r = Math.floor(i / 1000);
    i -= 1000 * r;
    return parseInt(n + '0' + o + '0' + r);
}

function VerifiedDevice(e, t) {
    var a = new Date();
    var i = UserWaitingDuration(wedgetLoadTime, a);
    var n = {
        MasterUrl: e,
        DeviceName: navigator.userAgent,
        BrowserIdentity: t,
        Protocol: window.location.protocol,
        VisiterId: visiter_Id,
        second: i,
        RequestID: RequestId
    };
    JQuryName.ajax({
        type: 'POST',
        async: false,
        dataType: 'json',
        url: API_SERVER + 'v2/SubmitCaptcha/VerifiedSubmit',
        data: n,
        success: function (e) {
            if ('success' == e.Message) {
                if (null == e.Captcha) {
                    return void VerifyInitCaptcha(MasterUrlIds);
                }
                cStatus = true;
                CyberSiaraToken = e.data;
                for (var t = 0; t < _pluginCount(); t++) {
                    _SiaraShieldDVIndexNULL(t);
                    JQuryName('.SiaraShield-' + t).append(e.HtmlFormate);
                }
                cStatus = true;
                VerifiMuActive = 1;
                appendFormToken();
                wedgetLoadTime = new Date();
                VerifySetRight();
                return void JQuryName('#sliderp').val(150);
            }
            CheckOSDataAvailable('open');
            Open_Plugin_();
        }
    });
}

function CheckCaptcha() {
    return CheckErrorVal() ? (_invalidCaptchaNULL(), _invalidCaptchaNONE(), 1 == keyExpired || ('blockip' != JQuryName('#Redirect_Text').text() ? '' != JQuryName('#Input_Captcha').val() ? (_invalidCaptchaNONE(), 0 != cStatus && (checkStatus = true, 0 == checkStatus && (_invalidCaptchaBlock(), JQuryName('.invalidCaptcha').text('Sorry wrong captcha')), checkStatus)) : 0 != cStatus || (_invalidCaptchaBlock(), JQuryName('.invalidCaptcha').text('Please slide to verify captcha'), false) : (_input_CaptchaDisable(), _invalidCaptchaBlock(), false))) : (_invalidCaptchaEmpty(), _invalidCaptchaAppend(), _invalidCaptchaBlock(), false);
}

function appendCaptchaToken(e) {
    if (JQuryName('form .CaptchaSubmit').length > 0) {
        var t = document.createElement('input');
        t.type = 'hidden';
        t.id = 'RequestNumber';
        t.name = 'RequestNumber';
        t.value = e;
        JQuryName('.CaptchaSubmit').closest('form').append(t);
    }
}

function CheckOSDataAvailable(e) {
    Ltype = e;
    JQuryName.ajax({
        async: false,
        type: 'POST',
        dataType: 'json',
        url: API_SERVER + 'GenerateCaptcha/Captcha',
        data: SetRequestJson(),
        success: function (e) {
            chapchafilltimer = new Date();
            RequestId = e.RequestId;
            FpStatus = e.FpStatus;
            userSelectLanguage = e.VisiterLanguage;
            if (null != e.HtmlFormate) {
                if ('Key Expiry' == e.Message) {
                    _SiaraShieldDVIndexNULL(iRequest);
                    keyExpired = true;
                } else {
                    JQuryName('.SiaraShield-' + iRequest + ' #Img_Original').attr('src', e.HtmlFormate);
                    JQuryName('.SiaraShield-' + iRequest + ' #RequestNumber').innerHTML = e.data;
                    if ('wrongReload' == ls_wrongReload) {
                        ls_wrongReload = '';
                        OpenCaptchaSlid(ls_WrongIndex);
                        JQuryName('.SiaraShield-' + ls_WrongIndex + ' #Input_Captcha').focus();
                        JQuryName('.SiaraShield-' + iRequest + ' #Img_Original').css('background-image', 'url(' + e.HtmlFormate + ')');
                        ls_WrongIndex = 0;
                    }
                    Pl_RefreshFlag = true;
                    PlSecond = 0;
                }
            }
            $('cy-sa-si-main-img').attr('src', e.HtmlFormate);
        }
    });
}

function _invalidCaptchaNONE() {
    JQuryName('.invalidCaptcha').css('display', 'none');
}

function _invalidCaptchaNULL() {
    JQuryName('.invalidCaptcha').text('');
}

function _invalidCaptchaBlock() {
    JQuryName('.invalidCaptcha').css('display', 'block');
}

function _invalidCaptchaEmpty() {
    JQuryName('.invalidCaptcha').empty();
}

function _invalidCaptchaAppend() {
    JQuryName('.invalidCaptcha').append("<div style=\"position:absolute;margin: 6px 10px 8px -1px; clear:both;\"><img style=\"width:32px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTI4VDExOjI0OjA2KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0yOFQxMToyNToxNiswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0yOFQxMToyNToxNiswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MmZmYjJjNy0wMzhlLTM4NGUtYjlhYi0zNWQxNmU4YjY3NjgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxZDRiNmNmYy00NzRkLTFjNDEtODk2Yy1hY2UyYmM5ZGE2MjEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNDE2OGQ3Yi1jZTMzLTgzNDktYTRjMC0xMTJhNjllMjg4MjkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmI0MTY4ZDdiLWNlMzMtODM0OS1hNGMwLTExMmE2OWUyODgyOSIgc3RFdnQ6d2hlbj0iMjAyMC0xMS0yOFQxMToyNDowNiswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MmZmYjJjNy0wMzhlLTM4NGUtYjlhYi0zNWQxNmU4YjY3NjgiIHN0RXZ0OndoZW49IjIwMjAtMTEtMjhUMTE6MjU6MTYrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oobyCAAAD0UlEQVRYhe2XX0xbZRjGf6enpTBa2kKBDkLYRhisCGNjBDM1YZl/cMFk0WgWNXFmmdvULMvMDMmWqNOFJS7RSYgzGECNN95ML7mZ0exm+OdmQYXhJoN0maBjZmvaUvp4UdoCA1JB4GZPci6+73vP+/ze9zvnyzmGJFZTllV1vw8AICl5/Uf5gD4gADy6aM8lAHz77GNOvfOKV0BwpQEaAYV+3iSpXl63KeDkSgJcPfC0W1KdpDp91VosQIBnJQAOZNgMBS/7pdEa6UqV9E+t/GV2AV8uN0AGEDx7tCBe/c0aabxW0jZd+rw00YWK5QQ4W1xolQI1UmiLfvmmTN91r5OGHpC0TU80ZAu4uFwAxYB62kskPajPTif3XU8+7JBCdbpxsSIxt3M5AHoe2pwlRbZKqtPzTTlJAECxnyolNejQMx4B19IFSPck3A483vVeMcQEUVFdmZlc3LTBjuEw4W6YM2+txWY11gH70kmcLkD33qdclDe7YDAMMZHvsSYX3TkWcJowPMGa6ixaX8sH+DCd/OkA7DUtlLedLIK/oxADYuD1mCkApwl2I74ZIxHeeLOQwjyrAzi1VAATaGt9vQBHbTaMROJ3REWeOwWQm2OCzYgP/opCUQbnWnwALYB3KQCtPq/VcazFByNhsEyZRESuKwXgcU0BSGA1YDDM7oP5bN5oB2hfLIAPONZx3AdrbfHKpvyJirzs1K2mBci0xLcAIDgJWQadbxcBPAf4FwPQUV+VSfPBfLgSjleW0J0Y+WV2/GV2ABobsiEYS62bBgyE2LrHQ/MjDoCu+UyM6e+/YSRN6oHevvNl+HflwG+heNKEQoJyOwQm6OsPUbUrB/rDU0mmYmLAhgwCPwQp3jEA0AT0ADPOnPk60P1CUw7+3e549dPNAbwmtwfD7D8R4PhHf/L1uTEotKbME5mvRShqdHJ4jwegI90OvGjAF7d+rMRVlgnDkXsxq7I4sX+IU5+OJacil/3Y3CbcnkzFxQCflfBoFNeWXwlH9Crw8UIdsAOfvHsoH1edA67PYQ4QibF+fUZyWOKzYTgtEJ11nFuAGxPY/Wt4/3ABwBnAtlAHWkt8tpbrlyribb81ObOtCZkGOC20tY9ydSTCkZfyKK3OgpvRe4EFuEwwoWJ7PwNDkQ8kHZ0PQBc6S9nxcgmE7s588qcrKsg0iH8eGMAkBCcgY6H4bC50DrNz3xCSkoHWWaHjXefH3b2BCRiLzl399MoMA8MAxbRwLECuld7v7wD8MX16dgdqgdPAxmk2/4cSeH3AEUm/zwmwGlr1P6P7AP8CI9oMCw9ZmgsAAAAASUVORK5CYII=\"></div><div style=\"margin-left: 28px;text-align:left !important;\"><span class=\"pdw-labl\" style=\"color:#fff;margin-left: 10px;\">We have detected security issue with your input text.</span> <br><span class=\"pdw-labl\" style=\"color:#fff;margin-left: 10px;\">Please check your input text and try again.</span></div>");
}

function _input_CaptchaDisable() {
    JQuryName('#Input_Captcha').attr('disabled', 'disabled');
}

function _siaraShieldIndexNULL(e) {
    JQuryName('.SiaraShield-' + e + ' .Uinput').val('');
}

function _BugReport() {
    _RemoveAccesiblityPopup();
    var e = window.location.href;
    window.open('https://mycybersiara.com/ReportBug?rt=b&d=' + e, '_blank').focus();
}

function _BugReportWithFile() {
    _RemoveAccesiblityPopup();
    var e = window.location.href;
    window.open('https://mycybersiara.com/ReportBug?rt=f&d=' + e, '_blank').focus();
}

function _AccessibilityRequest() {
    _RemoveAccesiblityPopup();
    window.open('https://www.cybersiara.com/accessibility.php', '_blank').focus();
}

function _HafSlide() {
    var e = new Date();
    var t = UserWaitingDuration(wedgetLoadTime, e);
    var a = {
        MasterUrl: MasterUrlIds,
        DeviceName: navigator.userAgent,
        BrowserIdentity: Historydata,
        Protocol: window.location.protocol,
        VisiterId: visiter_Id,
        second: t,
        RequestID: RequestId
    };
    JQuryName.ajax({
        type: 'POST',
        async: false,
        dataType: 'json',
        url: API_SERVER + 'v2/SubmitCaptcha/HalfSlide',
        data: a,
        success: function (e) {
            e.Message;
        }
    });
}

JQuryName(function () {
    JQuryName('input[type=text]').on('keyup', function (e) {
        if (!(/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(JQuryName(this).val()) || !!!(/select(.*?)from(.*?)/.test(JQuryName(this).val().toLowerCase()) || /delete from(.*?)/.test(JQuryName(this).val().toLowerCase()) || /truncate table(.*?)/.test(JQuryName(this).val().toLowerCase()) || /drop table(.*?)/.test(JQuryName(this).val().toLowerCase()) || /or (.*?)=(.*?)/.test(JQuryName(this).val().toLowerCase())) && !/<\s?[^\>]*\/?\s?>/i.test(JQuryName(this).val()) && !/\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i.test(JQuryName(this).val()) && !JQuryName(this).val().match('www.') && !JQuryName(this).val().match('http://') && !JQuryName(this).val().match('https://') && !JQuryName(this).val().match('--'))) {
            JQuryName(this).attr('style', 'border:1px solid red;');
            showValAlert();
        } else {
            JQuryName(this).attr('style', 'border:block;');
            hideValAlert();
        }
    });
});
JQuryName(function () {
    JQuryName('textarea').on('keyup', function (e) {
        if (!(/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(JQuryName(this).val()) || !!!(/select(.*?)from(.*?)/.test(JQuryName(this).val().toLowerCase()) || /delete from(.*?)/.test(JQuryName(this).val().toLowerCase()) || /truncate table(.*?)/.test(JQuryName(this).val().toLowerCase()) || /drop table(.*?)/.test(JQuryName(this).val().toLowerCase()) || /or (.*?)=(.*?)/.test(JQuryName(this).val().toLowerCase())) && !/<\s?[^\>]*\/?\s?>/i.test(JQuryName(this).val()) && !/\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i.test(JQuryName(this).val()) && !JQuryName(this).val().match('www.') && !JQuryName(this).val().match('http://') && !JQuryName(this).val().match('https://') && !JQuryName(this).val().match('--'))) {
            JQuryName(this).attr('style', 'border:1px solid red;');
            showValAlert();
        } else {
            JQuryName(this).attr('style', 'border:block;');
            hideValAlert();
        }
    });
});
window.setInterval(function () {
    if (1 == JQuryName('#WrongcptchaDiv').length) {
        ls_OpenCaptchaTime = '';
        ls_LoadStatus = 'Load';
        ls_wrongReload = 'wrongReload';
        JQuryName('#wrongCaptchaDivicon').empty();
        JQuryName('#input-plugin-div').show();
        JQuryName('#wrongCaptchaDivicon').hide();
        CheckOSDataAvailable('reload');
        keyCounter = 0;
    }
}, 1500);
window.setInterval(function () {
    if (null != Historydata && '' != Historydata && 'fail' == FpStatus && '0' != RequestId) {
        UptoDateFP();
    }
}, 1000);
document.onkeydown = function (e) {
    return 123 != e.keyCode && (!e.ctrlKey || !e.shiftKey || e.keyCode != 'I'.charCodeAt(0)) && (!e.ctrlKey || !e.shiftKey || e.keyCode != 'J'.charCodeAt(0)) && (!e.ctrlKey || e.keyCode != 'U'.charCodeAt(0)) && undefined;
};
JQuryName(document).on('dragstart', function () {
    return false;
});