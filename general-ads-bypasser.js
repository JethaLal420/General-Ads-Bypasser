// ==UserScript==
// @name         getthot.com bypasser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       JethaLal_420
// @match        https://getthot.com/*
// @icon         https://www.google.com/s2/favicons?domain=getthot.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(window.location.href.includes('https://getthot.com/')) {
        var text = document.querySelector('body > script:nth-child(10)').innerText
        var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var url = text.match(urlRegex)[0]
        console.log(url)
        window.open(url, '_self')
    }
})();
