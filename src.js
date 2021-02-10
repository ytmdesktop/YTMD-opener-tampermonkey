// ==UserScript==
// @name         YTMD opener
// @namespace    http://ytmdesktop.app/
// @version      0.1
// @description  Add a button in youtube music to help you open it in YTMDesktop app
// @author       You
// @match        https://music.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var button = document.createElement('button');
    button.style = `background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    font-family: Roboto, Noto Naskh Arabic UI, Arial, sans-serif;
    font-size: 15px;
    line-height: var(--ytmusic-title-line-height);
    font-weight: 500;`
    button.innerText = "Open In YTMDesktop"
    document.getElementById('right-content').prepend(button);
    const stopPlay = function(){
        var video = document.getElementsByTagName('video');
        if (video.length){
            video = video[0];
            if (!video.paused) {
                video.pause()
            }
        }
    }
    button.addEventListener('click', function() {
        var videoId = new URLSearchParams(window.location.search).get('v');
        var listId = new URLSearchParams(window.location.search).get('list');
        if (videoId) window.location = `ytmd://play/${videoId}/${listId}`;
        stopPlay();
    });
})();