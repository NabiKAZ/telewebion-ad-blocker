// ==UserScript==
// @name         Telewebion.com Ad Blocker
// @namespace    https://github.com/NabiKAZ/telewebion-ad-blocker
// @version      0.1
// @description  Telewebion.com Website Ad Blocker
// @author       @NabiKAZ
// @match        https://www.telewebion.com/*
// @match        https://telewebion.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var interval = setInterval(function() {

        var el = document.getElementsByClassName('vast-skip-button')[0];
        if (el) {
            el.style.display = 'block';
            el.classList.add('enabled');
            el.click();
            clearInterval(interval);
        } else {
            return;
        }

    }, 500);

})();
