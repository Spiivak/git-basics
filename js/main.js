'use strict'

function onBallClick(elBall) {
    var currentWidth = parseInt(elBall.style.width, 10) || 0;

    if (currentWidth === 400) {
        elBall.style.width = 100 + 'px';
    } else {
        elBall.style.width = getRandomInt(20, 60) + 'px';
    }

}