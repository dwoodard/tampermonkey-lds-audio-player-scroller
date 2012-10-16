// ==UserScript==
// @name       Tampermonkey Lds Audio Player Scroller
// @namespace  http://dustinwoodard.net
// @version    0.1
// @description  autoscroller for the audio player
// @match      http://www.lds.org/scriptures/*
// @copyright  2012+, You
// ==/UserScript==

if(!Jquery){
    console.log('no Jquery');
    continue;
}


$('.audio-player').scroll(function(e) {
console.log(e);
});