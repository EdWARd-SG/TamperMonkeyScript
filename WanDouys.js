// ==UserScript==
// @name         豌豆
// @icon         https://www.wandouys.com/favicon.ico
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       EdWARd
// @include      https://www.wandouys.com/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @resource     jqueryUI_CSS https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css
// @grant        none
// ==/UserScript==

let $ = window.jQuery || window.$;
(async () => {
    'use strict';
    // Your code here...
    try {
        let _url = $('.embed-responsive-item').attr('src');
        let _index = _url.indexOf('url=') + 4;
        let _extractedURL = _url.substr(41);
        let _input = $(`<input id='url' onclick='this.focus();this.select()'>`);
        _input.css('width', '100%');
        _input.css('background-color', 'lightblue');
        //_input.css('top', 0);
        //_input.css('left', 0);
        _input.css('position', 'relative');
        _input.val(_extractedURL);
        $('body').prepend(_input);
    } catch(err) {
        console.errror(err);
    }
})();

$(document).bind('DOMSubtreeModified', async () => {
    try {
        if($('img[alt=close]').length > 0) {
            $('img[alt=close]').click();
        }
    } catch (err) {
        console.error(err);
    }
});