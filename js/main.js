'use strict'

function onBallClick(elBall) {
    var currentWidth = parseInt(elBall.style.width, 10) || 0;
    var currentHeight = parseInt(elBall.style.height, 10) || 0;

    elBall.style.width = (currentWidth + 50) + 'px';
    elBall.style.height = (currentHeight + 50) + 'px';

}