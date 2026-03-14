// ==UserScript==
// @name         yt-music-lighter
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  squeeze more performance out of youtube music on weaker hardware
// @author       sophie
// @match        https://music.youtube.com/*
// @icon         https://music.youtube.com/img/favicon_32.png
// @grant        none
// @run-at       document-start
// ==/UserScript==

function blockElements() {
  const topRightBtns = document.getElementById('right-content');
  if (topRightBtns) {
    topRightBtns.remove();
  }
  const topLeftBtns = document.getElementById('left-content');
  if (topLeftBtns) {
    topLeftBtns.remove();
  }
  const choices = document.querySelector('.style-scope.ytmusic-section-list-renderer');
  if (choices) {
    choices.remove();
  }
  const sidebar = document.getElementById('mini-guide');
  if (sidebar) {
    sidebar.remove();
  }
  const sidebarbg = document.getElementById('mini-guide-background');
  if (sidebarbg) {
    sidebarbg.remove();
  }
  const backgroundImage = document.querySelectorAll('img[src*="wsbg@4000x2250.png"]');
  backgroundImage.forEach(img => img.remove());

  // player page
  const playerTabs = document.getElementById('tabsContainer');
  if (playerTabs) {
    playerTabs.remove();
  }
}


blockElements();
setTimeout(blockElements, 1000);
const observer = new MutationObserver(blockElements);
observer.observe(document.body, { childList: true, subtree: true });