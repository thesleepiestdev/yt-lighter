// ==UserScript==
// @name         yt-lighter
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  squeeze more performance out of youtube on weaker hardware
// @author       sophie
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function removeElements() {

        // remove voice search
        const micButton = document.getElementById('voice-search-button');
        if (micButton) {
            micButton.remove();
        }

        // remove logo
        const logo = document.getElementById('logo');
        if (logo) {
            logo.remove();
        }

        // remove suggested filters
        const suggestedFilters = document.querySelector('yt-related-chip-cloud-renderer.style-scope.ytd-watch-next-secondary-results-renderer');
        if (suggestedFilters) {
            suggestedFilters.remove();
        }

        // remove top right
        const end = document.getElementById('end');
        if (end) {
            end.remove();
        }

        // remove share button
        const share = document.querySelector('yt-button-view-model.ytd-menu-renderer');
        if (share) {
            share.remove();
        }

        // remove download button
        const download = document.querySelector('div#flexible-item-buttons.style-scope.ytd-menu-renderer');
        if (download) {
            download.remove();
        }

        // remove more button
        const more = document.querySelector('yt-button-shape#button-shape.style-scope.ytd-menu-renderer');
        if (more) {
            more.remove();
        }

        // remove theater mode button
        const theater = document.querySelector('button.ytp-size-button');
        if (theater) {
            theater.remove();
        }
    }

    const observer = new MutationObserver(removeElements);
    observer.observe(document.body, { childList: true, subtree: true });
    removeElements();

})();