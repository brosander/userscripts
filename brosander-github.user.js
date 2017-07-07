// ==UserScript==
// @name         Github Userscript
// @namespace    https://github.com/brosander/userscripts
// @version      0.0.1
// @description  Make Github better
// @author       Bryan Rosander
// @match        https://github.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    var setWidth = function() {
        if (window.location.href.match(/^https?:\/\/github\.com\/.*\/.*\/pull\/[0-9]+\/files$/)) {
            Array.prototype.forEach.call(document.getElementsByClassName("new-discussion-timeline"), function(elem, index) {
                elem.style.width = '90%';
            });
        }
    };

    setWidth();
    $(document).on('pjax:complete', function() {
        setWidth();
    });
})();
